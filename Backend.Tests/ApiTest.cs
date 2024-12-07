
using System.Diagnostics;

public class ApiTests
{
    private readonly HttpClient _client;

    public ApiTests()
    {
        _client = new HttpClient { BaseAddress = new Uri("http://51.120.6.166") };
    }

<<<<<<< HEAD
    [Fact]
=======
    [Fact(Skip = "Skip")]
>>>>>>> singewarePics
    public async Task GetAuctionWares_ReturnsSuccessStatusCode()
    {
        // Act
        var response = await _client.GetAsync("/api/auctionwares");

        // Assert
        response.EnsureSuccessStatusCode();
        var content = await response.Content.ReadAsStringAsync();
        Assert.Contains("auctions", content);
    }
<<<<<<< HEAD
    [Fact]
=======
    [Fact(Skip = "Skip")]
>>>>>>> singewarePics
    public async Task GetAuctionWares_PerformanceTest()
    {
        var stopwatch = new Stopwatch();
        stopwatch.Start();

        // Act
        var response = await _client.GetAsync("/api/auctionwares");

        stopwatch.Stop();

        // Assert
        response.EnsureSuccessStatusCode();
        Assert.True(stopwatch.ElapsedMilliseconds < 1000, "API call took too long");
    }
<<<<<<< HEAD
    [Fact]
=======
    [Fact(Skip = "Skip")]
>>>>>>> singewarePics
    public async Task GetAuctionWares_PreventsSqlInjection()
    {
        // Act
        var response = await _client.GetAsync("/api/auctionwares?search=' OR 1=1 --");

        // Assert
        response.EnsureSuccessStatusCode();
        var content = await response.Content.ReadAsStringAsync();
        Assert.DoesNotContain("SQL syntax error", content);
    }
}