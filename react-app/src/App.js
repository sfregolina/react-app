import './App.css';
import Header from './components/Header';
import Wishlist from './components/Wishlist';
import Checkout from './components/Checkout';

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="wishlist-wrapper">
          <Header />
          <Wishlist />
        </div>
        <div className="checkout-wrapper">
          <Checkout />
        </div>
      </div>
    </div>
  );
}

export default App;
