import {
  LayoutDashboard,
  MapPinned,
  Image,
  Settings,
  Mountain,
} from "lucide-react";
import { useState } from "react";

export default function AdminSidebar(
    { activeTab,
        setActiveTab,
    }
) {
  return (
    <aside className="w-64 bg-[#111827] border-r border-slate-800 min-h-screen p-6">

      <div className="mb-10">
        <h1 className="text-3xl font-bold">
          <span className="text-white">Travel</span>
          <span className="text-orange-500">Bharat</span>
        </h1>

        <p className="text-slate-400 text-sm mt-1">
          Admin Panel
        </p>
      </div>

     <div className="space-y-3 mt-8">

  <button
    onClick={() => setActiveTab("dashboard")}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${
      activeTab === "dashboard"
        ? "bg-orange-500 text-white"
        : "bg-slate-800 hover:bg-slate-700"
    }`}
  >
    <LayoutDashboard size={18} />
    Dashboard
  </button>

  <button
    onClick={() => setActiveTab("states")}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${
      activeTab === "states"
        ? "bg-orange-500 text-white"
        : "bg-slate-800 hover:bg-slate-700"
    }`}
  >
    <MapPinned size={18} />
    States
  </button>

  <button
    onClick={() => setActiveTab("destinations")}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${
      activeTab === "destinations"
        ? "bg-orange-500 text-white"
        : "bg-slate-800 hover:bg-slate-700"
    }`}
  >
    <Mountain size={18} />
    Destinations
  </button>

  <button
    onClick={() => setActiveTab("gallery")}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${
      activeTab === "gallery"
        ? "bg-orange-500 text-white"
        : "bg-slate-800 hover:bg-slate-700"
    }`}
  >
    <Image size={18} />
    Gallery
  </button>

  <button
    onClick={() => setActiveTab("settings")}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${
      activeTab === "settings"
        ? "bg-orange-500 text-white"
        : "bg-slate-800 hover:bg-slate-700"
    }`}
  >
    <Settings size={18} />
    Settings
  </button>

</div>
    </aside>
  );
}