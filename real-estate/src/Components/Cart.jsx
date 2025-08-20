import { useContext } from "react";
import { CartContext } from "../App";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return <h2 className="text-center mt-10 text-xl">🛒 Your cart is empty</h2>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">🛒 Your Bookings </h2>
      {cart.map((item) => (
        <div key={item.id} className="flex items-center justify-between border-b py-4">
          <img src={item.image} alt={item.title} className="w-32 h-24 object-cover rounded-lg" />
          <div className="flex-1 px-6">
            <h3 className="font-semibold">{item.title}</h3>
            <p>📍 {item.location}</p>
            <p>₹{item.price.toLocaleString()} x {item.quantity}</p>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Remove
          </button>
        </div>
      ))}
      <h3 className="text-right text-xl font-bold mt-4">Total: ₹{total.toLocaleString()}</h3>
      <Link to="/place-order">
        <button className="mt-4 w-full bg-green-600 text-white py-3 rounded-lg">Proceed to Booking </button>
      </Link>
    </div>
  );
};

export default Cart;
