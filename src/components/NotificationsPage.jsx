import React from "react";

const NotificationsPage = ({ order, setView }) => {
  if (!order) {
    return (
      <div className="notifications-page">
        <h2>No Recent Orders</h2>
        <p>You haven't placed any orders yet.</p>
        <button onClick={() => setView("products")}>Continue Shopping</button>
      </div>
    );
  }

  return (
    <div className="notifications-page">
      <h2>Order Notification</h2>
      <div className="order-details">
        <h3>Order Summary:</h3>
        {order.items.map((item) => (
          <div key={item.id} className="order-item">
            <span>{item.name}</span>
            <span>Quantity: {item.quantity}</span>
            <span>Price: ${item.price.toFixed(2)}</span>
            <span>Subtotal: ${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <div className="order-summary">
          <p>
            <strong>Subtotal:</strong> ${order.subtotal.toFixed(2)}
          </p>
          {order.discount > 0 && (
            <p>
              <strong>Discount ({order.appliedPromo}):</strong> -$
              {order.discount.toFixed(2)}
            </p>
          )}
          <p className="final-total">
            <strong>Final Total:</strong> ${order.total.toFixed(2)}
          </p>
        </div>
      </div>
      <button onClick={() => setView("products")}>Continue Shopping</button>
    </div>
  );
};

export default NotificationsPage;
