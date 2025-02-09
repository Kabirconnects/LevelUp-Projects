import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

function LogIn() {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, password });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username Input */}
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            placeholder="Username"
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none"
          />

          {/* Password Input */}
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-xl transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
