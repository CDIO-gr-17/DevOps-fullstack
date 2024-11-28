import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Carousel from "@/lib/carousel";
import LoadingElement from "@/lib/loadingElement";
import { AuctionWare, getAuction } from "@/services/auctionService";
import { useEffect, useState } from "react";
import { GoShare } from "react-icons/go";
import {
  MdFavorite,
  MdFavoriteBorder,
  MdOutlineStarOutline,
} from "react-icons/md";
import { VscVerified } from "react-icons/vsc";
import { useParams } from "react-router-dom";
import { BiddingDrawer } from "./Biddingdrawer";
import { Bid, getBids } from "@/services/bidService";

const slides = ["lion-painting.png", "lion-painting2.jpg"];

function SingleWare() {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<AuctionWare | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [bids, setBids] = useState<Bid[]>([]);

  useEffect(() => {
    console.log("useEffect called with id:", id); // Log statement to verify useEffect call

    const fetchItem = async () => {
      try {
        const itemData = await getAuction(Number(id));
        setItem(itemData as AuctionWare);
      } catch (err) {
        setError("Failed to fetch item");
      } finally {
        setLoading(false);
      }
    };

    const fetchBids = async () => {
      console.log("fetching bids"); // Log statement to verify function call
      try {
        const bidsData = await getBids(Number(id));
        console.log("bids", bidsData); // Log statement to verify data
        setBids(bidsData);
      } catch (err) {
        console.error("Failed to fetch bids", err); // Log any errors
        setBids([]); // Set bids to an empty array if there is an error
      }
    };

    fetchItem();
    fetchBids();
  }, [id]);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  if (loading || !item) {
    return <LoadingElement />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex justify-center items-center">
      <div className="w-4/5 flex justify-between">
        <div className="flex flex-col w-2/5 justify-start max-w-1/2">
          <div className="relative">
            <div className="max-w-lg">
              <Carousel slides={slides} />
            </div>
          </div>
        </div>

        <div className="grid w-1/2 ml-8">
          <div className="flex justify-between mb-2">
            <p className="text-sm text-gray-500">Sun 22 Sep 2024 12:54</p>
            <div className="flex items-center">
              <button className="mr-4 text-2xl">
                <GoShare />
              </button>
              <button className="text-2xl" onClick={toggleFavorite}>
                {!isFavorite ? <MdFavoriteBorder /> : <MdFavorite />}
              </button>
            </div>
          </div>
          <h1 className="text-2xl font-bold mb-2">{item.itemName}</h1>
          <p className="text-gray-500 mb-2">
            Water color painting in wood frame
          </p>

          <div className="flex justify-between mb-2">
            <div className="flex items-center">
              <p className="text-gray-500">Price: </p>
            </div>
            <p className="text-gray-500">
            Ends at {item.auctionEnd ? item.auctionEnd.toLocaleString() : "N/A"}
            </p>
          </div>

          <div className="flex justify-between mb-2">
            <p className="text-xl font-bold">{item.currentPrice}</p>
            <p className="text-gray-500">Philips countdown here</p>
          </div>
          <h2 className="text-lg font-bold mb-2">Previous Bids</h2>
          <div className="rounded-lg p-4 max-h-40 overflow-y-auto">
            {bids.length > 0 ? (
              <ul>
                {bids.map((bid, index) => (
                  <li key={index} className="mb-1">
                    <strong>
                      {bid.bidTime ? new Date(bid.bidTime).toLocaleString() : "N/A"}
                    </strong>
                    : {bid.bidAmount}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No bids yet.</p>
            )}
          </div>
          <BiddingDrawer itemId={item.itemId} />
          <Accordion type="single" collapsible className="mt-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>Shipping</AccordionTrigger>
              <AccordionContent>
                <p>Shipping price within Denmark </p>
                <p>DKK 36 DHL</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Local Pickup</AccordionTrigger>
              <AccordionContent>Can be picked up in</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Payment</AccordionTrigger>
              <AccordionContent>
                All payments are reviewed by Tradera for your security.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="grid mt-4">
            <div className="flex items-center mb-2">
              <p className="font-bold underline mr-4">Marius Picasso</p>
              <img
                src="Marius.jpg"
                className="w-12 h-12 rounded-full border-black border"
              />
            </div>
            <p className="text-gray-500 mb-2">Rødovre, Denmark</p>

            <div className="flex items-center mb-2">
              <VscVerified />
              <p className="ml-2">Verified</p>
            </div>
            <div className="flex items-center mb-2">
              <MdOutlineStarOutline />
              <p className="ml-2">44 reviews</p>
            </div>

            <div className="flex justify-between mt-4">
              <button className="w-1/3 py-2 border border-gray-400 hover:bg-gray-400 hover:text-white">
                Contact
              </button>
              <button className="w-1/3 py-2 border border-gray-400 hover:bg-gray-400 hover:text-white">
                Reviews
              </button>
              <button className="w-1/3 py-2 border border-gray-400 hover:bg-gray-400 hover:text-white">
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleWare;
