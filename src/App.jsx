import { Routes, Route } from "react-router-dom";
import PlaceDetails from "./pages/PlaceDetails";
import Navbar from "./components/Navbar";

import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Home from "./pages/Home";
import States from "./pages/States";
import StateDetails from "./pages/StateDetails";
import Admin from "./pages/admin";
import UnionTerritories from "./pages/UnionTerritories";
import UTDetails from "./pages/UTDetails";
import UTPlaceDetails from "./pages/UTPlaceDetails";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import LoadingScreen from "./components/LoadingScreen";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-[100dvh] bg-slate-950 text-white overflow-x-hidden">
      <Navbar />

      <ScrollToTop />

      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />

        <Route path="/" element={<Home />} />
        <Route path="/states" element={<States />} />
        <Route path="/states/:stateName" element={<StateDetails />} />
        <Route path="/place/:placeName" element={<PlaceDetails />} />

        <Route
          path="/union-territories"
          element={<UnionTerritories />}
        />

        <Route
          path="/union-territories/:utName"
          element={<UTDetails />}
        />

        <Route
          path="/union-territories/:utName/:placeName"
          element={<UTPlaceDetails />}
        />
      </Routes>
    </div>
  );
}

export default App;