import { useState } from "react"

const Categories = ({ addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState("All")

  // ✅ 40 Real Estate Products
  const products = [
    // Apartments (7)
    { id: 1, title: "Luxury Apartment A1", category: "Apartments", price: 5000000, image: "apartment1.jpg" },
    { id: 2, title: "Modern Apartment A2", category: "Apartments", price: 4500000, image: "apartment2.jpg" },
    { id: 3, title: "Cozy Apartment A3", category: "Apartments", price: 3000000, image: "apartment3.jpg" },
    { id: 4, title: "Penthouse Apartment A4", category: "Apartments", price: 8000000, image: "apartment4.jpg" },
    { id: 5, title: "City Apartment A5", category: "Apartments", price: 4000000, image: "apartment5.jpg" },
    { id: 6, title: "Family Apartment A6", category: "Apartments", price: 3500000, image: "apartment6.jpg" },
    { id: 7, title: "Affordable Apartment A7", category: "Apartments", price: 2500000, image: "apartment7.jpg" },

    // Villas (7)
    { id: 8, title: "Sea View Villa V1", category: "Villas", price: 12000000, image: "villa1.jpg" },
    { id: 9, title: "Private Pool Villa V2", category: "Villas", price: 15000000, image: "villa2.jpg" },
    { id: 10, title: "Hilltop Villa V3", category: "Villas", price: 18000000, image: "villa3.jpg" },
    { id: 11, title: "Luxury Villa V4", category: "Villas", price: 20000000, image: "villa4.jpg" },
    { id: 12, title: "Coastal Villa V5", category: "Villas", price: 14000000, image: "villa5.jpg" },
    { id: 13, title: "Green Villa V6", category: "Villas", price: 16000000, image: "villa6.jpg" },
    { id: 14, title: "Exclusive Villa V7", category: "Villas", price: 22000000, image: "villa7.jpg" },

    // Commercial (7)
    { id: 15, title: "Commercial Shop C1", category: "Commercial", price: 3000000, image: "shop1.jpg" },
    { id: 16, title: "Office Space C2", category: "Commercial", price: 6000000, image: "office1.jpg" },
    { id: 17, title: "Retail Shop C3", category: "Commercial", price: 3500000, image: "shop2.jpg" },
    { id: 18, title: "Corporate Tower C4", category: "Commercial", price: 10000000, image: "tower1.jpg" },
    { id: 19, title: "Commercial Complex C5", category: "Commercial", price: 8000000, image: "complex1.jpg" },
    { id: 20, title: "Showroom C6", category: "Commercial", price: 7500000, image: "showroom1.jpg" },
    { id: 21, title: "Warehouse C7", category: "Commercial", price: 9000000, image: "warehouse1.jpg" },

    // Farmhouses (6)
    { id: 22, title: "Farmhouse Retreat F1", category: "Farmhouses", price: 8000000, image: "farm1.jpg" },
    { id: 23, title: "Green Farmhouse F2", category: "Farmhouses", price: 9500000, image: "farm2.jpg" },
    { id: 24, title: "Lake View Farmhouse F3", category: "Farmhouses", price: 11000000, image: "farm3.jpg" },
    { id: 25, title: "Countryside Farmhouse F4", category: "Farmhouses", price: 7000000, image: "farm4.jpg" },
    { id: 26, title: "Heritage Farmhouse F5", category: "Farmhouses", price: 12000000, image: "farm5.jpg" },
    { id: 27, title: "Luxury Farmhouse F6", category: "Farmhouses", price: 15000000, image: "farm6.jpg" },

    // Plots (6)
    { id: 28, title: "City Plot P1", category: "Plots", price: 2000000, image: "plot1.jpg" },
    { id: 29, title: "Residential Plot P2", category: "Plots", price: 2500000, image: "plot2.jpg" },
    { id: 30, title: "Commercial Plot P3", category: "Plots", price: 4000000, image: "plot3.jpg" },
    { id: 31, title: "Corner Plot P4", category: "Plots", price: 3000000, image: "plot4.jpg" },
    { id: 32, title: "Industrial Plot P5", category: "Plots", price: 5000000, image: "plot5.jpg" },
    { id: 33, title: "Premium Plot P6", category: "Plots", price: 6000000, image: "plot6.jpg" },

    // Luxury Homes (7)
    { id: 34, title: "Modern Luxury Home L1", category: "Luxury Homes", price: 15000000, image: "luxury1.jpg" },
    { id: 35, title: "Ultra Luxury Home L2", category: "Luxury Homes", price: 18000000, image: "luxury2.jpg" },
    { id: 36, title: "Mansion L3", category: "Luxury Homes", price: 25000000, image: "luxury3.jpg" },
    { id: 37, title: "Smart Luxury Home L4", category: "Luxury Homes", price: 16000000, image: "luxury4.jpg" },
    { id: 38, title: "Designer Villa L5", category: "Luxury Homes", price: 22000000, image: "luxury5.jpg" },
    { id: 39, title: "Elite Luxury Home L6", category: "Luxury Homes", price: 28000000, image: "luxury6.jpg" },
    { id: 40, title: "Royal Luxury Home L7", category: "Luxury Homes", price: 30000000, image: "luxury7.jpg" },
  ]

  const categories = ["All", "Apartments", "Villas", "Commercial", "Farmhouses", "Plots", "Luxury Homes"]

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory)

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Filter Buttons */}
      <div className="flex gap-4 flex-wrap justify-center mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg font-semibold shadow ${
              selectedCategory === category ? "bg-green-500 text-white" : "bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid (4 Columns) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition bg-white">
            <img src={product.image} alt={product.title} className="h-40 w-full object-cover rounded-md mb-4" />
            <h3 className="text-lg font-bold">{product.title}</h3>
            <p className="text-sm text-gray-600">{product.category}</p>
            <p className="text-blue-500 font-semibold mt-2">₹{product.price.toLocaleString()}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-3 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories