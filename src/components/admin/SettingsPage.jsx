export default function SettingsPage() {
  return (
    <div className="flex-1 p-8">
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-white mb-2">
          Settings
        </h1>
        <p className="text-slate-400">
          Manage admin account settings.
        </p>
      </div>

      <div className="bg-[#131c2f] border border-slate-700 rounded-3xl p-8 max-w-3xl">
        <div className="space-y-5">

          <input
            placeholder="Admin Name"
            className="w-full bg-[#0b1120] border border-slate-700 rounded-xl px-4 py-4 outline-none text-white"
          />

          <input
            placeholder="Email"
            className="w-full bg-[#0b1120] border border-slate-700 rounded-xl px-4 py-4 outline-none text-white"
          />

          <input
            placeholder="New Password"
            type="password"
            className="w-full bg-[#0b1120] border border-slate-700 rounded-xl px-4 py-4 outline-none text-white"
          />

          <button
            className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-semibold transition"
          >
            Save Settings
          </button>

        </div>
      </div>
    </div>
  );
}