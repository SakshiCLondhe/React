import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // optional icons, install below

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Title */}
        <Link to="/" className="text-2xl font-bold">
          BeyondChats
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-lg">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/pdf" className="hover:underline">PDF</Link>
          <Link to="/quiz" className="hover:underline">Quiz</Link>
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-700 flex flex-col items-center space-y-4 py-4">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/pdf" onClick={() => setMenuOpen(false)}>PDF</Link>
          <Link to="/quiz" onClick={() => setMenuOpen(false)}>Quiz</Link>
          <Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
