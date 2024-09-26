import React, { useRef, useState, FormEvent } from "react";
import useScrollEffect from "@/lib/useScrollEffect"; // Assuming you have a similar effect hook for opacity on scroll

const LoginPage = () => {
  const bannerRef = useRef<HTMLImageElement>(null);
  const [opacity, setOpacity] = useState(0.7);
  
  // Apply scroll effect (similar to the HomePage)
  useScrollEffect(bannerRef, setOpacity);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Login with:", username, password);
  };

  return (
    <>
      <img
        ref={bannerRef}
        src="login_banner.jpg" // Background image for login page
        alt="Login Banner"
        className="fixed inset-0 w-full h-dvh object-cover transition-transform duration-300"
        style={{ opacity }}
      />
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-xl opacity-95">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Login
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
