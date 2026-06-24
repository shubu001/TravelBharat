import { useState } from "react";

import AdminSidebar from "../components/admin/AdminSidebar";
import DashboardHome from "../components/admin/DashboardHome";
import StatesPage from "../components/admin/StatesPage";
import DestinationsPage from "../components/admin/DestinationsPage";
import GalleryPage from "../components/admin/GalleryPage";
import SettingsPage from "../components/admin/SettingsPage";

export default function Admin() {
    
  const [activeTab, setActiveTab] =
    useState("dashboard");

  return (
    <div className="min-h-screen bg-[#0B1120] text-white flex">

      <AdminSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {activeTab === "dashboard" && (
        <DashboardHome />
      )}

      {activeTab === "states" && (
        <StatesPage />
      )}
      {activeTab === "gallery" && (
  <GalleryPage />
)}
{activeTab === "settings" && (
  <SettingsPage />
)}
      {activeTab === "destinations" && (
  <DestinationsPage />
)}

    </div>
  );
}