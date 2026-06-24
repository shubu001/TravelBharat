import logo from "../assets/symbol.png";
import bgImage from "../assets/loading-bg.PNG";

export default function LoadingScreen() {
  return (
    <div
  className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-center bg-cover bg-no-repeat"
  style={{
    backgroundImage: `url(${bgImage})`,
  }}
>

      {/* Logo */}
      <img
        src={logo}
        alt="TravelBharat"
        className="w-48 h-48 object-contain animate-pulse"
      />

      {/* Brand */}
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide -mt-6">
        <span className="text-white">Travel</span>
        <span className="text-orange-500">Bharat</span>
      </h1>

      <p className="mt-2 text-slate-400 uppercase tracking-[4px] text-sm md:text-base">
        Explore State By State
      </p>

      {/* Animated Dots */}
      <div className="flex gap-4 mt-10">
        <span className="w-5 h-5 rounded-full bg-orange-500 animate-bounce [animation-delay:0ms]"></span>

        <span className="w-5 h-5 rounded-full bg-orange-500 animate-bounce [animation-delay:200ms]"></span>

        <span className="w-5 h-5 rounded-full bg-orange-500 animate-bounce [animation-delay:400ms]"></span>
      </div>

    </div>
  );
}