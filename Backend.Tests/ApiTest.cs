
using System.Diagnostics;

public class ApiTests
{
    private readonly HttpClient _client;

    public ApiTests()
    {
        _client = new HttpClient { BaseAddress = new Uri("http://51.120.6.166") };
    }

    [Fact(Skip = "Skip")]
    public async Task GetAuctionWares_ReturnsSuccessStatusCode()
    {
        // Act
        var response = await _client.GetAsync("/api/auctionwares");

        // Assert
        response.EnsureSuccessStatusCode();
        var content = await response.Content.ReadAsStringAsync();
        Assert.Contains("auctions", content);
    }
    [Fact(Skip = "Skip")]
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
    [Fact(Skip = "Skip")]
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