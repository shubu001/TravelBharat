import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore";

import { db } from "../../firebase";

export default function GalleryPage() {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [gallery, setGallery] = useState([]);

  const fetchGallery = async () => {
    const snapshot = await getDocs(
      collection(db, "gallery")
    );

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setGallery(data);
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  const handleAddImage = async () => {
    try {
      await addDoc(collection(db, "gallery"), {
        title,
        imageUrl,
        createdAt: new Date(),
      });

      alert("Image Added ✅");

      setTitle("");
      setImageUrl("");

      fetchGallery();
    } catch (error) {
      console.log(error);
      alert("Failed");
    }
  };

  return (
    <div className="flex-1 p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-5xl font-bold text-white mb-2">
            Gallery
          </h1>

          <p className="text-slate-400">
            Manage destination images.
          </p>
        </div>

        <button
          onClick={handleAddImage}
          className="bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-xl font-semibold transition"
        >
          + Add Image
        </button>
      </div>

      <div className="bg-[#131c2f] border border-slate-700 rounded-3xl p-6 mb-8">

        <h2 className="text-2xl font-bold text-white mb-6">
          Add New Image
        </h2>

        <input
          type="text"
          placeholder="Place Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-4 bg-[#0d1323] border border-slate-700 rounded-xl px-4 py-3 text-white"
        />

        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full bg-[#0d1323] border border-slate-700 rounded-xl px-4 py-3 text-white"
        />
      </div>

      <div className="bg-[#131c2f] border border-slate-700 rounded-3xl p-6">
        <h2 className="text-2xl font-bold text-white mb-6">
          Gallery Collection
        </h2>

        <div className="grid grid-cols-4 gap-6">
          {gallery.map((item) => (
            <div
              key={item.id}
              className="bg-[#0d1323] border border-slate-700 rounded-2xl overflow-hidden"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-3 text-white text-center">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}