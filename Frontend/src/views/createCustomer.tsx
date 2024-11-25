import { useEffect, useState } from "react";
import { Customer, createCustomer } from "@/services/customerService";
import { useAuth0 } from "@auth0/auth0-react";
import { FaPencilAlt } from "react-icons/fa";

const CreateCustomerForm: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [accountType, setAccountType] = useState("Customer");
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated && user?.email) {
      setEmail(user.email);
    }
  }, [isAuthenticated, user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const costumer: Customer = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      address: address,
      phoneNumber: phone,
      accountType: accountType,
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
      <div className="flex justify-between">
        <div className="flex-1 mr-4">
          <div className="flex mb-4">
            <div className="flex px-2 relative group overflow-hidden">
              {/* User picture */}
              <img
                src={user?.picture}
                className="w-24 h-24 rounded-full object-cover transition-opacity duration-200 group-hover:opacity-70 cursor-pointer"
              />

              {/* Pencil icon on hover */}
              <FaPencilAlt
                className="absolute inset-0 m-auto text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 cursor-pointer"
                size={24}
              />
            </div>
          </div>

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
          {/* Submit button */}
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className=" h-1/10 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateCustomerForm;
