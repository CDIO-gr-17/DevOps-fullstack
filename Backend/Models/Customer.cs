using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public enum AccountType
{
    Buyer,
    Seller,
    Both
}

public class Customer
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int CustomerId { get; set; }

    [Required]
    [MaxLength(50)]
    public string FirstName { get; set; }

    [Required]
    [MaxLength(50)]
    public string LastName { get; set; }

    [Required]
    [EmailAddress]
    [MaxLength(100)]
    public string Email { get; set; }

    [Required]
    [MaxLength(100)]
    public string Password { get; set; }

    [MaxLength(200)]
    public string Address { get; set; }

    [Phone]
    [MaxLength(15)]
    public string PhoneNumber { get; set; }

    [Required]
    public AccountType AccountType { get; set; }

    public DateTime RegistrationDate { get; set; }
}