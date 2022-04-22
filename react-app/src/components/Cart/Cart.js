import Wishlist from "../Wishlist/Wishlist";
import Checkout from "../Checkout/Checkout";
import Drawer from "../Drawer/Drawer";
import { StyledContainer } from "../StyledComponents/StyledContainer";
import { useDrawerState } from "../DrawerStateProvider/DrawerStateProvider";

const Cart = () => {
  const { isOpen } = useDrawerState();
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
