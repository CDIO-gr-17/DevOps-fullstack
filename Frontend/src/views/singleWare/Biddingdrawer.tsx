import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { createBid } from "@/services/bidService";
import { useState } from "react";

interface BiddingDrawerProps {
  itemId: number;
}

export const BiddingDrawer: React.FC<BiddingDrawerProps> = ({ itemId }) => {
  const [bidAmount, setBidAmount] = useState<number>(0);

  const handleSendBid = () => {
    const bid = {
      bidId: undefined,
      itemId: itemId,
      bidderId: 1,
      bidAmount: bidAmount,
      bidTime: undefined,
    };
    console.log("Bid sent", { bid });
    createBid(bid);
  };

  return (
    <Drawer>
      <DrawerTrigger className="bg-blue-700 text-foreground py-2 px-4 rounded hover:bg-blue-500 active:bg-blue-700">
        Place a bid
      </DrawerTrigger>
      <DrawerContent className="">
        <DrawerHeader className="justify-center">
          <DrawerTitle className="text-center">
            Please input your bid
          </DrawerTitle>
          <DrawerDescription>
            <input
              className="text-center max-w-28 m-5 text-xl text-foreground"
              type="number"
              placeholder="0"
              value={bidAmount}
              onChange={(e) => {
                console.log(e.target.value);
                setBidAmount(Number(e.target.value));
              }}
            ></input>
            This action cannot be undone.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="justify-center">
          <Button className="rounded-xl" onClick={handleSendBid}>
            Submit
          </Button>
          <DrawerClose>
            <Button variant="outline" className="rounded-xl">
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
