import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/theme";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  // change theme

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark"); // Instead of querySelector("html")
    document.documentElement.classList.add(themeMode);
}, [themeMode]);


  return (
    <>
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <h1 className="p-4 bg-pink-400 text-black">Bark</h1>
        <ThemeBtn />
        <Card />
      </ThemeProvider>
    </>
  );
}

export default App;
