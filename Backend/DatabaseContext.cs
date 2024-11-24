using Microsoft.EntityFrameworkCore;
using Backend.Models;

public class DatabaseContext : DbContext
{
    public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options) { }

    public DbSet<AuctionWare> AuctionWare { get; set; }
    public DbSet<Bid> Bid { get; set; }
    public DbSet<Category> Category { get; set; }
    public DbSet<CategoryJunction> CategoryJunction { get; set; }
    public DbSet<Customer> Customer { get; set; }
    public DbSet<Transaction> Transaction { get; set; }
    public DbSet<Image> Image { get; set; }

    // Define your DbSets here
    // public DbSet<MyEntity> MyEntities { get; set; }
}