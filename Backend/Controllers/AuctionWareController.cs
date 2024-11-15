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

    export const getAuctions = async (
  search: string,
  page: number,
  pageSize: number = 20
): Promise<GetAuctionsResponse> => {
  try {
    const response = await axios.get<{ auctions: AuctionWare[], totalItems: number }>(API_URL, {
      params: {
        search,
        page,
        pageSize,
      },
    });

    // Log the entire response object for debugging
    console.log("Full API response:", response);

    // Log the response data for debugging
    console.log("API response data:", response.data);

    // Ensure the response data has the expected structure
    if (
      !response.data ||
      !Array.isArray(response.data.auctions) ||
      typeof response.data.totalItems !== "number"
    ) {
      throw new Error("Invalid response structure");
    }

    return {
      items: response.data.auctions,
      totalItems: response.data.totalItems,
    };
  } catch (error) {
    console.error("Error fetching auctions:", error);
    throw error;
  }
};

}