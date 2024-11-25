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
    public async Task<IActionResult> CreateImage([FromForm] IFormFile image, [FromForm] int itemId)
    {
        if (image == null || image.Length == 0)
        {
            return BadRequest("No file uploaded.");
        }

        using var memoryStream = new MemoryStream();
        await image.CopyToAsync(memoryStream);

        var newImage = new Image
        {
            Data = memoryStream.ToArray(),
            ContentType = image.ContentType,
            AuctionWareId = itemId
        };

        _context.Image.Add(newImage);
        await _context.SaveChangesAsync();

        // Log the image data and content type
        Console.WriteLine($"Uploaded Image: {newImage.ImageId}, ContentType: {newImage.ContentType}, Data Length: {newImage.Data.Length}");

        return Ok(new { ImageId = newImage.ImageId });
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetImage(int id)
    {
        var image = await _context.Image.FindAsync(id);
        if (image == null)
        {
            return NotFound();
        }

        // Log the image data and content type
        Console.WriteLine($"Retrieved Image: {image.ImageId}, ContentType: {image.ContentType}, Data Length: {image.Data.Length}");

        return File(image.Data, image.ContentType);
    }

    [HttpGet("auctionwareimage/{id}")]
    public async Task<IActionResult> GetAuctionWareImage(int id)
    {
        var image = await _context.Image.FirstOrDefaultAsync(img => img.AuctionWareId == id);
        if (image == null)
        {
            return NotFound();
        }

        // Log the image data and content type
        Console.WriteLine($"Retrieved Image: {image.ImageId}, ContentType: {image.ContentType}, Data Length: {image.Data.Length}");

        return File(image.Data, image.ContentType);
    }

    [HttpGet]
    public async Task<IActionResult> GetImage()
    {
        var image = await _context.Image
                                     .ToListAsync();
        return Ok(image);
    }

}