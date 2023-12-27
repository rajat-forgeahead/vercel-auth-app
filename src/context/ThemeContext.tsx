'use client'
import React, { createContext, useState, useEffect } from "react";
import "../app/globals.css";
import { ThemeProvider } from 'next-themes';
// create context
const ThemeContext = createContext({
  theme: "light" as string,
  toggleTheme: () => {},
});

const ThemeContextProvider = ({ children }: any) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  );
};

export { ThemeContext, ThemeProvider };