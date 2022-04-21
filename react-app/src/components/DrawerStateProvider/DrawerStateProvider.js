import React, { useContext, useState } from "react";

const initialContext = {
  isOpen: false,
  setIsOpen: () => {},
};

const DrawerStateContext = React.createContext(initialContext);

export const useDrawerState = () => useContext(DrawerStateContext);

export const DrawerStateProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DrawerStateContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DrawerStateContext.Provider>
  );
};
