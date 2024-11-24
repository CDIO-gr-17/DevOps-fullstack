namespace Backend.Tests
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;
    using Xunit;
    using Backend.Controllers; // Ensure this matches the namespace of your controller
    using Backend.Models; // Ensure this matches the namespace of your models

    public class AuctionWareControllerTests
    {
        private readonly AuctionWaresController _controller;
        private readonly DatabaseContext _context;

        public AuctionWareControllerTests()
        {
            var options = new DbContextOptionsBuilder<DatabaseContext>()
                .UseInMemoryDatabase(databaseName: "TestDatabase")
                .Options;

            _context = new DatabaseContext(options);

            // Seed the in-memory database with test data
            _context.AuctionWare.AddRange(new List<AuctionWare>
            {
                new AuctionWare
                {
                    ItemId = 1,
                    ItemName = "Item1",
                    Description = "Description1",
                    MinimumPrice = 100,
                    CurrentPrice = 150,
                    AuctionStart = DateTime.UtcNow.AddDays(-1),
                    AuctionEnd = DateTime.UtcNow.AddDays(1),
                    SellerId = 1,
                    AuctionStatus = AuctionStatus.Open
                },
                new AuctionWare
                {
                    ItemId = 2,
                    ItemName = "Item2",
                    Description = "Description2",
                    MinimumPrice = 200,
                    CurrentPrice = 250,
                    AuctionStart = DateTime.UtcNow.AddDays(-2),
                    AuctionEnd = DateTime.UtcNow.AddDays(2),
                    SellerId = 2,
                    AuctionStatus = AuctionStatus.Open
                }
            });
            _context.SaveChanges();

            _controller = new AuctionWaresController(_context);
        }

        [Fact]
        public async Task GetAuctionWares_ReturnsOkResult_WithAuctionWares()
        {
            // Act
            var result = await _controller.GetAuctionWares();

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            var returnValue = Assert.IsType<dynamic>(okResult.Value);
            Assert.Equal(2, returnValue.totalItems);
            Assert.Equal(2, returnValue.auctions.Count);
        }
    }
}