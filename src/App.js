import React, { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import NotificationsPage from "./components/NotificationsPage";
import ImageCarousel from "./components/ImageCarousel ";

const App = () => {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("products");
  const [order, setOrder] = useState(null);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      setCart(cart.filter((item) => item.id !== productId));
    } else {
      setCart(
        cart.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const placeOrder = (orderDetails) => {
    setOrder(orderDetails);
    setView("notifications");
    setCart([]);
  };

  return (
    <div className="app-container">
      <Header
        cartItemCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        setView={setView}
        hasNotifications={order !== null}
      />
      <main className="main-content">
        {view === "products" && (
          <>
            <ImageCarousel />
            <ProductList addToCart={addToCart} />
          </>
        )}
        {view === "cart" && (
          <Cart cart={cart} updateQuantity={updateQuantity} setView={setView} />
        )}
        {view === "checkout" && (
          <Checkout cart={cart} placeOrder={placeOrder} />
        )}
        {view === "notifications" && (
          <NotificationsPage order={order} setView={setView} />
        )}
      </main>
    </div>
  );
};

export default App;
