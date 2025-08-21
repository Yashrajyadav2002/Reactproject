import React, { useContext } from "react";
import { CartContext } from "../App";

const FeaturedProducts = () => {
  const { addToCart } = useContext(CartContext);

  // 40 featured products (dummy data)
  const products = [
    { id: 1, title: "Luxury Villa in Goa", price: 9500000, image: "villa img 01.jpg", category: "Villa" },
    { id: 2, title: "Modern Apartment in Delhi", price: 3500000, image: "Apartment img 01.webp", category: "Apartment" },
    { id: 3, title: "Beach House in Kerala", price: 12000000, image: "beach1.jpg", category: "House" },
    { id: 4, title: "Penthouse in Mumbai", price: 18000000, image: "pent hus 02.jpg", category: "Penthouse" },
    { id: 5, title: "Farmhouse in Punjab", price: 7500000, image: "farm hus 02.jpg", category: "Farmhouse" },
    { id: 6, title: "Studio Apartment in Bangalore", price: 2200000, image: "apartment 02.jpeg", category: "Apartment" },
    { id: 7, title: "Luxury Villa in Pune", price: 8700000, image: "villa 01.jpg", category: "Villa" },
    { id: 8, title: "Duplex House in Chennai", price: 6700000, image: "house1.jpg", category: "House" },
    { id: 9, title: "Apartment in Hyderabad", price: 4200000, image: "apartment3.jpg", category: "Apartment" },
    { id: 10, title: "Farmhouse in Haryana", price: 8800000, image: "farm2.jpg", category: "Farmhouse" },
    { id: 11, title: "Villa in Jaipur", price: 9200000, image: "villa3.jpg", category: "Villa" },
    { id: 12, title: "Apartment in Kolkata", price: 3100000, image: "apartment4.jpg", category: "Apartment" },
    { id: 13, title: "Beachfront Villa in Goa", price: 16000000, image: "beach2.jpg", category: "Villa" },
    { id: 14, title: "Luxury Penthouse in Delhi", price: 20000000, image: "penthouse2.jpg", category: "Penthouse" },
    { id: 15, title: "Modern Duplex in Bangalore", price: 7200000, image: "house2.jpg", category: "House" },
    { id: 16, title: "Farmhouse in Himachal", price: 6500000, image: "farm3.jpg", category: "Farmhouse" },
    { id: 17, title: "Villa in Chandigarh", price: 8100000, image: "villa4.jpg", category: "Villa" },
    { id: 18, title: "Apartment in Noida", price: 3900000, image: "apartment5.jpg", category: "Apartment" },
    { id: 19, title: "Beach Villa in Vizag", price: 14000000, image: "beach3.jpg", category: "Villa" },
    { id: 20, title: "Penthouse in Gurgaon", price: 17000000, image: "penthouse3.jpg", category: "Penthouse" },
    { id: 21, title: "Modern Apartment in Lucknow", price: 2800000, image: "apartment6.jpg", category: "Apartment" },
    { id: 22, title: "Luxury Villa in Indore", price: 8600000, image: "villa5.jpg", category: "Villa" },
    { id: 23, title: "Farmhouse in Rajasthan", price: 9300000, image: "farm4.jpg", category: "Farmhouse" },
    { id: 24, title: "Penthouse in Ahmedabad", price: 15500000, image: "penthouse4.jpg", category: "Penthouse" },
    { id: 25, title: "Beachfront House in Kochi", price: 12500000, image: "beach4.jpg", category: "House" },
    { id: 26, title: "Apartment in Surat", price: 3400000, image: "apartment7.jpg ", category: "Apartment" },
    { id: 27, title: "Luxury Villa in Nagpur", price: 8000000, image: "villa6.jpg ", category: "Villa" },
    { id: 28, title: "Duplex House in Mysore", price: 6100000, image: "house3.jpg", category: "House" },
    { id: 29, title: "Penthouse in Pune", price: 16200000, image: "penthouse5.jpg", category: "Penthouse" },
    { id: 30, title: "Farmhouse in Gujarat", price: 7200000, image: "farm5.jpg", category: "Farmhouse" },
    { id: 31, title: "Luxury Villa in Bhopal", price: 9100000, image: "villa7.jpg", category: "Villa" },
    { id: 32, title: "Modern Apartment in Jaipur", price: 3000000, image: "apartment8.jpg", category: "Apartment" },
    { id: 33, title: "Penthouse in Chennai", price: 16800000, image: "penthouse6.jpg", category: "Penthouse" },
    { id: 34, title: "Beachfront House in Goa", price: 13000000, image: "", category: "House" },
    { id: 35, title: "Apartment in Trivandrum", price: 2800000, image: "", category: "Apartment" },
    { id: 36, title: "Luxury Villa in Kanpur", price: 9400000, image: "", category: "Villa" },
    { id: 37, title: "Farmhouse in Uttarakhand", price: 8000000, image: "", category: "Farmhouse" },
    { id: 38, title: "Penthouse in Hyderabad", price: 17500000, image: "", category: "Penthouse" },
    { id: 39, title: "Apartment in Patna", price: 2600000, image: "", category: "Apartment" },
    { id: 40, title: "Luxury Villa in Raipur", price: 8900000, image: "", category: "Villa" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-10">Featured Properties</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-600">₹{product.price.toLocaleString()}</p>
              <p className="text-sm text-gray-500 mt-1">{product.category}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-3 w-full bg-green-500  text-white py-2 rounded-lg"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;