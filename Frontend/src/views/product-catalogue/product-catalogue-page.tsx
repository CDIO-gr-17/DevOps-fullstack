import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import LoadingElement from "@/lib/loadingElement";
import { AuctionWare, getAuctions } from "@/services/auctionService";
import ProductCard from "@/views/product-catalogue/product-card"; // Adjust the import path as necessary
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductCataloguePage: React.FC = () => {
  const [products, setProducts] = useState<AuctionWare[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const auctionsData = await getAuctions();
        setProducts(auctionsData as AuctionWare[]);
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <LoadingElement />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="relative z-10 p-8">
      <h1 className="text-4xl font-bold mb-8">Product Catalogue</h1>
      <Accordion type="multiple">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <AccordionItem
              key={product.itemId}
              value={`item-${product.itemId}`}
              className="border-none"
            >
              <Link to={`/products/${product.itemId}`}>
                <ProductCard
                  imageSrc={product.itemName} // Adjust this if you have an image URL
                  productName={product.itemName}
                  description={product.description}
                  listing={product.currentPrice}
                  category={"Category"} // Adjust this if you have a category
                />
              </Link>
              <AccordionContent>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
                    <p className="text-white text-center p-4">
                      {product.description}
                    </p>
                  </div>
                  <img
                    src={product.itemName} // Adjust this if you have an image URL
                    alt={"Image of " + product.itemName}
                    className="w-full h-auto mb-4 rounded transition-transform duration-300 scale-95 blur-sm"
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </div>
      </Accordion>
    </div>
  );
};

export default ProductCataloguePage;
