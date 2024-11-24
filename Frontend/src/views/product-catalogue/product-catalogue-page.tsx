import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "@/views/product-catalogue/product-card"; // Adjust the import path as necessary
import { AuctionWare, getAuctions } from "@/services/auctionService";
import LoadingElement from "@/lib/loadingElement";

const ProductCataloguePage: React.FC = () => {
  const [products, setProducts] = useState<AuctionWare[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [searchInput, setSearchInput] = useState<string>("");

  const fetchProducts = async (search: string, page: number) => {
    setLoading(true); // Ensure loading state is set to true when fetching starts
    try {
      const response = await getAuctions(search, page);
      setProducts(response.items);
      setTotalItems(response.totalItems);
    } catch (err) {
      console.error("Failed to fetch products:", err);
      setError("Failed to fetch products");
    } finally {
      setLoading(false); // Ensure loading state is set to false when fetching ends
    }
  };

  useEffect(() => {
    fetchProducts(search, page);
  }, [search, page]);

  const handleSearchSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearch(searchInput);
      setPage(1); // Reset to first page on new search
    }
  };

  const handleNextPage = () => {
    if (page * 20 < totalItems) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingElement />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Product Catalogue</h1>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={handleSearchSubmit}
        placeholder="Search for products..."
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.length === 0 ? (
          <div className="col-span-full text-center">
            No products match your search.
          </div>
        ) : (
          products.map((product) => (
            <Link key={product.itemId} to={`/products/${product.itemId}`}>
              <ProductCard
                imageSrc={product.itemName} // Adjust this to the actual image URL property
                productName={product.itemName}
                description={product.description}
                listing={product.currentPrice}
                category={"Category"} // Adjust this if you have a category
              />
            </Link>
          ))
        )}
      </div>
      <div className="flex justify-between">
        <button
          onClick={handlePreviousPage}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={page * 20 >= totalItems}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductCataloguePage;
