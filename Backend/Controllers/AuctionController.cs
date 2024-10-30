using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class AuctionsController : ControllerBase
{
    private readonly DatabaseContext _context;

    public AuctionsController(DatabaseContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<IActionResult> CreateAuction([FromBody] Auction auction)
    {
        _context.Auctions.Add(auction);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetAuction), new { id = auction.Id }, auction);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetAuction(int id)
    {
        var auction = await _context.Auctions.FindAsync(id);
        if (auction == null)
        {
            return NotFound();
        }
        return Ok(auction);
    }

    [HttpGet]
    public async Task<IActionResult> GetAuctions()
    {
        var currentDateTime = DateTime.UtcNow;              //aware of timezones and conversion when people submit auctions
        var auctions = await _context.Auctions
                                     .Where(a => a.EndDate > currentDateTime) // Filter out old auctions
                                     .OrderBy(a => a.EndDate) // Order by EndDate in ascending order
                                     .ToListAsync();
        return Ok(auctions);
    }

}