using Microsoft.EntityFrameworkCore;
using Xunit;

public class DatabaseTests
{
    [Fact]
    public void CanConnectToDatabase()
    {
        var connectionString = "Host=postgres;Database=mydb;Username=myuser;Password=mypassword";
        if (string.IsNullOrEmpty(connectionString))
        {
            Assert.Fail("CONNECTION_STRING environment variable is not set.");
        }

        var options = new DbContextOptionsBuilder<DatabaseContext>()
            .UseNpgsql(connectionString)
            .Options;

        using (var context = new DatabaseContext(options))
        {
            try
            {
                // Ensure the database can be connected to
                Assert.True(context.Database.CanConnect());
            }
            catch (Exception ex)
            {
                // Log the exception message for better debugging
                Assert.Fail($"Failed to connect to the database. Exception: {ex.Message}");
            }
        }
    }
}