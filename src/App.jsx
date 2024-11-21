import { Provider } from "react-redux";
import store from "./redux/store";
import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <ProductList />
        <Cart />
      </Provider>
    </>
  );
}
