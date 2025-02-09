import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <>
      <div className="w-full bg-gray-600 flex items-center justify-center p-3">
        <div className="  text-white text-3xl  ">user: {userid}</div>
      </div>
    </>
  );
}

export default User;
