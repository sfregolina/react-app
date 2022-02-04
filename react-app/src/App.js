import './App.css';
import Wishlist from './components/Wishlist/Wishlist';
import Checkout from './components/Checkout/Checkout';
import { StyledContainer } from './components/StyledComponents/StyledContainer'
import { DataControllerProvider } from './components/DataController/DataController'

const App = () => {

  return (
    <div className="App">
      <DataControllerProvider>
        <StyledContainer>
          <Wishlist />
          <Checkout />
        </StyledContainer>
      </DataControllerProvider>
    </div>
  );
}

export default App;
