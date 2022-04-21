import "./App.css";
import Wishlist from "./components/Wishlist/Wishlist";
import Checkout from "./components/Checkout/Checkout";
import Drawer from "./components/Drawer/Drawer";
import { StyledContainer } from "./components/StyledComponents/StyledContainer";
import { DataControllerProvider } from "./components/DataControllerProvider/DataControllerProvider";
import { DrawerStateProvider } from "./components/DrawerStateProvider/DrawerStateProvider";

const App = () => {
  return (
    <div className="App">
      <DataControllerProvider>
        <DrawerStateProvider>
          <StyledContainer>
            <Wishlist />
            <Drawer>
              <Checkout />
            </Drawer>
          </StyledContainer>
        </DrawerStateProvider>
      </DataControllerProvider>
    </div>
  );
};

export default App;
