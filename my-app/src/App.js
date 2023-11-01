import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./Store/CartProvider";


function App() {

  const [cartShown, setCartShown] = useState(false);

  const showCartHandler = () => {
    setCartShown(true);
  }

  const hideCarthandler = () => {
    setCartShown(false);
  }

  return (
    <CartProvider>
      {cartShown && <Cart onCloseCart={hideCarthandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;