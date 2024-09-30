import { useSelector } from 'react-redux';
import { MdOutlineCurrencyRupee } from "react-icons/md";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart) || []; // Fallback to an empty array if undefined

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length > 0 ? (
        cart.map(item => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p><MdOutlineCurrencyRupee />{item.price}</p>
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
