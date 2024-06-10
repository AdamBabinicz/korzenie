// context/DarkOverlayContext.js

import React, { createContext, useState } from "react";

export const DarkOverlayContext = createContext();

export const DarkOverlayProvider = ({ children }) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const showOverlay = () => {
    setIsOverlayVisible(true);
  };

  const hideOverlay = () => {
    setIsOverlayVisible(false);
  };

  return (
    <DarkOverlayContext.Provider
      value={{ isOverlayVisible, showOverlay, hideOverlay }}
    >
      {children}
    </DarkOverlayContext.Provider>
  );
};
