import React, { useState } from "react";
import { Card, Button } from "flowbite-react";

const Cart = ({ cart, updateQuantity, setView }) => {
  const [lovedItems, setLovedItems] = useState({});
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const toggleLove = (itemId) => {
    setLovedItems((prevState) => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Your Shopping Cart
      </h2>
      {cart.length === 0 ? (
        <p className="text-xl text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <Card
                key={item.id}
                className="flex flex-col md:flex-row items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full md:w-1/4 h-48 object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                />
                <div className="p-4 flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  <p className="text-lg font-bold mb-2">
                    Price: ${item.price.toFixed(2)}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Button
                        size="xs"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </Button>
                      <span className="text-lg font-semibold">
                        {item.quantity}
                      </span>
                      <Button
                        size="xs"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </Button>
                    </div>
                    <p className="text-lg font-bold">
                      Subtotal: ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
                <Button
                  color={lovedItems[item.id] ? "failure" : "light"}
                  onClick={() => toggleLove(item.id)}
                  className="mt-4 md:mt-0 md:ml-4"
                >
                  {lovedItems[item.id] ? "♥" : "♡"}
                </Button>
              </Card>
            ))}
          </div>
          <div className="mt-8 bg-gray-100 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Order Summary</h3>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between mb-2">
                <span>
                  {item.name} (x{item.quantity})
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t border-gray-300 mt-4 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-xl font-semibold">Total:</span>
                <span className="text-2xl font-bold">${total.toFixed(2)}</span>
              </div>
            </div>
            <Button
              gradientDuoTone="purpleToBlue"
              size="lg"
              className="w-full mt-6"
              onClick={() => setView("checkout")}
            >
              Proceed to Checkout
            </Button>
          </div>
        </>
      )}
      <Button
        gradientDuoTone="cyanToBlue"
        size="lg"
        className="mt-8"
        onClick={() => setView("products")}
      >
        Continue Shopping
      </Button>
    </div>
  );
};

export default Cart;
