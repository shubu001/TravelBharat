import { Link } from "react-router-dom";
import { useState } from "react";

import { FiSearch } from "react-icons/fi";
import travelBanner from "../assets/tbbanner.PNG";


export default function States() {
  
    const states = [

  { name: "Andhra Pradesh", desc: "Coastal Beauty & Temples", image: "https://images.unsplash.com/photo-1642516861780-1b3ef14b25b5?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Arunachal Pradesh", desc: "Land of Dawn-lit Mountains", image: "https://plus.unsplash.com/premium_photo-1697729690458-2d64ca777c04?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Assam", desc: "Tea Gardens & Wildlife", image: "https://images.unsplash.com/photo-1589882485484-c073e3742e60?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Bihar", desc: "Ancient Heritage", image: "https://plus.unsplash.com/premium_photo-1697730291496-f1ed760a5f1a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Chhattisgarh", desc: "Forests & Waterfalls", image: "https://plus.unsplash.com/premium_photo-1691031429475-a18a2c89d83c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Goa", desc: "Beaches & Nightlife", image: "https://images.unsplash.com/photo-1580741186862-c5d0bf2aff33?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Gujarat", desc: "White Desert & Culture", image: "https://images.unsplash.com/photo-1642841819300-20ed449c02a1?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Haryana", desc: "Tradition & Modernity", image: "https://images.unsplash.com/photo-1605469237567-a39930679526?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Himachal Pradesh", desc: "Mountains & Valleys", image: "https://images.unsplash.com/photo-1620720970374-5b7e67e1e610?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Jharkhand", desc: "Land of Forests", image: "https://images.unsplash.com/photo-1605160738885-5f86a3bb709c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Karnataka", desc: "Technology & Heritage", image: "https://images.unsplash.com/photo-1659126574791-13313aa424bd?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Kerala", desc: "God's Own Country", image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Madhya Pradesh", desc: "Heart of India", image: "https://images.unsplash.com/photo-1585744945554-5df801d2b680?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Maharashtra", desc: "Gateway of India", image: "https://images.unsplash.com/photo-1598434192043-71111c1b3f41?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Manipur", desc: "Jewel of India", image: "https://images.unsplash.com/photo-1587635861480-414767bd0198?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Meghalaya", desc: "Abode of Clouds", image: "https://images.unsplash.com/photo-1707219004247-0657a598a23d?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Mizoram", desc: "Rolling Hills", image: "https://images.unsplash.com/photo-1742489468038-b7e948b6fab1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Nagaland", desc: "Tribal Heritage", image: "https://images.unsplash.com/photo-1700042628681-65beff2bddb4?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Odisha", desc: "Temples & Beaches", image: "https://images.unsplash.com/photo-1601815264039-67c8ba1a7f98?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Punjab", desc: "Culture & Heritage", image: "https://images.unsplash.com/photo-1623059508779-2542c6e83753?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Rajasthan", desc: "Land of Kings", image: "https://images.unsplash.com/photo-1602643163983-ed0babc39797?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Sikkim", desc: "Himalayan Paradise", image: "https://images.unsplash.com/photo-1634400118017-7ca0f1ed1588?q=80&w=1028&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Tamil Nadu", desc: "Temples & Tradition", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Telangana", desc: "Heritage & Innovation", image: "https://images.unsplash.com/photo-1657981630164-769503f3a9a8?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Tripura", desc: "Hidden Gem of Northeast", image: "https://images.unsplash.com/photo-1695150854909-a00039a284b8?q=80&w=1229&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Uttar Pradesh", desc: "Home of Taj Mahal", image: "https://images.unsplash.com/photo-1585506942812-e72b29cef752?q=80&w=728&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Uttarakhand", desc: "Land of Gods", image: "https://images.unsplash.com/photo-1607406374368-809f8ec7f118?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "West Bengal", desc: "Culture & Literature", image: "https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
];

const [search, setSearch] = useState("");
const [showDropdown, setShowDropdown] = useState(false);

const filteredStates = states.filter((state) =>
  state.name.toLowerCase().includes(search.toLowerCase())
);
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      
      {/* HERO SECTION */}
      <section
  className="relative h-[350px] md:h-[450px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${travelBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-3xl md:text-6xl font-bold leading-tight">
            Explore India's States
          </h1>

          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full mx-auto mt-2 mb-4"></div>

<div className="flex justify-center mt-6">
  <div className="inline-flex items-center px-4 py-3 rounded-full bg-white/15 backdrop-blur-xl border border-white/20">
  <span className="text-[11px] md:text-base text-center leading-snug">
  <span className="text-yellow-400 animate-pulse">✦</span>
  {" "}Discover Culture, Heritage, Nature & Adventure
</span>
</div>
</div>

          <div className="mt-8">
          <div className="mt-14 flex justify-center">
  <div className="p-[1px] rounded-full bg-gradient-to-r from-orange-500 via-slate-200 to-orange-500">

    <div className="relative w-[320px] md:w-[700px]">

      <input
  type="text"
  placeholder="Search States..."
  value={search}
  onFocus={() => setShowDropdown(true)}
  onChange={(e) => {
    setSearch(e.target.value);
    setShowDropdown(true);
  }}
  onBlur={() => {
    setTimeout(() => setShowDropdown(false), 150);
  }}
  className="
    w-full
    px-8 py-3
    rounded-full
    bg-[#080808]
    text-white
    placeholder-white/60
    outline-none
  "
/>
{showDropdown && (
  <div
    className="
      absolute
      left-0
      right-0
      mt-2
      max-h-72
      overflow-y-auto
      rounded-2xl
      bg-slate-900/95
      backdrop-blur-xl
      border
      border-orange-500/20
      shadow-2xl
      z-50
    "
  >
    {states
      .filter((state) =>
        state.name.toLowerCase().includes(search.toLowerCase())
      )
      .map((state) => (
        <div
          key={state.name}
          onMouseDown={() => {
            setSearch(state.name);
            setShowDropdown(false);
          }}
          className="
            px-5
            py-3
            cursor-pointer
            hover:bg-orange-500
            transition
            border-b
            border-white/5
            last:border-none
          "
        >
          {state.name}
        </div>
      ))}
  </div>
)}
      <FiSearch
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-2xl"
      />
    </div>

  </div>
</div>
          </div>
        </div>
      </section>

      {/* STATES GRID */}
      <section className="w-ful max-w-7xl mx-auto px-3 md:px-6 py-10">
       <div className="text-center mb-8">
  <h2 className="text-4xl font-bold">
    States of India
  </h2>
  <div className="w-24 h-1 bg-orange-500 rounded-full mx-auto mt-3 mb-4"></div>

  <p className="text-slate-400 text-lg mt-2">
  Explore culture, heritage, nature and traditions across India
</p>
</div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8 md:mt-12 w-full">
          {filteredStates.map((state) => (
            <Link
  key={state.name}
  to={`/states/${state.name.toLowerCase()}`}
  className="group w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-orange-500 transition-all duration-300 md:hover:scale-105 md:hover:-translate-y-2 hover:shadow-orange-500/20"
>
              <div className="overflow-hidden">
                <img
                  src={state.image}
                  alt={state.name}
                  className="w-full h-52 md:h-56 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              

              <div className="p-5">
                <h3 className="text-xl md:text-2xl font-bold">
                  {state.name}
                </h3>

                <p className="text-slate-400 mt-2">
                  {state.desc}
                </p>

                <button className="mt-5 bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg">
                  Explore →
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>
  {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 text-center py-8">
        © 2026 TravelBharat | Explore India State by State
      </footer>
  </div>
  );
}