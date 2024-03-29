import React, { useEffect, useState } from "react";
import { createContext } from "react";
export const DataContext = createContext();

const AppContext = ({ children }) => {
  const [darkmode, setDarkMode] = useState(getMode());

  function getMode() {
    const item = localStorage.getItem("mode");
    if (item) {
      return JSON.parse(item);
    }
    else{
      return false;
    }
  }

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(darkmode));
  }, [darkmode]);

  return (
    <>
      <DataContext.Provider value={{ darkmode, setDarkMode }}>
        {children}
      </DataContext.Provider>
    </>
  );
};

export default AppContext;
