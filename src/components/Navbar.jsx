import { Link } from "react-router-dom";
import logo from "../assets/symbol.png";
import { useNavigate, useLocation } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
const location = useLocation();
  return (
    <nav className="fixed top-0 left-0 w-full z-50 relative">
      <div className="bg-black/30 backdrop-blur-xl border-b border-white/10">

        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between relative">

          {/* Logo */}
          <div className="flex items-center ml-14 md:ml-1">

            {location.pathname !== "/" && (
  <button
    onClick={() => navigate(-1)}
    className="
absolute
left-2 md:left-0
top-1/2 md:top-10
-translate-y-1/2
w-11 h-11
flex items-center justify-center
rounded-full
bg-black/40
backdrop-blur-xl
border border-white/20
text-white
hover:bg-orange-500
hover:border-orange-500
hover:scale-110
transition-all duration-300
z-50
"
  >
    <FiArrowLeft size={20} />
  </button>
)}
  
  <img
    src={logo}
    alt="TravelBharat"
    className="h-12 md:h-20 w-auto"
  />

  <div>
   <h1 className="text-xl md:text-3xl font-bold leading-none">
      <span className="text-white">Travel</span>
      <span className="text-orange-500">Bharat</span>
    </h1>

   <p className="hidden md:block text-xs tracking-[0.2em] uppercase mt-1">
  <span className="text-orange-500">Explore India</span>
  <span className="text-slate-400"> | State by State</span>
</p>
  </div>

</div>

          {/* Menu */}
          <div className="hidden md:flex items-center gap-10">


            <Link
              to="/"
              className="text-white hover:text-orange-500 transition"
            >
              Home
            </Link>


            <Link
              to="/login"
              className="text-white hover:text-orange-500 transition"
            >
              Admin
            </Link>
            <Link
              to="/union-territories"
              className="text-white hover:text-orange-500 transition"
            >
              Union Territories
            </Link>
            
<Link
              to="/states"
              className="text-white hover:text-orange-500 transition"
            >
              States
            </Link>
          </div>

          {/* Mobile Hamburger */}
<button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden text-white text-3xl"
>
  {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
</button>

        </div>
      </div>
      {menuOpen && (
  <div className="md:hidden bg-slate-950 border-t border-white/10">
    
    <Link
      to="/"
      className="block px-6 py-4 text-white 
active:bg-orange-500/20
active:text-orange-400
active:scale-95
transition-all
duration-150"
    >
      Home
    </Link>

    <Link
      to="/states"
      className="block px-6 py-4 text-white
      active:bg-orange-500/20
active:text-orange-400
active:scale-95
transition-all
duration-150"
    >
      States
    </Link>

    <Link
      to="/union-territories"
      className="block px-6 py-4 text-white 
      active:bg-orange-500/20
active:text-orange-400
active:scale-95
transition-all
duration-150"
    >
      Union Territories
    </Link>

    <Link
      to="/login"
      className="block px-6 py-4 text-white
      active:bg-orange-500/20
active:text-orange-400
active:scale-95
transition-all
duration-150"
    >
      Admin
    </Link>

  </div>
)}
    </nav>
  );
}