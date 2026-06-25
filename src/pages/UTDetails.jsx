import { useParams, Link } from "react-router-dom";
import { unionTerritoriesData } from "../data/unionTerritoriesData";


export default function UTDetails() {
  const { utName } = useParams();

  const ut = unionTerritoriesData[utName];

  if (!ut) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <h1 className="text-5xl font-bold">Union Territory Not Found</h1>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 text-white min-h-screen">

      {/* HERO */}
      <div
        className="h-[42vh] md:h-[55vh] bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${ut.image})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-slate-950/90 flex flex-col items-center justify-center">
          <h1 className="
text-3xl
sm:text-4xl
md:text-7xl
font-extrabold
text-white
text-center
px-4
leading-tight
">
            {ut.name}
          </h1>

          
          <div
className="
mt-4
inline-flex
items-center
gap-2
px-4
py-2
rounded-full
bg-white/15
backdrop-blur-xl
border
border-white/20
text-xs
md:text-base
"
>
<span className="text-[11px] md:text-base text-center leading-snug">
  <span className="text-yellow-400 animate-pulse">✦</span>
  {" "}Discover the beauty of {ut.name}
</span>
</div>

          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mt-4"></div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-2 gap-8">

          {/* Information */}
         <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:border-orange-500/30">
            <h2 className="text-3xl font-bold mb-6">
              Information
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full mb-8"></div>

            <div className="space-y-5 text-lg">

              <p>
                <span className="text-slate-400">Capital</span>
                <br />
                <span className="font-semibold">{ut.capital}</span>
              </p>

              <p>
                <span className="text-slate-400">Best Time</span>
                <br />
                <span className="font-semibold">{ut.bestTime}</span>
              </p>

              <p>
                <span className="text-slate-400">Culture</span>
                <br />
                <span className="font-semibold">{ut.culture}</span>
              </p>

            </div>
          </div>

          {/* Famous Places */}
         <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-orange-500/30">
          <h2 className="text-3xl font-bold text-white tracking-wide">
  Famous Places
</h2>

<div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full mt-3 mb-8 "></div>
           <div className="grid gap-3">

  {ut.places.map((place, index) => (
    <Link
      key={index}
      to={`${place.id}`}
      className="
bg-white/5
backdrop-blur-md
border border-white/10
rounded-2xl
px-5
py-4
font-medium
text-white
hover:bg-orange-500/100
hover:border-orange-500/40
hover:translate-x-2
transition-all
duration-300
cursor-pointer
"
    >
       {place.placeName}
       {/* Mobile Arrow */}
<div className="
md:hidden
absolute
top-3
right-3
w-8
h-8
rounded-full
bg-orange-500/1
border
border-orange-400/40
flex
items-center
justify-center
">
<span className="text-orange-400 text-lg animate-pulse">
      →
    </span>
</div>
    </Link>
  ))}
</div>

</div>
          </div>

        

        {/* Nearby Attractions */}
        <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="
max-w-6x1 
mx-auto 
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-3xl
py-8 px-6
transition-all
duration-300
hover:border-orange-500/30
">
         <h2 className="text-3xl font-bold text-white tracking-wide">
  Nearby Attractions
</h2>

<div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full mt-3 mb-8"></div>

          <div className="flex flex-wrap gap-5">
        {ut.nearby.map((place, index) => (
              <span
                key={index}
                className="
px-5
py-3
rounded-full
bg-white/5
border
border-white/10
text-white
font-medium
bg-orange-500/10
border-orange-400/40
transition-all
duration-300
"
              >
                {place}
              </span>
            ))}
          </div>
        </div>


        {/* Food */}
       <div 
className="max-w-6x1 
mx-auto 
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-3xl
py-8 px-6
transition-all
duration-300
hover:border-orange-500/30 mt-10">
          <h2 className="text-3xl font-bold text-white tracking-wide">
            Famous Food
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full mt-3 mb-8"></div>
        
          <div className="flex flex-wrap gap-4">
            {ut.food.map((food, index) => (
              <span
                key={index}
                className="
px-5
py-3
rounded-full
bg-white/5
border
border-white/10
text-white
font-medium
bg-orange-500/10
border-orange-400/40
transition-all
duration-300
"
              >
                {food}
              </span>
            ))}
          </div>
        </div>


        {/* Things To Do */}
        <div 
className="max-w-6x1 
mx-auto 
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-3xl
py-8 px-6
transition-all
duration-300
hover:border-orange-500/30 mt-10">
           <h2 className="text-3xl font-bold text-white tracking-wide">
            Things To Do
          </h2>
 <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full mt-3 mb-8"></div>
          <div className="grid md:grid-cols-2 gap-4">
            {ut.thingsToDo.map((item, index) => (
              <div
                key={index}
                 className="
px-6
py-5
rounded-full
bg-white/5
border
border-white/10
text-white
font-medium
bg-orange-500/10
border-orange-400/40
transition-all
duration-300
"
              >
                 {item}
              </div>
            ))}
          </div>
           </div>
        </div>

      <footer className="bg-slate-950 text-slate-400 text-center py-8">
        © 2026 TravelBharat | Explore India's Union Territories
      </footer>
</div>
    </div>
  );
}