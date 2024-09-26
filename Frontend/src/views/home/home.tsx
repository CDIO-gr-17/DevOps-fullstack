import useScrollEffect from "@/lib/useScrollEffect";
import { useRef, useState } from "react";

const HomePage = () => {
  const bannerRef = useRef<HTMLImageElement>(null);
  const [opacity, setOpacity] = useState(0.7);
  useScrollEffect(bannerRef, setOpacity);

  return (
    <>
      <img
        ref={bannerRef}
        src="home_banner.jpg"
        alt="Home Banner"
        className="fixed inset-0 w-full h-dvh object-cover transition-transform duration-300"
        style={{ opacity }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
        <div className="text-center py-20">
          <h1 className="text-4xl font-bold">Welcome to Our Art Auction</h1>
          <p className="mt-4 text-xl">
            Discover and bid on exquisite artworks.
          </p>
        </div>
        <div className="container mx-auto px-10 py-20">
          <h2 className="text-3xl font-bold mb-6">Featured Artworks</h2>
          <div
            className="grid grid-cols-3 gap-6"
            style={{ justifyContent: "space-evenly" }}
          >
            {["artwork_1.jpg", "artwork_2.jpg", "artwork_3.jpg"].map(
              (art, index) => (
                <div
                  key={index}
                  className="shadow-lg rounded-lg overflow-hidden"
                  style={{ height: "420px", width: "300px" }}
                >
                  <img
                    src={art}
                    alt={`Artwork ${index + 1}`}
                    className="h-3/4 w-full object-cover"
                  />
                  <div className="p-4 bg-gray-800 h-1/4">
                    <h3 className="font-bold truncate">{`Artwork ${
                      index + 1
                    }`}</h3>
                    <p className="text-sm truncate">{`Artist ${index + 1}`}</p>
                    <button className="mt-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 text-xs rounded">
                      View Details
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        <div className="container mx-auto px-10 py-20">
          <h2 className="text-3xl font-bold mb-6">Upcoming Auctions</h2>
          <div
            className="grid grid-cols-3 gap-6"
            style={{ justifyContent: "space-evenly" }}
          >
            {["artwork_4.jpg", "artwork_5.jpg", "artwork_6.jpg"].map(
              (auction, index) => (
                <div
                  key={index}
                  className="shadow-lg rounded-lg overflow-hidden"
                  style={{ height: "420px", width: "300px" }}
                >
                  <img
                    src={auction}
                    alt={`Auction ${index + 1}`}
                    className="h-3/4 w-full object-cover"
                  />
                  <div className="p-4 bg-gray-800 h-1/4">
                    <h3 className="font-bold truncate">{`Auction ${
                      index + 1
                    }`}</h3>
                    <p className="text-sm truncate">{`Preview on ${new Date().toLocaleDateString()}`}</p>
                    <button className="mt-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 text-xs rounded">
                      Auction Details
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
