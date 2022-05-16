import React, { useMemo, useState } from "react";
import { getCheckoutProducts } from "../../api/checkout";
import { CheckoutProductProps } from "../../types/common";

interface CartStateContextProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export interface CartStateProviderProps {
  children: React.ReactNode;
}

export const CartStateContext = React.createContext<CartStateContextProps>({
  isOpen: false,
  setIsOpen: () => null,
  count: 0,
  setCount: () => null,
});

export const CartStateProvider: React.FC<CartStateProviderProps> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);

  const fetchCheckoutProducts = async () => {
    const checkoutProducts = await getCheckoutProducts();

    const checkoutCount = checkoutProducts.reduce(
      (acc: number, item: CheckoutProductProps) => acc + item.quantity,
      0,
    );

    setCount(checkoutCount);
  };

  fetchCheckoutProducts();

  const contextValue = useMemo(
    () => ({
      isOpen,
      setIsOpen,
      count,
      setCount,
    }),
    [isOpen, count],
  );

  return (
    <CartStateContext.Provider value={contextValue}>
      {children}
    </CartStateContext.Provider>
  );
};
