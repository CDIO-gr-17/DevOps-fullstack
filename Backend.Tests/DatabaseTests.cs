using Microsoft.EntityFrameworkCore;
using Xunit;

public class DatabaseTests
{
    [Fact(Skip = "This will not work in CI/CD")]
    public void CanConnectToDatabase()
    {
        var connectionString = Environment.GetEnvironmentVariable("CONNECTION_STRING");
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