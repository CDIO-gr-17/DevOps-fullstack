using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class ImageController : ControllerBase
{
    private readonly DatabaseContext _context;

    public ImageController(DatabaseContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<IActionResult> CreateImage([FromBody] Image image)
    {
        _context.Image.Add(image);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetImage), new { id = image.ImageId }, image);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetImage(int id)
    {
        var image = await _context.Image.FindAsync(id);
        if (image == null)
        {
            return NotFound();
        }
        return Ok(image);
    }

    [HttpGet]
    public async Task<IActionResult> GetImage()
    {
        var image = await _context.Image
                                     .ToListAsync();
        return Ok(image);
    }

}