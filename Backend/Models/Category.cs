public class Category
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int CategoryId { get; set; }

    [Required]
    [MaxLength(50)]
    public string CategoryName { get; set; }

    [Required]
    [MaxLength(200)]
    public string Describtion { get; set; }
}