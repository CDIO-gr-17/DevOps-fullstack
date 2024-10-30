pupblic class Bid
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int BidId { get; set; }

    [Required]
    [ForeignKey("ItemId")]
    public string ItemId { get; set; }

    [Required]
    [ForeignKey("CustomerId")]
    public int BidderId { get; set; }

    [Required]
    public int BidAmmount { get; set; }

    [Required]
    public DateTime BidTime { get; set; }
}