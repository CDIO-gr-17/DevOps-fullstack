import { useEffect, useRef, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

function NewAuctionPage() {
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [startPrice, setStartPrice] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const [itemCondition, setItemCondition] = useState("");
  const [tag, setTag] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [minStartDate, setMinStartDate] = useState("");
  const [minEndDate, setMinEndDate] = useState("");

  const fileInputRef = useRef<HTMLInputElement | null>(null); // Reference to the file input

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
    // Reset the file input field after removing an image
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form håndterning yada yada her
    console.log({
      itemName,
      description,
      startPrice,
      minPrice,
      startDate,
      endDate,
      itemCategory,
      itemCondition,
      tag,
      images,
    });
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

              {/* Item category */}
              <div className="flex-1 px-2">
                <label
                  className="flex text-gray-700 font-light mb-2"
                  htmlFor="itemCategory"
                >
                  Item Category
                </label>

                <input
                  id="itemCategory"
                  value={itemCategory}
                  onChange={(e) => setItemCategory(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter item category..."
                  required
                />
                {/*<select
                  id="itemCategory"
                  value={itemCategory}
                  onChange={(e) => setItemCategory(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="" disabled></option>
                  <option value="Electronics">Electronics</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Books">Books</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Other">Other</option>
                </select>
              */}
              </div>
            </div>

            <div className="flex mb-4">
              {/* Item tag */}
              <div className="flex-1 px-2">
                <label
                  className="flex text-gray-700 font-light mb-2"
                  htmlFor="itemTag"
                >
                  Tag
                </label>
                <input
                  type="text"
                  id="itemTag"
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter item tag..."
                  required
                />
              </div>

              {/* Item condition */}
              <div className="flex-1 px-2">
                <label
                  className="flex text-gray-700 font-light mb-2"
                  htmlFor="itemCondition"
                >
                  Item Condition
                </label>
                <input
                  type="text"
                  id="itemCondition"
                  value={itemCondition}
                  onChange={(e) => setItemCondition(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter item condition..."
                  required
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
              {/* Starting Price */}
              <div className="flex-1 px-2 ">
                <label
                  className="flex text-gray-700 font-light mb-2"
                  htmlFor="start-price"
                >
                  Starting Price
                </label>
                <input
                  type="number"
                  id="start-price"
                  value={startPrice}
                  onChange={(e) => setStartPrice(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter the starting price..."
                  required
                />
              </div>
              {/* Minimum Price */}
              <div className="flex-1 px-2 ">
                <label
                  className="flex text-gray-700 font-light mb-2"
                  htmlFor="min-price"
                >
                  Minimum Sell Price
                </label>
                <input
                  type="number"
                  id="min-price"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter the minimum sell price..."
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
                required
                accept="image/*"
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
}

export default NewAuctionPage;
