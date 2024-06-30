import React, { createContext, useState } from "react";

export const DarkModeContext = createContext();

const DarkMode = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div>
      <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
        {children}
      </DarkModeContext.Provider>
    </div>
  );
};

export default DarkMode;
