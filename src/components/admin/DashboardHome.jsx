import {
  MapPinned,
  Image,
  Eye,
  TrendingUp,
} from "lucide-react";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

export default function DashboardHome() {
const navigate = useNavigate();

const handleLogout = async () => {
  try {
    await signOut(auth); // Firebase logout

    localStorage.clear();
    sessionStorage.clear();

    navigate("/login", { replace: true });
  } catch (error) {
    console.error(error);
  }
};

const [stateCount, setStateCount] = useState(0);
const [destinationCount, setDestinationCount] = useState(0);
const [galleryCount, setGalleryCount] = useState(0);

useEffect(() => {
  const fetchCounts = async () => {
    try {
      const stateSnapshot = await getDocs(
        collection(db, "states")
      );
      setStateCount(stateSnapshot.size);

      const destinationSnapshot = await getDocs(
        collection(db, "destinations")
      );
      setDestinationCount(destinationSnapshot.size);

      const gallerySnapshot = await getDocs(
        collection(db, "gallery")
      );
      setGalleryCount(gallerySnapshot.size);

    } catch (error) {
      console.error(error);
    }
  };

  fetchCounts();
}, []);

  return (
    <div className="flex-1 p-12">

      {/* Header */}

     <div className="mb-8 flex items-center justify-between">

  <div>
    <h1 className="text-5xl font-bold text-white">
      {destinationCount}
    </h1>

    <p className="text-slate-400 mt-2">
      Manage TravelBharat tourism ecosystem.
    </p>
  </div>

  <button
    onClick={handleLogout}
    className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-5 py-3 rounded-xl font-semibold transition"
  >
    <LogOut size={18} />
    Logout
  </button>

</div>

      {/* Welcome Card */}

      <div className="bg-gradient-to-r from-orange-500/10 to-orange-400/5 border border-orange-500/20 rounded-3xl p-8 mb-8">

        <h2 className="text-3xl font-bold text-white">
          Welcome Back 👋
        </h2>

        <p className="text-slate-400 mt-2">
          Manage states, destinations, galleries and tourism content from one place.
        </p>

      </div>

      {/* Stats */}

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
          <MapPinned className="text-orange-500 mb-4" />
          <h2 className="text-4xl font-bold text-white">
            {stateCount}
          </h2>
          <p className="text-slate-400">
            States
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
          <MapPinned className="text-orange-500 mb-4" />
          <h2 className="text-4xl font-bold text-white">
            {destinationCount}
          </h2>
          <p className="text-slate-400">
            Destinations
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
          <Image className="text-orange-500 mb-4" />
          <h2 className="text-4xl font-bold text-white">
            {galleryCount}
          </h2>
          <p className="text-slate-400">
            gallery
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
          <Eye className="text-orange-500 mb-4" />
          <h2 className="text-4xl font-bold text-white">
            0
          </h2>
          <p className="text-slate-400">
            Visitors
          </p>
        </div>

      </div>

      {/* Activity */}

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 mt-8">

        <div className="flex items-center gap-3 mb-6">
          <TrendingUp className="text-orange-500" />
          <h2 className="text-2xl font-bold">
            Recent Activity
          </h2>
        </div>

        <div className="space-y-4">

          <div className="bg-slate-800 rounded-xl p-4">
            No recent activity.
          </div>

          <div className="bg-slate-800 rounded-xl p-4">
            Destination updates will appear here.
          </div>

          <div className="bg-slate-800 rounded-xl p-4">
            Gallery uploads will appear here.
          </div>

        </div>

      </div>

    </div>
  );
}