public class CategoryJunction
{
    [Required]
    [ForeignKey("ItemId")]
    public int ItemId { get; set; }

    [Required]
    [ForeignKey("CategoryId")]
    public int CategoryId { get; set; }
}