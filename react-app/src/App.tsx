import "./App.css";
import Cart from "./components/Cart/Cart";
import { DataControllerProvider } from "./components/DataControllerProvider/DataControllerProvider";
import { CartStateProvider } from "./components/CartStateProvider/CartStateProvider";

const App: React.FC = () => (
  <div className="App">
    <DataControllerProvider>
      <CartStateProvider>
        <Cart />
      </CartStateProvider>
    </DataControllerProvider>
  </div>
);

export default App;
