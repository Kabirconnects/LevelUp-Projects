import React, { useState } from "react";

function SetCount() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-black w-full h-screen flex flex-col justify-center items-center">
        <h1 className="text-white">The count is {count}</h1>
        <div className="flex gap-3">
          <button
            className="bg-gray-700 hover:bg-gray-600 active:scale-90 px-3 py-2 rounded-2xl mt-2"
            onClick={(e) => {
              setCount(count < 20 ? count + 1 : "");
            }}
          >
            add count
          </button>

          <button
            className="bg-gray-700 hover:bg-gray-600 active:scale-90 px-3 py-2 rounded-2xl mt-2"
            onClick={(e) => {
              setCount(count === 0);
            }}
          >
            reset count
          </button>

          <button
            className="bg-gray-700 hover:bg-gray-600 active:scale-90 px-3 py-2 rounded-2xl mt-2"
            onClick={(e) => {
              setCount(count > 0 ? count - 1 : "");
            }}
          >
            dec count
          </button>
        </div>
      </div>
    </>
  );
}

export default SetCount;
