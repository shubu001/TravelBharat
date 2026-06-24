import { useParams } from "react-router-dom";
import { useState } from "react";
import { FiEye } from "react-icons/fi";
import { FiNavigation,FiX,} from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { X, MapPin, CalendarDays, Clock3, Ticket } from "lucide-react";
import { utPlacesData } from "../data/utPlacesData";

export default function PlaceDetails() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedAttraction, setSelectedAttraction] = useState(null);

  const { placeName } = useParams();


  const place = utPlacesData?.find(
  (p) => p.id === placeName
);

  if (!place) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white text-3xl">
        Place Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-28 px-6">

      <div className="max-w-7xl mx-auto">

        

        {/* HERO SECTION */}

        <div className="relative h-[600px] rounded-3xl overflow-hidden mb-10">
          <img
          
            src={place.images?.[0]}
            alt={place.placeName}
            className="w-full h-full object-cover"
          />
          

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

          <div className="
absolute
bottom-8
left-5
right-5
md:bottom-10
md:left-10
md:right-auto
md:top-auto
z-10
">
            <h1 className="
text-4xl
md:text-7xl
font-extrabold
leading-tight
">
              {place.placeName}
            </h1>

            <p className="
text-xs
md:text-base
text-slate-300
mt-2
max-w-2xl
leading-relaxed
line-clamp-5
md:line-clamp-none
">
              {place.description}
            </p>

            <div className="flex flex-wrap gap-3 mt-4 md:mt-5">
              <span className="bg-white/20 backdrop-blur-md px-5 py-2 rounded-full">
                {place.category}
              </span>


              <a
                href={place.googleMapsLink}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-full font-semibold transition"
              >
                🗺 Open Maps
              </a>

            </div>

          </div>

        </div>
 
       {/* Info */}
 
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 my-8 mt-6">

  {/* Best Time */}
  <div
    className="
      bg-slate-800/60
      backdrop-blur-xl
      border border-slate-700
      rounded-2xl
      p-6
      min-h-[140px]
      flex flex-col
      justify-center
      text-center
      transition-all
      duration-300
    "
  >
    <h3 className="text-orange-400 text-lg font-semibold uppercase tracking-wider mb-3">
      Best Time
    </h3>
    <div className="w-10 h-1 bg-orange-500 rounded-full mx-auto mb-3"></div>
    <p className="text-white text-base font-medium">
      {place.bestTimeToVisit}
    </p>
  </div>

  {/* Location */}
  <div
    className="
      bg-slate-800/60
      backdrop-blur-xl
      border border-slate-700
      rounded-2xl
      p-6
      min-h-[140px]
      flex flex-col
      justify-center
      text-center
      duration-300
    "
  >
    <h3 className="text-orange-400 text-lg font-semibold uppercase tracking-wider mb-3">
      Location
    </h3>
    <div className="w-10 h-1 bg-orange-500 rounded-full mx-auto mb-3"></div>
    <p className="text-white text-base font-medium">
      {place.location}
    </p>
  </div>

  {/* Entry Fee */}
  <div
    className="
      bg-slate-800/60
      backdrop-blur-xl
      border border-slate-700
      rounded-2xl
      p-6
      min-h-[140px]
      flex flex-col
      justify-center
      text-center
      transition-all
      duration-300
    "
  >
    <h3 className="text-orange-400 text-lg font-semibold uppercase tracking-wider mb-3">
      Entry Fee
    </h3>
    <div className="w-10 h-1 bg-orange-500 rounded-full mx-auto mb-3"></div>
    <p className="text-white text-base font-medium">
      {place.entryFee}
    </p>
  </div>

  {/* Timings */}
  <div
    className="
      bg-slate-800/60
      backdrop-blur-xl
      border border-slate-700
      rounded-2xl
      p-6
      min-h-[140px]
      flex flex-col
      justify-center
      text-center
      transition-all
      duration-300
    "
  >
    <h3 className="text-orange-400 text-lg font-semibold uppercase tracking-wider mb-3">
      Timings
    </h3>
    <div className="w-10 h-1 bg-orange-500 rounded-full mx-auto mb-3"></div>
    <p className="text-white text-base font-medium">
      {place.timings}
    </p>
  </div>

</div>

        {/* GALLERY */}
<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 my-8 mt-6"> </div>

        <h2 className="text-4xl font-bold text-center mb-6">
  Photo Gallery
</h2>
<div className="w-58 h-1 bg-orange-500 rounded-full mx-auto mb-3"></div>
        <div className="flex gap-6 overflow-x-auto custom-scrollbar pb-6 mb-10 mt-6">

          
  {place.images?.map((img, index) => (
    <div
      key={index}
      className="relative group flex-shrink-0 mt-6"
    >
      
      <img
        src={img}
        alt=""
        onClick={() => setSelectedImage(img)}
        className="
        w-[420px]
        h-[260px]
        object-cover
        rounded-3xl
        cursor-pointer
        transition-all
        duration-700
        hover:-translate-y-3
        group-hover:scale-110
        hover:shadow-[0_20px_40px_rgba(249,115,22,0.35)]
        "
      />

      <div
  key={index}
  onClick={() => setSelectedImage(img)}
  className="relative group flex-shrink-0 cursor-pointer"
>
        <span 
  className="
  absolute
  bottom-6
  left-1/2
  -translate-x-1/2
  bg-black/60
  backdrop-blur-xl
  border
  border-white/20
  px-5
  py-2
  rounded-full
  flex
  items-center
  gap-2
  text-white
  font-medium
  shadow-lg
  transition-all
  duration-300
  group-hover:scale-110
  group-hover:bg-orange-500
  "
>
  <FiEye size={18} />
  View Photo
</span>


      </div>
    </div>
  ))}
