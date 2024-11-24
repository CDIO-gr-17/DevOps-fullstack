import { NewAuctionWare, createAuction } from "@/services/auctionService";
import { FaTrashAlt } from "react-icons/fa";
import React, { useState, useEffect, useRef } from "react";

const CreateNewAuctionForm: React.FC = () => {
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [minimumPrice, setMinimumPrice] = useState("");
  const [currentPrice, setCurrentPrice] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [sellerId] = useState("");
  const [highestBidderId] = useState("");
  const [buyerId] = useState("");
  const [auctionStatus] = useState("Open");
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [minStartDate, setMinStartDate] = useState("");
  const [minEndDate, setMinEndDate] = useState("");

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const { getAccessTokenSilently } = useAuth0();

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const textarea = e.target;

    // Reset the height to auto to calculate the new height correctly
    textarea.style.height = "auto";

    // Set the height according to the scroll height (content height)
    textarea.style.height = `${textarea.scrollHeight}px`;

    // Update the description state
    setDescription(textarea.value);
  };

  useEffect(() => {
    const now = new Date();
    const formattedNow = now.toISOString().slice(0, 16);
    setMinStartDate(formattedNow);
  }, []);

  useEffect(() => {
    if (startDate) {
      setMinEndDate(startDate);
    }
  }, [startDate]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files);
      setImages((prevImages) => [...prevImages, ...fileArray]);

      const newPreviews = fileArray.map((file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        return new Promise<string>((resolve) => {
          reader.onloadend = () => {
            resolve(reader.result as string);
          };
        });
      });

      Promise.all(newPreviews).then((results) => {
        setImagePreviews((prevPreviews) => [...prevPreviews, ...results]);
      });
    }
  };

  const removeImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    setImagePreviews((prevPreviews) =>
      prevPreviews.filter((_, i) => i !== index)
    );

    // Clear the file input reference to allow re-upload
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const auction: NewAuctionWare = {
      itemName: itemName,
      description: description,
      minimumPrice: parseFloat(minimumPrice),
      currentPrice: parseFloat(currentPrice),
      auctionStart: new Date(startDate),
      auctionEnd: new Date(endDate),
      sellerId: sellerId ? parseInt(sellerId) : 0,
      highestBidderId: highestBidderId ? parseInt(highestBidderId) : 0,
      buyerId: buyerId ? parseInt(buyerId) : 0,
      auctionStatus: auctionStatus ? auctionStatus : "Open",
    };
    try {
      const token = await getAccessTokenSilently();
      const createdAuction = await createAuction(auction, token);
      console.log("Created Auction:", createdAuction);
      // Handle the created auction as needed, e.g., navigate to the auction details page
    } catch (error) {
      console.error("Error creating auction:", error);
    }
  };

  return (
    <div className="w-full mx-auto bg-white justify-center flex">
      <form
        onSubmit={handleSubmit}
        className="border rounded-3xl w-3/4 m-40 p-8 border-gray-400"
      >
        <h1 className="text-2xl font-bold mb-6 text-center text-black">
          Create new Auction
        </h1>

        <div className="flex justify-between">
          <div className="flex-1 mr-4">
            <div className="flex mb-4">
              {/* Item name */}
              <div className="flex-1 px-2">
                <label
                  className="flex text-gray-700 font-light mb-2"
                  htmlFor="itemName"
                >
                  Item Name
                </label>
                <input
                  type="text"
                  id="itemName"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  className="w-full border border-gray-400 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter item name..."
                  required
                  autoFocus
                />
              </div>
            </div>

            <div className="flex mb-4">
              {/* Start date */}
              <div className="flex-1 px-2">
                <label
                  className="flex text-gray-700 font-light mb-2"
                  htmlFor="startDate"
                >
                  Start date
                </label>
                <input
                  type="datetime-local"
                  id="startDate"
                  value={startDate}
                  min={minStartDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* End date */}
              <div className="flex-1 px-2">
                <label
                  className="flex text-gray-700 font-light mb-2"
                  htmlFor="endDate"
                >
                  End date
                </label>
                <input
                  type="datetime-local"
                  id="endDate"
                  value={endDate}
                  min={minEndDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div className="flex mb-4">
              {/* Minimum Price */}
              <div className="flex-1 px-2 ">
                <label
                  className="flex text-gray-700 font-light mb-2"
                  htmlFor="minimum-price"
                >
                  Minimum Price
                </label>
                <input
                  type="number"
                  id="minimum-price"
                  value={minimumPrice}
                  onChange={(e) => setMinimumPrice(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter the minimum price..."
                  required
                />
              </div>
              {/* Current Price */}
              <div className="flex-1 px-2 ">
                <label
                  className="flex text-gray-700 font-light mb-2"
                  htmlFor="curr-price"
                >
                  Current Price
                </label>
                <input
                  type="number"
                  id="curr-price"
                  value={currentPrice}
                  onChange={(e) => setCurrentPrice(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter the current sell price..."
                  required
                />
              </div>
            </div>
            {/* Description */}
            <div className="flex-1 px-2">
              <label
                className="flex text-gray-700 font-light mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => handleDescriptionChange(e)}
                className="min-h-[2.625rem] w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter the item description..."
                required
              />
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 ml-4">
            <div className="flex flex-col justify-top h-full">
              <label
                className="flex text-gray-700 font-light mb-2"
                htmlFor="image"
              >
                Upload Images
              </label>
              <input
                type="file"
                id="image"
                onChange={handleImageChange}
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                multiple
                accept="image/*"
                key={images.length}
              />
              {/* Image previews */}
              <div className="mt-4 grid grid-cols-3 gap-4">
                {imagePreviews.map((preview, index) => (
                  <div key={index} className="relative group">
                    {/* The Image Preview */}
                    <img
                      src={preview}
                      alt={`Preview ${index}`}
                      className="max-h-2rem rounded"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded"></div>

                    {/* "Delete image?" text, appears on hover */}
                    <div
                      className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer "
                      onClick={() => removeImage(index)}
                    >
                      <FaTrashAlt className="w-10 h-10" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Submit button */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="w-1/4 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Create Auction
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNewAuctionForm;
function useAuth0(): { getAccessTokenSilently: any } {
  throw new Error("Function not implemented.");
}
