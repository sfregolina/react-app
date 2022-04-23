import React, { useState } from "react";
import { getCheckoutProducts } from "../../api/checkout";

export const CartStateContext = React.createContext();

export const CartStateProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);

  const fetchCheckoutProducts = async () => {
    const checkoutProducts = await getCheckoutProducts();

    const checkoutCount = checkoutProducts.reduce((acc, item) => {
      return (acc += item.quantity);
    }, 0);

    setCount(checkoutCount);
  };

  fetchCheckoutProducts();

  return (
    <CartStateContext.Provider value={{ isOpen, setIsOpen, count, setCount }}>
      {children}
    </CartStateContext.Provider>
  );
};
