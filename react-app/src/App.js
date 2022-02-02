import './App.css';
import Wishlist from './components/Wishlist/Wishlist';
import Checkout from './components/Checkout/Checkout';
import StyledContainer from './components/StyledComponents/StyledContainer';

const App = () => {

  return (
    <div className="App">
      <StyledContainer>
        <Wishlist />
        <Checkout />
      </StyledContainer>
    </div>
  );
}

export default App;
