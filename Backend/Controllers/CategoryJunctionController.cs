using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class CategoryJunctionController : ControllerBase
{
    private readonly DatabaseContext _context;

    public CategoryJunctionController(DatabaseContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<IActionResult> CreateCategoryJunction([FromBody] CategoryJunction categoryJunction)
    {
        _context.CategoryJunction.Add(categoryJunction);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetCategoryJunction), new { id = categoryJunction.Id }, categoryJunction);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetCategoryJunction(int id)
    {
        var categoryJunction = await _context.CategoryJunction.FindAsync(id);
        if (categoryJunction == null)
        {
            return NotFound();
        }
        return Ok(categoryJunction);
    }

    [HttpGet]
    public async Task<IActionResult> GetCategoryJunction()
    {
        var categoryJunction = await _context.CategoryJunction
                                     .ToListAsync();
        return Ok(categoryJunction);
    }

}