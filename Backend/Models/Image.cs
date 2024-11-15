using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Image
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int ImageId { get; set; }

    [Required] // Ensures non-null value in the database
    public required byte[] ImageBlob { get; set; } // Ensures value is set during object initialization

    [Required]
    [MaxLength(200)]
    public required string Name { get; set; }
}