import React, { useState } from "react";

function BgChanger() {
    
  const [color, setColor] = useState("black");

  const colors = ["red", "blue", "green", "yellow"]

  const handleClick = () => {

    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    console.log(randomColor);
    setColor(randomColor)

  };

  return (
    <>
      <div
        className="w-full h-screen flex items-center justify-center"
        style={{ backgroundColor: color }}
      >
        <button
          className="bg-gray-700 px-3 py-2 hover:bg-gray-600 active:scale-90 rounded-2xl text-gray-200"
          onClick={handleClick}
        >
          random color
        </button>
      </div>
    </>
  );
}

export default BgChanger;
