import { motion } from "framer-motion";
import utBanner from "../assets/union-bg.PNG";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const unionTerritories = [
  {
    id: 1,
    slug: "andaman-nicobar",
    name: "Andaman & Nicobar",
    image:
      "https://images.unsplash.com/photo-1642498232612-a837df233825?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
tagline: "Tropical Islands & Beaches"
  },
  {
    id: 2,
    slug: "chandigarh",
    name: "Chandigarh",
    image:
      "https://images.unsplash.com/photo-1716131985076-07350de31afd?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
tagline: "Planned City & Modern Architecture"
    },
  {
    id: 3,
    slug: "dadra-nagar-haveli-daman-diu",
    name: "Dadra & Daman Diu",
    image:
      "https://images.unsplash.com/photo-1569776186059-f26b84be14b0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
    capital: "Daman",
tagline: "Portuguese Heritage & Beaches"
},
  {
    id: 4,
    slug: "delhi",
    name: "Delhi",
    image:
      "https://images.unsplash.com/photo-1547300848-441153a7bf02?q=80&w=1971&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tagline: "Historical Monuments & Culture",
  },
  {
    id: 5,
    slug: "jammu-kashmir",
    name: "Jammu & Kashmir",
    image:
      "https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tagline: "Paradise on Earth",
  },
  {
    id: 6,
    slug: "ladakh",
    name: "Ladakh",
    image:
      "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tagline: "High Passes & Adventure",
  },
  {
    id: 7,
    slug: "lakshadweep",
    name: "Lakshadweep",
    image:
      "https://images.unsplash.com/photo-1572025310208-2fd6b91764c1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
tagline: "Coral Islands & Blue Lagoons",
  },
  {
    id: 8,
    slug: "puducherry",
    name: "Puducherry",
    image:
      "https://images.unsplash.com/photo-1606921916293-8a5ef606c20c?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
tagline: "French Heritage & Beaches",
  },
];

export default function UnionTerritories() {
  const [search, setSearch] = useState("");
const [showDropdown, setShowDropdown] = useState(false);

const filteredUT = unionTerritories.filter((ut) =>
  ut.name.toLowerCase().includes(search.toLowerCase())
);



  return (
    <div className="min-h-screen bg-slate-95 text-white">
      
      {/* Hero */}
      <section
  className="relative h-[350px] md:h-[450px] flex items-center justify-center"
  style={{
    backgroundImage: `url(${utBanner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
    <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative z-10 text-center px-6 flex flex-col items-center gap-4">
          <h1 className="text-3xl md:text-6xl font-bold leading-[1.15]">
            Explore India's Union Territories
          </h1>
<div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full mx-auto mt-2 mb-4"></div>

<div className="flex justify-center -mt-1">
  <div className="inline-flex items-center px-4 py-3 rounded-full bg-white/15 backdrop-blur-xl border border-white/20">
  <span className="text-[11px] md:text-base text-center leading-snug">
  <span className="text-yellow-400 animate-pulse">✦</span>
  {" "}Discover India's Untold Beauty
</span>
</div>
</div>
         

<div className="mt-8">
          <div className="mt -14 flex justify-center">
  <div className="p-[1px] rounded-full bg-gradient-to-r from-orange-500 via-slate-200 to-orange-500">

    <div className="relative w-[320px] md:w-[700px]">

      <input
        type="text"
        placeholder="Search Union Territories..."
        value={search}
        onFocus={() => setShowDropdown(true)}
        onChange={(e) => {
          setSearch(e.target.value);
          setShowDropdown(true);
        }}
        onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
        className="w-full px-8 py-3 rounded-full bg-[#080808] text-white placeholder-white/60 outline-none"
      />

      <FiSearch className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-2xl pointer-events-none" />

      {showDropdown && (
        <div className="absolute left-0 right-0 mt-2 max-h-72 overflow-y-auto rounded-2xl bg-slate-900 border border-orange-500/20 shadow-2xl z-50">

          {unionTerritories
            .filter((ut) =>
              ut.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((ut) => (
              <div
                key={ut.id}
                onMouseDown={() => {
  navigate(`/union-territories/${ut.slug}`);

                }}
                className="px-5 py-3 cursor-pointer hover:bg-orange-500 transition border-b border-white/5 last:border-none"
              >
                {ut.name}
              </div>
            ))}

        </div>
      )}

    </div>
  </div>
</div>

</div>
</div>
 
</section>

<section className="max-w-7xl mx-auto px-2 py-10">
       <div className="text-center mb-8">
  <h2 className="text-4xl font-bold">
    Union Territories of India
  </h2>
  <div className="w-24 h-1 bg-orange-500 rounded-full mx-auto mt-3 mb-4"></div>

  <p className="text-slate-400 text-lg mt-2">
  Explore pristine islands, rich heritage and unique cultures
</p>
</div>
</section>

      {/* Stats */}
      <div className="max-w-8xl mx-auto px-7">
       
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredUT.map((ut) => (
           <motion.div
  key={ut.id}
  whileHover={{
    y: -10,
    scale: 1.03,
  }}
  transition={{
    duration: 0.25,
  }}
  className="
    group
    bg-slate-900
    rounded-2xl
    overflow-hidden
    border border-white/10
    hover:border-orange-500
    hover:shadow-[0_0_30px_rgba(249,115,22,0.25)]
    transition-all
    duration-300
  "
>
 <div className="overflow-hidden">
  <img
    src={ut.image}
    alt={ut.name}
    className="
      w-full
      h-52
      object-cover
      transition-transform
      duration-500
      group-hover:scale-110
    "
  />
</div>

  <div className="p-5 flex flex-col justify-between h-40">

    <div>
      <h3 className="text-2xl font-bold text-white leading-tight">
        {ut.name}
      </h3>

      <p className="text-slate-400 text-sm mt-2">
        {ut.tagline}
      </p>
    </div>

    <Link
  to={`/union-territories/${ut.slug}`}
  className="
    w-fit
    px-4
    py-2
    bg-orange-500
    hover:bg-orange-600
    rounded-xl
    text-white
    font-semibold
    transition-all
    duration-300
  "
>
  Explore →
</Link>

  </div>
</motion.div>
          ))}
        </div>
      </div>
 {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 text-center py-8">
        © 2026 TravelBharat | Explore India State by State
      </footer>
    </div>
  );
}