import React from "react";
import LogIn from "./components/LogIn";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center bg-black text-white">
        <div className="flex flex-col items-center justify-center bg-gray-800 px-4 py-5 rounded-3xl">
          <h1 className="text-3xl ">React with Context API </h1>
          <LogIn />
          <Profile />
        </div>
      </div>
    </>
  );
}

export default App;
