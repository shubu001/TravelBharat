import { db } from "../../firebase";
import { useEffect, useState } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";


export default function DestinationsPage() {
  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const [selectedState, setSelectedState] = useState("");
  const [showForm, setShowForm] = useState(false);

const [placeName, setPlaceName] = useState("");
const [category, setCategory] = useState("");
const [bestTime, setBestTime] = useState("");
const [location, setLocation] = useState("");
const [entryFee, setEntryFee] = useState("");
const [timings, setTimings] = useState("");
const [googleMaps, setGoogleMaps] = useState("");
const [heroImage, setHeroImage] = useState("");
const [overview, setOverview] = useState("");
const [historical, setHistorical] = useState("");
const [nearbyAttractions, setNearbyAttractions] = useState("");
const [places, setPlaces] = useState([]);

const handleSavePlace = async () => {
  try {
    await addDoc(collection(db, "destinations"), {
      state: selectedState,
      placeName,
      category,
      bestTime,
      location,
      entryFee,
      timings,
      googleMaps,
      heroImage,
      overview,
      historical,
      nearbyAttractions,
      createdAt: new Date(),
    });

    alert("Place Added Successfully ✅");

    setPlaceName("");
    setCategory("");
    setBestTime("");
    setLocation("");
    setEntryFee("");
    setTimings("");
    setGoogleMaps("");
    setHeroImage("");
    setOverview("");
    setHistorical("");
    setNearbyAttractions("");
  } catch (error) {
    console.log(error);
    alert("Error adding place ❌");
  }
};
const fetchPlaces = async () => {
  const querySnapshot = await getDocs(
    collection(db, "destinations")
  );

  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  console.log(data);

  setPlaces(data);
};

useEffect(() => {
  fetchPlaces();
}, []);

  return (
    <div className="flex-1 p-10 text-white">
      <h1 className="text-4xl font-bold mb-2">
        Destinations
      </h1>

      <p className="text-slate-400 mb-8">
        Select a state and add famous places
      </p>

      <div className="max-w-md">
        <select
          value={selectedState}
          onChange={(e) => {
            setSelectedState(e.target.value);
            setShowForm(false);
          }}
          className="
          w-full
          bg-[#131c2f]
          border
          border-slate-700
          rounded-xl
          px-4
          py-3
          text-white
          outline-none
          focus:border-orange-500
          "
        >
          <option value="">Select State</option>

          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      {selectedState && (
        <div
          className="
          mt-8
          max-w-5x1
          mx-auto
          bg-[#131c2f]
          rounded-3x1
          p-8
          border
          border-slate-700
          "
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400">
  Selected State:
  <span className="text-orange-400 font-semibold ml-2">
    {selectedState}
  </span>
</p>
            </div>

            <button
              onClick={() => setShowForm(!showForm)}
              className="
              bg-orange-500
              hover:bg-orange-600
              px-6
              py-3
              rounded-xl
              font-semibold
              transition
              "
            >
              + Add New Place
            </button>
          </div>

          {showForm && (
            <div
              className="
              mt-8
              "
            >
              <h3 className="text-3xl font-bold mb-2">
                Add New Famous Place
              </h3>

              <p className="text-slate-400 mb-8">
                Fill destination details
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 mt-6">

                <input
  value={placeName}
  onChange={(e) => setPlaceName(e.target.value)}
  placeholder="Place Name"
/>

                <input
  value={category}
  onChange={(e) => setCategory(e.target.value)}
  placeholder="Category"
/>

                <input
  value={bestTime}
  onChange={(e) => setBestTime(e.target.value)}
  placeholder="Best Time To Visit"
/>

                <input
  value={location}
  onChange={(e) => setLocation(e.target.value)}
  placeholder="Location"
/>

                <input
  value={entryFee}
  onChange={(e) => setEntryFee(e.target.value)}
  placeholder="Entry Fee"
/>

                <input
  value={timings}
  onChange={(e) => setTimings(e.target.value)}
  placeholder="Timings"
/>

                <input
  value={googleMaps}
  onChange={(e) => setGoogleMaps(e.target.value)}
  placeholder="Google Map Links"
/>

                <input
  value={heroImage}
  onChange={(e) => setHeroImage(e.target.value)}
  placeholder="Hero Image Url"
/>
</div>

              <div className="grid md:grid-cols-2 gap-4">

                <div>
                  <label className="block mb-2 text-slate-300">
                    Overview
                  </label>

                  <textarea
                  value={overview}
                  onChange={(e) => setOverview(e.target.value)}
                    placeholder="Enter overview..."
                    className="
                    w-full
                    h-40
                    bg-slate-900
                    border
                    border-slate-700
                    rounded-xl
                    px-4
                    py-3
                    focus:border-orange-500
                    outline-none
                    "
                  />
                </div>

                <div>
                  <label className="block mb-2 text-slate-300">
                    Historical Significance
                  </label>

                  <textarea
                  value={historical}
                  onChange={(e) => setHistorical(e.target.value)}
                  placeholder="Enter historical significance..."
                  className="
                    w-full
                    h-40
                    bg-slate-900
                    border
                    border-slate-700
                    rounded-xl
                    px-4
                    py-3
                    focus:border-orange-500
                    outline-none
                    "
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block mb-2 text-slate-300">
                  Nearby Attractions
                </label>

                <textarea
                value={nearbyAttractions}
                  onChange={(e) => setNearbyAttractions(e.target.value)}
                  placeholder="Comma separated values"
                  className="
                  w-full
                  h-28
                  bg-slate-900
                  border
                  border-slate-700
                  rounded-xl
                  px-4
                  py-3
                  focus:border-orange-500
                  outline-none
                  "
                />
              </div>

              <div className="mt-8 flex justify-end">
                <button onClick={handleSavePlace}
                  className="
                  bg-orange-500
                  hover:bg-orange-600
                  px-8
                  py-3
                  rounded-xl
                  font-semibold
                  shadow-lg
                  "
                >
                  Save Place
                </button>
              </div>
              <div className="mt-10">
  <h2 className="text-2xl font-bold mb-4">
    Saved Places
  </h2>

  {places.map((place) => (
    <div
      key={place.id}
      className="bg-slate-800 p-4 rounded-xl mb-3"
    >
      <h3 className="text-xl font-bold">
        {place.placeName}
      </h3>

      <p>{place.category}</p>

      <p className="text-slate-400">
        {place.location}
      </p>
    </div>
  ))}
</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}