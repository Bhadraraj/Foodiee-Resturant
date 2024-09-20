import React, { useState } from "react";

const Demo = () => {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart); // Toggle cart visibility
  };

  return (
    <div>
      {/* Menu Section */}
      <div className="menu">
        {/* Button to open the cart */}
        <button onClick={toggleCart} className="toggle-btn">
          O
        </button>
      </div>

      {/* Cart Section */}
      <div className={`cart-section ${showCart ? 'show' : 'hide'}`}>
        {/* Button to close the cart */}
        <button onClick={toggleCart} className="toggle-btn">
          P
        </button>
        <h2>Shopping Cart</h2>
        {/* Cart details go here */}
      </div>
    </div>
  );
};

export default Demo;
