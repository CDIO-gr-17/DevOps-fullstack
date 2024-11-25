import { useEffect, useState } from "react";
import Countdown from "@/components/countdown";
import { getProductImage } from "@/services/imageService";
interface ProductCardProps {
  imageSrc?: number;
  productName?: string;
  listing?: number;
  startDate?: Date;
  endDate?: Date;
}

export default function ProductCard({
  imageSrc = 0,
  productName = "Minimalist Watch",
  listing = 129.99,
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
        <div className="relative w-full" style={{ height: "300px", width: "400px" }}>
          <img
            src={getProductImage(imageSrc) ? getProductImage(imageSrc) : "../../assets/profile_picture.png"}
            alt={productName}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
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
            <span>
                {new Date() > startDate ? (
                  <Countdown endDate={endDate} countType="stop" />
                ) : (
                  <Countdown endDate={startDate} countType="start" />
                )}
              </span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
