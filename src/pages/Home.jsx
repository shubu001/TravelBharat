import indiaMap from "../assets/india-mapbg.jpg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {

const navigate = useNavigate();

const fullText = "Explore India";
const subText = "State by State";

const [text, setText] = useState("");
const [subtitle, setSubtitle] = useState("");

useEffect(() => {
  let index = 0;

  const firstTyping = setInterval(() => {
    setText(fullText.slice(0, index + 1));
    index++;

    if (index === fullText.length) {
      clearInterval(firstTyping);

      let subIndex = 0;

      const secondTyping = setInterval(() => {
        setSubtitle(subText.slice(0, subIndex + 1));
        subIndex++;

        if (subIndex === subText.length) {
          clearInterval(secondTyping);
        }
      }, 100);
    }
  }, 120);

  return () => clearInterval(firstTyping);
}, []);

  return (
    <>
      {/* HERO SECTION */}
      
      <section
        className="relative min-h-screen flex items-center justify-center pt-16 md:pt-24"
        style={{
          backgroundImage: `url(${indiaMap})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

       <div className="relative z-10 text-center text-white px-4 md:px-6 max-w-5xl w-full -mt-38 md:-mt-50">
          
          {/* Moving Tagline */}

<div className="overflow-hidden mb-12 bg-black/40 backdrop-blur-md border border-white/10 rounded-full py-2 px-3 max-w-[90%] mx-auto md:mt-8">
  <div className="marquee">
    <span>✦ INCREDIBLE INDIA </span>
    <span>✦ 28 STATES </span>
    <span>✦ 8 UNION TERRITORIES</span>
    <span>✦ 140+ DESTINATIONS </span>
    <span>✦ HERITAGE • CULTURE • ADVENTURE </span>
    <span>✦ TRAVELBHARAT </span>
  </div>
</div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold min-h-[70px] md:min-h-[120px] leading-tight">
  {text.split("").map((char, index) => (
    <span
      key={index}
      className="
        inline-block
        text-white
        hover:text-orange-500
        hover:-translate-y-3
        hover:scale-125
        transition-all
        duration-300
        cursor-default
      "
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ))}

  <span className="animate-pulse text-orange-500">|</span>
</h1>

        
  <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold -mt-2">
  {subtitle.split("").map((char, index) => (
    <span
      key={index}
      className="
        inline-block
        text-orange-500
        hover:text-white
        hover:-translate-y-3
        hover:scale-150
        transition-all
        duration-300
        cursor-default
      "
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ))}
</h2>


<div className="w-full flex justify-center">
  <div className="flex flex-col md:flex-row items-center justify-center gap-3 mt-9 mb-8">

    <div className="bg-black/40 backdrop-blur-xl border border-white/10 w-40 md:w-auto px-4 py-2 rounded-full text-sm text-white text-center">
      🏛️ Heritage
    </div>

    <div className="bg-black/40 backdrop-blur-xl border border-white/10 w-40 md:w-auto px-4 py-2 rounded-full text-sm text-white text-center">
      🎭 Culture
    </div>

    <div className="bg-black/40 backdrop-blur-xl border border-white/10 w-40 md:w-auto px-4 py-2 rounded-full text-sm text-white text-center">
      🌿 Nature
    </div>

    <div className="bg-black/40 backdrop-blur-xl border border-white/10 w-40 md:w-auto px-4 py-2 rounded-full text-sm text-white text-center">
      ✈️ Adventure
    </div>

  </div>
</div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 md:mt-20">
            <div className="bg-black/50 backdrop-blur-x1 border border-white/10 p-3 md:p-6 rounded-2xl">
              <h3 className="text-2xl md:text-4xl font-bold text-orange-500">  28</h3>
              <p className="text-sm md:text-base">States</p>
            </div>

            <div className="bg-black/50 backdrop-blur-x1 border border-white/10 p-3 md:p-6 rounded-2xl">
              <h3 className="text-2xl md:text-4xl font-bold text-orange-500">8</h3>
              <p className="text-sm md:text-base">Union Territories</p>
            </div>

            <div className="bg-black/50 backdrop-blur-x1 border border-white/10 p-3 md:p-6 rounded-2xl">
              <h3 className="text-2xl md:text-4xl font-bold text-orange-500"> 140+</h3>
              <p className="text-sm md:text-base">Destinations</p>
            </div>

            <div className="bg-black/50 backdrop-blur-x1 border border-white/10 p-3 md:p-6 rounded-2xl">
              <h3 className="text-2xl md:text-4xl font-bold text-orange-500">570+</h3>
              <p className="text-sm md:text-base">Photos</p>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR STATES */}
<section className="bg-white text-black py-12 md:py-16 px-4 md:px-8">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-10">
      Popular States
    </h2>
    <div className="flex justify-center mt-4 mb-10">
  <div className="w-28 h-1 rounded-full bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 animate-pulse"></div>
</div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {/* Rajasthan */}
      <div
        onClick={() => navigate("states/rajasthan")}
        className="
        relative
          bg-white rounded-2xl overflow-hidden
          border-2 border-transparent
          shadow-md cursor-pointer group
          hover:border-orange-500
          hover:shadow-2xl
          hover:-translate-y-2
          transition-all duration-300
        "
      >
        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800"
            alt="Rajasthan"
            className="
              h-56 w-full object-cover
              transition-transform duration-500
              group-hover:scale-110
            "
          />
        </div>

        <div className="p-4">
          <h3 className="font-bold text-xl group-hover:text-orange-500 transition-colors">
            Rajasthan
          </h3>
          <p className="text-gray-600">
            Land of Kings
          </p>
        </div>
        <span
  className="
  absolute
  bottom-4
  right-4
  w-10
  h-10
  rounded-full
  border
  border-orange-500
  flex
  items-center
  justify-center
  text-orange-500
  text-xl
  animate-pulse

  md:hidden
  "
>
  →
</span>
      </div>

      {/* Goa */}
      <div
        onClick={() => navigate("states/goa")}
        className="
        relative
          bg-white rounded-2xl overflow-hidden
          border-2 border-transparent
          shadow-md cursor-pointer group
          hover:border-orange-500
          hover:shadow-2xl
          hover:-translate-y-2
          transition-all duration-300
        "
      >
        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800"
            alt="Goa"
            className="
              h-56 w-full object-cover
              transition-transform duration-500
              group-hover:scale-110
            "
          />
        </div>

        <div className="p-4">
          <h3 className="font-bold text-xl group-hover:text-orange-500 transition-colors">
            Goa
          </h3>
          <p className="text-gray-600">
            Beaches & Nightlife
          </p>
        </div>
        <span
  className="
  absolute
  bottom-4
  right-4
  w-10
  h-10
  rounded-full
  border
  border-orange-400
  flex
  items-center
  justify-center
  text-orange-500
  text-xl
  animate-pulse

  md:hidden
  "
>
  →
</span>
      </div>

      {/* Kerala */}
      <div
        onClick={() => navigate("states/kerala")}
        className="
        relative
          bg-white rounded-2xl overflow-hidden
          border-2 border-transparent
          shadow-md cursor-pointer group
          hover:border-orange-500
          hover:shadow-2xl
          hover:-translate-y-2
          transition-all duration-300
        "
      >
        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800"
            alt="Kerala"
            className="
              h-56 w-full object-cover
              transition-transform duration-500
              group-hover:scale-110
            "
          />
        </div>

        <div className="p-4">
          <h3 className="font-bold text-xl group-hover:text-orange-500 transition-colors">
            Kerala
          </h3>
          <p className="text-gray-600">
            God's Own Country
          </p>
        </div>
        <span
  className="
  absolute
  bottom-4
  right-4
  w-10
  h-10
  rounded-full
  border
  border-orange-400
  flex
  items-center
  justify-center
  text-orange-500
  text-xl
  animate-pulse

  md:hidden
  "
>
  →
</span>
      </div>

      {/* Himachal Pradesh */}
      <div
        onClick={() => navigate("states/himachal%20pradesh")}
        className="
        relative
          bg-white rounded-2xl overflow-hidden
          border-2 border-transparent
          shadow-md cursor-pointer group
          hover:border-orange-500
          hover:shadow-2xl
          hover:-translate-y-2
          transition-all duration-300
        "
      >
        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800"
            alt="Himachal Pradesh"
            className="
              h-56 w-full object-cover
              transition-transform duration-500
              group-hover:scale-110
            "
          />
        </div>

        <div className="p-4">
          <h3 className="font-bold text-xl group-hover:text-orange-500 transition-colors">
            Himachal Pradesh
          </h3>
          <p className="text-gray-600">
            Mountains & Valleys
          </p>
        </div>
        <span
  className="
  absolute
  bottom-4
  right-4
  w-10
  h-10
  rounded-full
  border
  border-orange-400
  flex
  items-center
  justify-center
  text-orange-500
  text-xl
  animate-pulse

  md:hidden
  "
>
  →
</span>
      </div>

    </div>
  </div>
</section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 text-center py-8">
        © 2026 TravelBharat | Explore India State by State
      </footer>
    </>
  );
}