</div>

        {/* DESCRIPTION */}

       <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-10 mb-8">

  <span className="text-orange-500 text-sm uppercase tracking-[4px]">
    Overview
  </span>

  <h2 className="text-4xl font-bold mt-2 mb-6">
    About {place.placeName}
  </h2>

  <div className="border-l-4 border-orange-500 pl-6">
  <p>{place.description}</p>
</div>

</div>

        {/* HISTORY */}

       <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-10 mb-8">

  <span className="text-orange-500 text-sm uppercase tracking-[4px]">
    Heritage
  </span>

  <h2 className="text-4xl font-bold mt-2 mb-6">
    Historical Significance
  </h2>

  <div className="border-l-4 border-orange-500 pl-6">
  <p>{place.history}</p>
</div>


</div>
        {/* NEARBY */}

        <div className="bg-slate-900 rounded-3xl p-8">

          <h2 className="text-4xl font-bold text-orange-500 mb-2">
            Nearby Attractions
          </h2>

          <p className="text-slate-400 mb-8">
            Explore famous places around {place.placeName}
          </p>

          <div className="grid md:grid-cols-2 gap-6">

            {place.nearbyAttractions?.map((attraction, index) => (

              <div
  key={index}
  onClick={() => setSelectedAttraction(attraction)}
  className="
  relative
  group
  bg-slate-800
  rounded-3xl
  overflow-hidden
  border
  border-slate-700
  hover:-translate-y-2
  hover:border-orange-500/50
  hover:shadow-lg
  hover:shadow-orange-500/10
  cursor-pointer
  "
>
                {attraction.image && (
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition duration-700"
                  />
                )}
                <div className="md:hidden absolute top-3 right-4 z-50">
  <div className="
    flex
    items-center
    justify-center
    w-9
    h-9
    rounded-full
    bg-orange-500/1
    border
    border-orange-400/40
    backdrop-blur-md
  ">
    <span className="text-orange-400 text-lg animate-pulse">
      →
    </span>
  </div>
</div>
                <div className="p-6">

                  <h3 className="text-2xl font-bold">
                    {attraction.name}
                  </h3>

                  <p className="text-slate-300 mt-3">
                    {attraction.description}
                  </p>

                 <div className="flex gap-2 flex-wrap mt-4">

  <span className="bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-sm">
    {attraction.famousFor}
  </span>

  <span className="bg-slate-700 px-3 py-1 rounded-full text-sm">
    {attraction.bestTime}
  </span>

</div>
                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* IMAGE MODAL */}

      {selectedImage && (

        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >

         <button
  className="
  absolute
  top-5
  right-5
  w-12
  h-12
  rounded-full
  bg-slate-800
  hover:bg-red-500
  flex
  items-center
  justify-center
  transition-all
  "
>
  <FiX size={22} />
</button>

          <img
            src={selectedImage}
            alt=""
            className="max-w-[90%] max-h-[90%] rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          />

        </div>
      )}

      {/* ATTRACTION MODAL */}

      {selectedAttraction && (

        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedAttraction(null)}
        >

         <div
  className="relative bg-slate-900 rounded-3xl overflow-hidden max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
           <button
  onClick={() => setSelectedAttraction(null)}
  className="
    absolute top-4 right-4
    w-10 h-10
    rounded-full
    bg-black/30
    backdrop-blur-md
    border border-white/10
    text-white
    flex items-center justify-center
    hover:bg-red-500/80
    transition-all duration-300
  "
>
  <span className="text-xl font-semibold">×</span>
</button>
            {selectedAttraction.image && (
              <img
                src={selectedAttraction.image}
                alt=""
                className="w-full h-[400px] object-cover"
              />
            )}

            <div className="p-8">

              <h2 className="text-4xl font-bold text-orange-500">
                {selectedAttraction.name}
              </h2>

              <p className="mt-5 text-slate-300 leading-8">
                {selectedAttraction.description}
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-6">

  <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4 flex items-center gap-3">
    <div className="text-red-500 w-9 h-7">
      <MapPin
  className="text-red-500 w-10 h-7"
/>
    </div>

    <div>
      <p className="text-xs uppercase text-slate-400">
        Famous For
      </p>

      <p className="font-semibold text-white">
        {selectedAttraction.famousFor}
      </p>
    </div>
  </div>

  <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4 flex items-center gap-3">
    <div className="text-blue-400 w-9 h-7">
      <CalendarDays
  className="text-blue-400 w-10 h-7"
/>
    </div>

    <div>
      <p className="text-xs uppercase text-slate-400">
        Best Time
      </p>

      <p className="font-semibold text-white">
        {selectedAttraction.bestTime}
      </p>
    </div>
  </div>

</div>

            <a
  href={selectedAttraction.maps}
  target="_blank"
  rel="noreferrer"
  className="
  mt-8
  inline-flex
  items-center
  gap-3
  px-6
  py-3
  rounded-2xl
  bg-gradient-to-r
  from-orange-500
  to-orange-600
  hover:scale-105
  transition-all
  duration-300
  font-semibold
  shadow-lg
  shadow-orange-500/20
  "
>
  <FiNavigation />
  Open In Google Maps
</a>

            </div>

          </div>

        </div>
      )}
{/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 text-center py-8">
        © 2026 TravelBharat | Explore India State by State
      </footer>
    </div>
  );
}