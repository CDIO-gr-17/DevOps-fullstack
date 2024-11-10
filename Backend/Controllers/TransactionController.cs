using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class TransactionController : ControllerBase
{
    private readonly DatabaseContext _context;

    public TransactionController(DatabaseContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<IActionResult> CreateBid([FromBody] Transaction transaction)
    {
        _context.Transaction.Add(transaction);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetBid), new { id = transaction.TransactionId }, transaction);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetBid(int id)
    {
        var transaction = await _context.Transaction.FindAsync(id);
        if (transaction == null)
        {
            return NotFound();
        }
        return Ok(transaction);
    }

    [HttpGet]
    public async Task<IActionResult> GetBid()
    {
        var currentDateTime = DateTime.UtcNow;              //aware of timezones and conversion when people submit bids
        var transaction = await _context.Transaction
                                     .OrderBy(a => a.TransactionDate) // Order by BidTime in ascending order
                                     .ToListAsync();
        return Ok(transaction);
    }

}