namespace Backend.Controllers;

using Backend.Models; // Assuming AuctionWare is in the Models namespace

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class AuctionWaresController : ControllerBase
{
    private readonly DatabaseContext _context;

    public AuctionWaresController(DatabaseContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<IActionResult> CreateAuctionWare([FromBody] AuctionWare auctionware)
    {
        _context.AuctionWare.Add(auctionware);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetAuctionWare), new { id = auctionware.ItemId }, auctionware);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetAuctionWare(int id)
    {
        var auction = await _context.AuctionWare.FindAsync(id);
        if (auction == null)
        {
            return NotFound();
        }
        return Ok(auction);
    }

    [HttpGet]
    public async Task<IActionResult> GetAuctionWares(string search = "", int page = 1, int pageSize = 20)
    {
        var currentDateTime = DateTime.UtcNow;
        var query = _context.AuctionWare
                            .Where(a => a.AuctionEnd > currentDateTime) // Filter out old auctions
                            .AsQueryable();

        if (!string.IsNullOrEmpty(search))
        {
            var lowerCaseSearch = search.ToLower();
            query = query.Where(a => a.ItemName.ToLower().Contains(lowerCaseSearch));
        }

        var totalItems = await query.CountAsync();
        var auctions = await query
            .OrderBy(a => a.AuctionEnd) // Order by EndDate in ascending order
            .Skip((page - 1) * pageSize)
            .Take(pageSize)
            .ToListAsync();

        return Ok(new { totalItems, auctions });
    }

}