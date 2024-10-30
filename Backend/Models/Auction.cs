public class Auction
{
    public int Id { get; set; }
    public required string Title { get; set; }
    public required string Description { get; set; }
    public required decimal StartingPrice { get; set; }
    public DateTime StartDate { get; set; }
    public required DateTime EndDate { get; set; }
}