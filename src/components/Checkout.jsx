import React, { useState, useEffect } from "react";
import { Card, Button, TextInput, Alert } from "flowbite-react";

const PROMO_CODES = {
  DISCOUNT10: 0.1,
  DISCOUNT20: 0.2,
};

const Checkout = ({ cart, placeOrder }) => {
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [appliedPromo, setAppliedPromo] = useState("");
  const [error, setError] = useState("");
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const [total, setTotal] = useState(subtotal);

  useEffect(() => {
    setTotal(subtotal - discount);
  }, [subtotal, discount]);

  const applyPromoCode = () => {
    setError("");
    const discountPercent = PROMO_CODES[promoCode.toUpperCase()];

    if (discountPercent) {
      const newDiscount = subtotal * discountPercent;
      setDiscount(newDiscount);
      setAppliedPromo(promoCode.toUpperCase());
      setPromoCode("");
    } else {
      setError("Invalid promo code");
      setDiscount(0);
      setAppliedPromo("");
    }
  };

  const handlePlaceOrder = () => {
    const order = {
      items: cart,
      subtotal,
      discount,
      total,
      appliedPromo,
    };
    setIsOrderPlaced(true);
    setTimeout(() => {
      placeOrder(order);
    }, 2000);
  };

  if (isOrderPlaced) {
    return (
      <Card className="max-w-sm mx-auto">
        <h2 className="text-2xl font-bold mb-4">Order Placed Successfully!</h2>
        <p>Redirecting to order details...</p>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Checkout</h2>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Order Summary</h3>
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between">
            <span>
              {item.name} x {item.quantity}
            </span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <div className="flex justify-between font-semibold">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between text-green-600">
            <span>Discount ({appliedPromo}):</span>
            <span>-${discount.toFixed(2)}</span>
          </div>
        )}
        <div className="flex justify-between text-xl font-bold">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      <div className="mt-6 space-y-4">
        <div className="flex space-x-2">
          <TextInput
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Enter promo code"
          />
          <Button onClick={applyPromoCode}>Apply</Button>
        </div>
        {error && <Alert color="failure">{error}</Alert>}
        {appliedPromo && (
          <Alert color="success">
            Promo code {appliedPromo} applied successfully!
          </Alert>
        )}
        <Button
          gradientDuoTone="purpleToBlue"
          size="lg"
          className="w-full"
          onClick={handlePlaceOrder}
        >
          Place Order
        </Button>
      </div>
    </Card>
  );
};

export default Checkout;