import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import Countdown from "@/components/countdown";
import { getProductImage } from "@/services/imageService";

interface ProductCardProps {
  imageSrc?: number;
  productName?: string;
  description?: string;
  listing?: number;
  category?: string;
  startDate?: Date;
  endDate?: Date;
}

export default function ProductCard({
  imageSrc = 0,
  productName = "Minimalist Watch",
  description = "Sleek design for everyday elegance",
  listing = 129.99,
  category = "Accessories",
  startDate = new Date("2026-01-01T00:00:00.000Z"),
  endDate = new Date("2022-12-31T23:59:59.999Z"),
}: ProductCardProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex items-center justify-center p-4">
      <div
        className={`w-full max-w-sm bg-secondary text-card-foreground rounded-lg overflow-hidden shadow hover:shadow-xl transition-all duration-300 ease-in-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="relative aspect-[0] w-full overflow-hidden group">
          <img
            src={getProductImage(imageSrc) ? getProductImage(imageSrc) : "../../assets/profile_picture.png"}
            alt={productName}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            style = {{maxHeight: "300px", maxWidth: "400px"}}
          />
        </div>
        {category && (
          <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
            {category}
          </Badge>
        )}
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2 text-left animate-fadeIn">
            {productName}
          </h2>
          <p className=" mb-4 text-left animate-fadeIn animation-delay-200">
            {description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold  animate-fadeIn animation-delay-400">
              ${listing.toFixed(2)}
              <span>
                startDate: {startDate.toDateString()}
              </span>
              <span>
                  <Countdown endDate={endDate} />
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}