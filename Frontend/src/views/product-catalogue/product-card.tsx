import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface ProductCardProps {
  imageSrc?: string;
  productName?: string;
  description?: string;
  price?: number;
  rating?: number;
  category?: string;
}

export default function ProductCard({ 
  imageSrc = "/placeholder.svg?height=300&width=300",
  productName = "Ultra HD Smart TV",
  description = "Experience breathtaking clarity and vibrant colors with our latest 4K Ultra HD Smart TV. Featuring AI-enhanced picture quality and immersive sound.",
  price,
  rating,
  category = "Electronics"
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card className="w-80 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
      <CardContent className="p-0">
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={`transition-all duration-500 ease-in-out ${isHovered ? 'scale-110 blur-sm' : 'scale-100'}`}>
            <img
              src={imageSrc}
              alt={productName}
              className="w-full h-56 object-cover"
            />
          </div>
          <div className={`absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center p-6 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-sm text-gray-100 text-center">{description}</p>
          </div>
          <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">{category}</Badge>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2 text-gray-100">{productName}</h3>
          <div className="flex justify-between items-center mb-2">
            {price !== undefined && (
              <span className="text-2xl font-semibold text-primary">${price.toFixed(2)}</span>
            )}
            {rating !== undefined && (
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm text-gray-300">{rating.toFixed(1)}</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}