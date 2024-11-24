using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Bid
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int BidId { get; set; }

    [Required] // Ensures non-null value in the database
    [Range(1, int.MaxValue, ErrorMessage = "ItemId must be a positive integer.")]
    [ForeignKey("ItemId")]
    public required int ItemId { get; set; } // Ensures value is set during object initialization

    [Required]
    [Range(1, int.MaxValue, ErrorMessage = "BidderId must be a positive integer.")]
    [ForeignKey("CustomerId")]
    public int BidderId { get; set; }

    [Required]
    [Range(1, int.MaxValue, ErrorMessage = "BidAmount must be a positive integer.")]
    public int BidAmount { get; set; }

    [Required]
    public DateTime BidTime { get; set; }
}