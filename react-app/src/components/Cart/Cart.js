import { useContext } from "react";
import Wishlist from "../Wishlist/Wishlist";
import Checkout from "../Checkout/Checkout";
import Drawer from "../Drawer/Drawer";
import { StyledContainer } from "../StyledComponents/StyledContainer";
import { CartStateContext } from "../CartStateProvider/CartStateProvider";

const Cart = () => {
  const { isOpen } = useContext(CartStateContext);
  return (
    <StyledContainer>
      <Wishlist />
      {isOpen && (
        <Drawer>
          <Checkout />
        </Drawer>
      )}
    </StyledContainer>
  );
};

export default Cart;
