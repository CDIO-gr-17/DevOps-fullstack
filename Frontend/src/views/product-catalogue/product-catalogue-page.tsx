import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import ProductCard from "@/views/product-catalogue/product-card"; // Adjust the import path as necessary
  
  export default function ProductCatalogPage() {
    const products = [
      {
        id: 1,
        name: "Whispers of the Woodland",
        description: "This charming painting of a secluded house nestled deep within the woods captures the serenity of nature’s untouched beauty. The soft, muted tones create a peaceful atmosphere, reminiscent of a simpler time. Created by the enigmatic artist Elara Hoffstead in the late 1800s, the piece is said to have been inspired by her childhood home, hidden away in a forest she loved to explore.",
        image: "/products/product1.jpg",
        price: 1200,
        rating: 4.5,
        category: "Art",
      },
      {
        id: 2,
        name: "Solitary Voyage",
        description: "This evocative painting depicts a lone boat drifting amidst a dense, shadowy forest, where the trees seem to whisper secrets to the drifting vessel. Painted by the reclusive artist Jasper Linton in the early 1900s, it reflects his fascination with nature’s quiet solitude and the mysterious allure of water. Legend has it that Linton created this piece during a solitary retreat in the woods, finding inspiration in the calm and isolation of his surroundings.",
        image: "/products/product2.jpg",
        price: 1500,
        rating: 4.7,
        category: "Art",
      },
      {
        id: 3,
        name: "Creekside Haven",
        description: "This heartwarming painting showcases a cozy house nestled beside a gently flowing creek, surrounded by the lush embrace of the forest. The work of renowned but elusive artist Evelyn Marlowe, painted in 1922, reflects her deep appreciation for tranquil retreats. Marlowe is said to have painted this scene after a restorative stay in a secluded cabin by a creek, capturing the perfect blend of comfort and nature's beauty.",
        image: "/products/product3.jpg",
        price: 1300,
        rating: 4.6,
        category: "Art",
      },
      {
        id: 4,
        name: "Product 4",
        description: "Description for Product 4",
        image: "/products/product4.jpg",
        price: 1400,
        rating: 4.8,
        category: "Art",
      },
      {
        id: 5,
        name: "Product 5",
        description: "Description for Product 5",
        image: "/products/product5.jpg",
        price: 1100,
        rating: 4.4,
        category: "Art",
      },
      {
        id: 6,
        name: "The Ellsworth Heritage Desk",
        description: "This elegant desk, crafted in the late 1800s, features intricate carvings and a rich mahogany finish, embodying the timeless craftsmanship of the era. Created by the skilled artisan Thomas Ellsworth, the desk was originally made for a distinguished Victorian study. Ellsworth was known for his attention to detail and ability to blend functionality with ornate beauty, making this piece both a practical and stunning addition to any room.",
        image: "/products/product6.jpg",
        price: 2000,
        rating: 4.9,
        category: "Furniture",
      },
      {
        id: 7,
        name: "Vase of Infinity",
        description: "'Vase of Infinity' depicts an unusually large vase that overwhelms the entire room, creating a surreal and striking visual effect. Created by the eccentric artist Felix Arden in 1963, this piece explores the boundaries of scale and space. Arden’s avant-garde style challenges viewers to reconsider their perceptions of ordinary objects and their impact on the environment around them.",
        image: "/products/product7.jpg",
        price: 900,
        rating: 4.3,
        category: "Art",
      },
      {
        id: 8,
        name: "The Whitmore Tree Essence Vase",
        description: "This charming vase, adorned with intricate paintings of a flourishing tree, dates back to the early 1900s. Crafted by the skilled ceramist Eleanor Whitmore, the vase reflects her love for nature and the delicate balance of life. Whitmore, known for her nature-inspired designs, created this piece during a period of personal reflection, aiming to capture the beauty and serenity of trees in a timeless form.",
        image: "/products/product8.jpg",
        price: 800,
        rating: 4.2,
        category: "Decor",
      },
      {
        id: 9,
        name: "Solitude in the Lane",
        description: "'Solitude in the Lane' captures a serene scene where quaint houses and towering trees frame a quiet street with a solitary girl standing in the middle. Painted by the reclusive artist Margaret Harlow in 1928, this piece reflects her fascination with the intersection of solitude and community. Harlow, known for her evocative portrayals of tranquil scenes, created this painting to evoke a sense of peace and introspection in the midst of everyday life.",
        image: "/products/product9.jpg",
        price: 1000,
        rating: 4.5,
        category: "Art",
      },
    ];
  
    return (
      <div className="relative z-10 p-8 bg-white">
        <h1 className="text-4xl font-bold mb-8">Product Catalogue</h1>
        <Accordion type="multiple">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <AccordionItem key={product.id} value={product.name}>
                <AccordionTrigger>
                  <ProductCard
                    imageSrc={product.image}
                    productName={product.name}
                    description={product.description}
                    price={product.price}
                    rating={product.rating}
                    category={product.category}
                  />
                </AccordionTrigger>
                <AccordionContent>
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
                      <p className="text-white text-center p-4">{product.description}</p>
                    </div>
                    <img
                      src={product.image}
                      alt={product.name}
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
  }