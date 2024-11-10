import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import art1 from "@/assets/art_placeholder1.webp";
import art2 from "@/assets/art_placeholder2.jpg";
import art3 from "@/assets/art_placeholder3.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Customer, createCustomer } from "@/services/customerService";
import Profile from "@/auth0Profile";

function ProfileOverview() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [accountType, setAccountType] = useState("");

  const handleSubmit = async () => {
    const customer: Customer = {
      FirstName: name,
      LastName: lastName,
      Email: email,
      Password: password,
      Address: address,
      PhoneNumber: phone,
      AccountType: accountType,
    };

    try {
      const createdCustomer = await createCustomer(customer);
      console.log("Created customer:", createdCustomer);
      // Handle the created auction as needed, e.g., navigate to the auction details page
    } catch (error) {
      console.error("Error creating customer:", error);
    }
  };
  return (
    
    <>
    <Profile />
      <div>
        <form
          onSubmit={handleSubmit}
          className="border rounded-3xl w-3/4 m-40 p-8"
        >
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
                    htmlFor="Name"
                  >
                    user Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    last name
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
                    Tag
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
                    password
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
                  <textarea
                    id="AccountType"
                    value={accountType}
                    onChange={(e) => setAccountType(e.target.value)}
                    className="min-h-[2.625rem] w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Account type..."
                    required
                  />
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
          </div>
        </form>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>John Doe</CardTitle>
          <CardDescription>johndoe@mail.com</CardDescription>
          <CardDescription>+45 12345678</CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="m-2" type="submit">
            Favorited auctions
          </Button>
          <Button className="m-2" type="submit">
            My items
          </Button>
          <Button className="m-2" type="submit">
            Profile settings
          </Button>
          <Link to="/new-auction">
            <Button className="m-2" type="submit">
              New auction
            </Button>
          </Link>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>

      <hr className="rounded"></hr>
      <Card>
        <CardHeader>
          <CardTitle>Current auctions you lead</CardTitle>
          <CardDescription>
            We will notify you if you are outbid
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Carousel className="m-10">
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <img
                  className="h-full w-full object-cover"
                  src={art1}
                  alt="Art placeholder 1"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <img
                  className="h-full w-full object-cover"
                  src={art2}
                  alt="Art placeholder 2"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <img
                  className="h-full w-full object-cover"
                  src={art3}
                  alt="Art placeholder 3"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </>
  );
}

export default ProfileOverview;
