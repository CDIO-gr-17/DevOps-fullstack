import { useState } from "react";
import { Customer, createCustomer } from "@/services/customerService";

const CreateCustomerForm: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [accountType, setAccountType] = useState("Customer");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const costumer: Customer = {
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      Password: password,
      Address: address,
      PhoneNumber: phone,
      AccountType: accountType,
    };
    try {
      const createdCostumer = await createCustomer(costumer);
      console.log("Created Costumer:", createdCostumer);
      // Handle the created costumer as needed, e.g., navigate to the costumer details page
    } catch (error) {
      console.error("Error creating costumer:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border rounded-3xl w-3/4 m-40 p-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-black">
        Create new Auction
      </h1>

      <div className="flex justify-between">
        <div className="flex-1 mr-4">
          <div className="flex mb-4">
            {/* User name */}
            <div className="flex-1 px-2">
              <label
                className="flex text-gray-700 font-light mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full border border-gray-400 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter name..."
                required
                autoFocus
              />
            </div>

            {/* Last name */}
            <div className="flex-1 px-2">
              <label
                className="flex text-gray-700 font-light mb-2"
                htmlFor="lastName"
              >
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Last name..."
                required
              />
            </div>
          </div>

          <div className="flex mb-4">
            {/* email*/}
            <div className="flex-1 px-2">
              <label
                className="flex text-gray-700 font-light mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter email..."
                required
              />
            </div>

            {/* password  */}
            <div className="flex-1 px-2">
              <label
                className="flex text-gray-700 font-light mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="text"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter password..."
                required
              />
            </div>
          </div>

          <div className="flex mb-4">
            {/* address */}
            <div className="flex-1 px-2">
              <label
                className="flex text-gray-700 font-light mb-2"
                htmlFor="address"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Address..."
                required
              />
            </div>

            {/* Phone */}
            <div className="flex-1 px-2">
              <label
                className="flex text-gray-700 font-light mb-2"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                type="text"
                id="endDate"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Phone..."
                required
              />
            </div>
          </div>
          <div className="flex mb-4">
            {/* Account type */}
            <div className="flex-1 px-2">
              <label
                className="flex text-gray-700 font-light mb-2"
                htmlFor="AccountType"
              >
                Account type
              </label>
              <select
                id="AccountType"
                value={accountType}
                onChange={(e) => setAccountType(e.target.value)}
                className="min-h-[2.625rem] w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="Buyer">Buyer</option>
                <option value="Seller">Seller</option>
                <option value="Both">Both</option>
              </select>
            </div>
          </div>
        </div>

        {/* Submit button */}
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className=" h-1/4 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Create Auction
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateCustomerForm;
