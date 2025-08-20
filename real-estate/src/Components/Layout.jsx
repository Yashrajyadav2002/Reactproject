import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../App";

const Layout = () => {
  const { cart } = useContext(CartContext);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-green-700 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">🏡 RealEstatePro</h1>
        <div className="space-x-6">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/categories" className="hover:underline">Categories</Link>
          <Link to="/about" className="hover:underline">About us</Link>
          <Link to="/signup" className="hover:underline">Signup</Link>
          <Link to="/cart" className="hover:underline">
            Cart 🛒 <span className="bg-red-500 px-2 rounded">{cartCount}</span>
          </Link>
          
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-green-800 text-white mt-12 py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
          {/* About Section */}
          <div>
            <h2 className="text-lg font-semibold mb-3">About Us</h2>
            <p className="text-sm leading-relaxed">
              RealEstatePro is your trusted partner in finding your dream home,
              rental property, or investment opportunity. We bring you verified
              listings with full transparency.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/categories" className="hover:underline">Categories</Link></li>
              <li><Link to="/cart" className="hover:underline">Cart</Link></li>
              <li><Link to="/signup" className="hover:underline">Signup</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Contact Us</h2>
            <p className="text-sm">📍 123 Real Estate St, Bhopal, India</p>
            <p className="text-sm">📞 ‪+91 98765 43210‬</p>
            <p className="text-sm">📧 support - yyash9631@gamil.com</p>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
            <div className="flex space-x-4 text-xl">
              <a href="#" className="hover:text-gray-300">🌐</a>
              <a href="#" className="hover:text-gray-300">📘</a>
              <a href="#" className="hover:text-gray-300">🐦</a>
              <a href="#" className="hover:text-gray-300">📸</a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="text-center text-sm text-gray-300 mt-6 border-t border-gray-600 pt-4">
          © {new Date().getFullYear()} RealEstatePro. All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default Layout;
