import './App.css';
import Wishlist from './components/Wishlist';
import Checkout from './components/Checkout';
import StyledContainer from './components/StyledContainer';

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
