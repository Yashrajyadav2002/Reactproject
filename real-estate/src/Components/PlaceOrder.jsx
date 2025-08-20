import { useContext } from "react";
import { CartContext } from "../App";

const PlaceOrder = () => {
  const { cart, clearCart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleBooking = () => {
    alert("✅ Booking confirm successfully! Our agent will contact you soon.");
    clearCart();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      <h2 className="text-3xl font-bold mb-6">📑 Place Booking </h2>
      <p className="text-lg mb-4">You have selected {cart.length} properties.</p>
      <h3 className="text-2xl font-bold mb-6">Total Amount: ₹{total.toLocaleString()}</h3>
      <button
        onClick={handleBooking}
        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
      >
        Confirm Booking
      </button>
    </div>
  );
};

export default PlaceOrder;
