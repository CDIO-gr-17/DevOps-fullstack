import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import Countdown from "@/components/countdown";
import { getProductImage } from "@/services/imageService";
interface ProductCardProps {
  imageSrc?: number;
  productName?: string;
  description?: string;
  listing?: number;
  category?: number;
  startDate?: Date;
  endDate?: Date;
}

export default function ProductCard({
  imageSrc = 0,
  productName = "Minimalist Watch",
  description = "Sleek design for everyday elegance",
  listing = 129.99,
  category = 1,
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
        <div className="relative aspect-[0] w-full">
          <img
            src={getProductImage(imageSrc) ? getProductImage(imageSrc) : "../../assets/profile_picture.png"}
            alt={productName}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            style = {{maxHeight: "300px", maxWidth: "400px"}}
          />
        </div>
        {category && (
          <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground rounded-lg">
            {category}
          </Badge>
        )}
        <div className="p-6">
            <h2 className="text-xl font-semibold mb-2 text-center">
            {productName}
            </h2>
          <div className="flex end justify-between">
          <span className="text-2xl font-bold">
              ${listing.toFixed(2)}
            </span>
          <div className="flex flex-col justify-between">
          <div className="flex end">
            {new Date() > startDate && (
              <span>Time left</span>
            )}
            {new Date() < startDate && (
              <span>Bidding availible in</span>
            )
            }
            </div>
          <div className="flex justify-end">
            {new Date() > startDate && (
              <Countdown
                endDate={endDate}
              />
            )}
            {new Date() < startDate && (
              <span className="text-sm font-semibold text-primary">
                {Math.ceil((startDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days
              </span>
            )
            }
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
