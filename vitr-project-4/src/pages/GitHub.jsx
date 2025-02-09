import React, { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";

function GitHub() {
    // const data = useLoaderData();
    const [data, setData] = useState("");

    useEffect(() => {
      fetch("https://api.github.com/users/Kabirconnects")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setData(data);
        });
    }, []);

  return (
    <>
      
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl rounded-2xl">
        <div className="flex flex-col items-center justify-center">
          <h1>Git name : {data.login}</h1>
          <img
            className="w-70 h-auto rounded-2xl m-5"
            src={data.avatar_url}
            alt="avatar_url"
          />
        </div>
      </div>

    </>
  );
}

export default GitHub;

// export const GitHubInfoLoder = async () => {
//   const res = await fetch("https://api.github.com/users/Kabirconnects");
//   return res.json();
// };
