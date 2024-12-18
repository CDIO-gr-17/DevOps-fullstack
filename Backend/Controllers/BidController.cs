using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class BidController : ControllerBase
{
    private readonly DatabaseContext _context;

    public BidController(DatabaseContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<IActionResult> CreateBid([FromBody] Bid bid)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }
        bid.BidTime = DateTime.UtcNow;

        _context.Bid.Add(bid);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetBids), new { id = bid.BidId }, bid);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetBids(int id)
    {
        var bid = await _context.Bid.FindAsync(id);
        if (bid == null)
        {
            return NotFound();
        }
        return Ok(bid);
    }

    [HttpGet("item/{itemId}")]
    public async Task<IActionResult> GetBidsByItemId(int itemId)
    {
        var bids = await _context.Bid.Where(b => b.ItemId == itemId).ToListAsync();
        if (bids == null || !bids.Any())
        {
            return NotFound();
        }
        return Ok(bids);
    }

    [HttpGet]
    public async Task<IActionResult> GetBid()
    {
        var currentDateTime = DateTime.UtcNow;              //aware of timezones and conversion when people submit bids
        var bid = await _context.Bid
                                     .OrderBy(a => a.BidTime) // Order by BidTime in ascending order
                                     .ToListAsync();
        return Ok(bid);
    }

}