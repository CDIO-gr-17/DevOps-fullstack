using Microsoft.EntityFrameworkCore;

public class DatabaseContext : DbContext
{
    public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options) { }

    public DbSet<AuctionWare> AuctionWare { get; set; }

    // Define your DbSets here
    // public DbSet<MyEntity> MyEntities { get; set; }
}