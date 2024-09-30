// Cart.js
import React from 'react';
import { MdOutlineCurrencyRupee } from "react-icons/md";

const Cart = ({ cart, handleAddToCart, handleRemoveFromCart, subtotal, gst, discount, setDiscount }) => {
  const calculateTotal = () => {
    let discountAmount = 0;

    // Check if discount is in percentage format
    if (discount.toString().includes('%')) {
      const percent = parseFloat(discount.replace('%', ''));
      discountAmount = subtotal * (percent / 100);
    } else if (!isNaN(discount)) {
      discountAmount = parseFloat(discount);
    }

    // Calculate total amount
    const totalAmount = subtotal + gst - discountAmount;
    return totalAmount;
  };

  const totalAmount = calculateTotal();

  return (
    <section className="cartSection">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                <img src={item.image} alt={item.name} width="50" />
                <span>{item.name}</span>
                <span>Quantity: {item.quantity}</span>
                <button onClick={() => handleAddToCart(item)}>+</button>
                <button onClick={() => handleRemoveFromCart(item)}>-</button>
                <span>Total: <MdOutlineCurrencyRupee />{(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div>
            <p>Subtotal: <MdOutlineCurrencyRupee />{subtotal.toFixed(2)}</p>
            <p>GST (16%): <MdOutlineCurrencyRupee />{gst.toFixed(2)}</p>
            <p>Discount: 
              <input 
                type="text" 
                value={discount} 
                onChange={(e) => setDiscount(e.target.value)} 
                placeholder="Enter discount (amount or %)" 
              />
            </p>
            <h3>Total Amount: <MdOutlineCurrencyRupee />{totalAmount.toFixed(2)}</h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
