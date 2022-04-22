import "./App.css";
import Cart from "./components/Cart/Cart";
import { DataControllerProvider } from "./components/DataControllerProvider/DataControllerProvider";
import { DrawerStateProvider } from "./components/DrawerStateProvider/DrawerStateProvider";

const App = () => {
  return (
    <div className="App">
      <DataControllerProvider>
        <DrawerStateProvider>
          <Cart />
        </DrawerStateProvider>
      </DataControllerProvider>
    </div>
  );
};

export default App;
