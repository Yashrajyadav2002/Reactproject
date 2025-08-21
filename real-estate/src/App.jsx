import { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import FeaturedProperties from "./Components/FeaturedProducts";
import Categories from "./Components/Categories";
import LatestProperties from "./Components/LatestProperties";
import Cart from "./Components/Cart";
import PlaceOrder from "./Components/PlaceOrder";
import Signup from "./Components/Signup";
import AboutUs from "./Components/About";


export const CartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (property) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === property.id);
      if (existing) {
        return prev.map((item) =>
          item.id === property.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...property, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => setCart([]);

  return (
  
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <>
                <LatestProperties addToCart={addToCart} />
                <FeaturedProperties addToCart={addToCart} />
              </>
            }
          />
          <Route path="categories" element={<Categories addToCart={addToCart} />} />
          <Route path="cart" element={<Cart />} />
          <Route path="place-order" element={<PlaceOrder />} />
          <Route path="signup" element={<Signup />} />
          <Route path="about" element={<AboutUs />} />
        </Route>
      </Routes>
    </CartContext.Provider>

     );
}

export default App;
