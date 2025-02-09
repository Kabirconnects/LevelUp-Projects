import React, { useState, useCallback, useEffect, useRef } from "react";

function PasswordG() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const PassWordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "0123456789";
    if (characters) str += "!#$%^&*(){}[]_-*+.~`";

    for (let i = 0; i < length; i++) {
      const element = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(element);
    }

    setPassword(pass);
  }, [length, number, characters, setPassword]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [setPassword]);

  useEffect(() => {
    PassWordGenerator();
  }, [length, number, characters, setPassword]);

  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center bg-black">
        <div className="text-orange-400 bg-gray-800 px-5 py-8 rounded-2xl  flex flex-col justify-center items-center">
          <h1 className="text-3xl">PassWord Generator!</h1>

          <div className="flex mt-10">
            <input
              className="bg-gray-200 rounded-tl-xl rounded-bl-xl w-90 h-14 px-2 text-2xl text-orange-600 "
              type="text"
              value={password}
              placeholder="Password"
              readOnly
              ref={passwordRef}
            />
            <button
              className="bg-blue-700 hover:bg-blue-600 active:scale-90 px-4 py-2 rounded-tr-xl rounded-br-xl text-xl
            "
              onClick={copyPassword}
            >
              copy
            </button>
          </div>

          <div className="flex gap-3 mt-5 items-center justify-center">
            <div className="flex gap-2">
              <input
                className="mt-1"
                type="range"
                min={6}
                max={100}
                value={length}
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label htmlFor="">Length: {length}</label>
            </div>
            <div className="flex gap-2">
              <input
                className="w-5 h-5 mt-1"
                type="checkbox"
                value={number}
                onChange={() => {
                  setNumber((prev) => !prev);
                }}
              />
              <h1>Number</h1>
            </div>

            <div className="flex gap-3">
              <input
                className="w-5 h-5 mt-1"
                type="checkbox"
                value={setCharacters}
                onChange={() => {
                  setCharacters((prev) => !prev);
                }}
              />
              <h1>Characters</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PasswordG;
