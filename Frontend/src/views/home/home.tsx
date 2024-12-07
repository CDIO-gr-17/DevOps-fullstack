import useScrollEffect from "@/lib/useScrollEffect";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AuctionWare, getAuctions } from "@/services/auctionService";
import { getAuctionWareImage } from "@/services/imageService";
<<<<<<< HEAD
=======
import Countdown from "@/components/countdown";
>>>>>>> singewarePics

const HomePage = () => {
  const bannerRef = useRef<HTMLImageElement>(null);
  const [opacity, setOpacity] = useState(0.7);
  useScrollEffect(bannerRef, setOpacity);

  useEffect(() => {
    const loadAuctions = async () => {
      const auctionData = await getAuctions();
      const auctionsWithImages = await Promise.all(
        auctionData.items.map(async (auction: AuctionWare) => {
          try {
            const imageBlob = await getAuctionWareImage(auction.itemId);
            const imageUrl = URL.createObjectURL(imageBlob);
            return { ...auction, imageUrl };
          } catch (error) {
            console.error(
              `Error fetching image for auction ${auction.itemId}:`,
              error
            );
            return { ...auction, imageUrl: null };
          }
        })
      );
      setAuctions(auctionsWithImages);
    };

    loadAuctions();
  }, []);

  const [auctions, setAuctions] = useState<any[]>([]);

  return (
    <>
      <div>
        <h1 className="text-center text-4xl font-bold">
          Welcome to Art Auction
        </h1>
      </div>
      <img
        ref={bannerRef}
        src="home_banner.jpg"
        alt="Home Banner"
        className="fixed inset-0 w-full h-dvh object-cover transition-transform duration-300 "
        style={{ opacity }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
        <div className="w-full py-20">
          <Carousel className="max-h-96 overflow-hidden">
            <CarouselContent className="flex">
              {auctions.map((auction, index) => (
<<<<<<< HEAD
                <CarouselItem key={index} className="flex-shrink-0 w-full">
                  <div className="shadow-lg rounded-lg overflow-hidden">
                    <img
                      src={auction.imageUrl}
                      alt={auction.title}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-500"></div>
                    <div className="p-4 relative z-10">
                      <h3 className="font-bold truncate">{auction.title}</h3>
                      <p className="text-sm truncate">{auction.previewDate}</p>
=======
                <CarouselItem
                  key={index}
                  className="flex-shrink-0 w-full bg-slate-800"
                >
                  <div className="shadow-lg rounded-lg overflow-hidden flex">
                    {/* Venstre side */}
                    <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
                      <div className="flex w-full flex-col bg-slate-800 p-6">
                        <div className="flex flex-col items-center justify-center pb-20">
                          <div className="text-4xl text-gray-200">
                            {auction.itemName}
                          </div>
                          <div className="text-xl text-gray-200">
                            {auction.description}
                          </div>
                        </div>

                        <div className="flex justify-between w-full mt-4">
                          <div>
                            <div className="text-gray-500">Expires in</div>
                            <div className="text-gray-200 text-4xl">
                              <span>
                                {new Date() > auction.auctionStart ? (
                                  <Countdown
                                    endDate={auction.auctionEnd}
                                    countType="stop"
                                  />
                                ) : (
                                  <Countdown
                                    endDate={auction.auctionStart}
                                    countType="start"
                                  />
                                )}
                              </span>
                            </div>
                          </div>    
                          <div className="text-right">
                            <div className="text-gray-500">Current price</div>
                            <div className="text-gray-200 text-4xl">
                              {auction.currentPrice}$
                            </div>
                          </div>
                        </div>
                      </div>

>>>>>>> singewarePics
                      <Link to={`/${auction.id}`}>
                        <button className="mt-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 text-xs rounded">
                          View Details
                        </button>
                      </Link>
                    </div>
<<<<<<< HEAD
=======
                    {/* Højre side */}
                    <div className="w-1/2">
                      <img
                        src={auction.imageUrl}
                        alt={auction.title}
                        className="w-full h-96 object-cover"
                      />
                    </div>
>>>>>>> singewarePics
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10" />
            <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10" />
          </Carousel>
        </div>
        <div
          className="w-full h-64 bg-cover bg-center flex flex-col items-center justify-center"
          style={{ backgroundImage: "url('sell_with_us.jpg')" }}
        >
          <h2>
            Do you have a piece of art that someone else should have the chance
            of enjoying?
          </h2>
          <button className="mt-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 text-xs rounded">
            Sell with us
          </button>
        </div>
        <div className="p-4">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How do you ensure the authenticity of items listed for auction?
              </AccordionTrigger>
              <AccordionContent>
                We partner with certified appraisers and use a rigorous
                verification process to ensure all listed items meet our quality
                and authenticity standards.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How can I trust the sellers on the platform?
              </AccordionTrigger>
              <AccordionContent>
                Sellers go through an in-depth verification process that
                includes identity checks and past transaction reviews to
                maintain a safe and reputable marketplace.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default HomePage;
