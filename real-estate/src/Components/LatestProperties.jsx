import React from "react";

const LatestProperties = ({ addToCart }) => {
  const properties = [
    { id: 5, title: "Smart Luxury Home", price: 30000000, location: "Bangalore", image: "luxury house img 01.jpg" },
    { id: 6, title: "Sea Facing Penthouse", price: 60000000, location: "Chennai", image: " pent hus 09.jpg" },
    { id: 7, title: "Golf Course Villa", price: 50000000, location: "Gurgaon", image: "golf villa img 01.jpg" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">

      <h2 className="text-3xl font-bold mb-6 text-center">🆕 Latest Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {properties.map((p) => (
          <div key={p.id} className="border rounded-xl p-4 shadow">
            <img src={p.image} alt={p.title} className="w-full h-40 object-cover rounded-lg" />
            <h3 className="text-lg font-semibold mt-2">{p.title}</h3>
            <p>📍 {p.location}</p>
            <p className="font-bold text-green-700">₹{p.price.toLocaleString()}</p>
            <button
              onClick={() => addToCart(p)}
              className="mt-2 bg-green-600 text-white py-2 px-4 rounded w-full"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProperties;
