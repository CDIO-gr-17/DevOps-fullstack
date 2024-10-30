using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public enum AuctionStatus
{
    Open,
    Closed,
    Sold
}

pupblic class AuctionWare
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int ItemId { get; set; }

    [Required]
    [MaxLength(50)]
    public string ItemName { get; set; }

    [Required]
    [MaxLength(200)]
    public string Description { get; set; }

    [Required]
    [MaxLength(100)]
    public int MinimumPrice { get; set; }

    [Required]
    public int CurrentPrice { get; set; }

    [Required]
    public DateTime AuctionStart { get; set; }

    [Required]
    public DateTime AuctionEnd { get; set; }

    [Required]
    [ForeignKey("CustomerId")]
    public int SellerId { get; set; }

    [Required]
    [ForeignKey("CustomerId")]
    public int HighestBidderId { get; set; }

    [Required]
    [ForeignKey("CustomerId")]
    public int BuyerId { get; set; }

    [Required]
    public AuctionStatus AuctionStatus { get; set; }
}