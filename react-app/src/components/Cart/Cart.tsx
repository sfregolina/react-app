import { useContext } from "react";
import Wishlist from "../Wishlist/Wishlist";
import Checkout from "../Checkout/Checkout";
import StyledDrawer from "../StyledComponents/StyledDrawer";
import StyledContainer from "../StyledComponents/StyledContainer";
import { CartStateContext } from "../CartStateProvider/CartStateProvider";

const Cart: React.FC = () => {
  const { isOpen } = useContext(CartStateContext);
  return (
    <StyledContainer>
      <Wishlist />
      {isOpen && (
        <StyledDrawer>
          <Checkout />
        </StyledDrawer>
      )}
    </StyledContainer>
  );
};

export default Cart;
