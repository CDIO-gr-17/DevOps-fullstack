using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class CustomersController : ControllerBase
{
    private readonly DatabaseContext _context;

    public CustomersController(DatabaseContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<IActionResult> CreateCustomer([FromBody] Customer customer)
    {
        _context.Customer.Add(customer);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetCustomer), new { id = customer.CustomerId }, customer);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetCustomer(int id)
    {
        var customer = await _context.Customer.FindAsync(id);
        if (customer == null)
        {
            return NotFound();
        }
        return Ok(customer);
    }

    [HttpGet]
    public async Task<IActionResult> GetCustomers()
    {
        var currentDateTime = DateTime.UtcNow;              //aware of timezones and conversion when customers register
        var customers = await _context.Customer
                                     .OrderBy(a => a.RegistrationDate) // Order by RegistrationDate in ascending order
                                     .ToListAsync();
        return Ok(customers);
    }

}