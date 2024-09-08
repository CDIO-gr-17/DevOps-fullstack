using Microsoft.EntityFrameworkCore;

public class DatabaseContext : DbContext
{
    public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
    {
    }

    // Define your DbSets here
    // public DbSet<MyEntity> MyEntities { get; set; }
}