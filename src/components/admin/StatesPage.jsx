import { Plus } from "lucide-react";
import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { updateDoc } from "firebase/firestore";


export default function StatesPage() {
  const [stateName, setStateName] = useState("");
  const [capital, setCapital] = useState("");
  const [description, setDescription] = useState("");

  const [states, setStates] = useState([]);

  const [editingId, setEditingId] = useState(null);

  const fetchStates = async () => {
    try {
      const querySnapshot = await getDocs(
        collection(db, "states")
      );

      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setStates(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchStates();
  }, []);

  const handleAddState = async () => {
    try {
      await addDoc(collection(db, "states"), {
        name: stateName,
        capital: capital,
        description: description,
        createdAt: new Date(),
      });

      alert("State Added Successfully ✅");

      setStateName("");
      setCapital("");
      setDescription("");

      fetchStates();
    } catch (error) {
      console.error(error);
      alert("Error adding state");
    }
  };
  const handleDelete = async (id) => {
  try {
    await deleteDoc(doc(db, "states", id));

    fetchStates();

    alert("State Deleted ✅");
  } catch (error) {
    console.error(error);
    alert("Delete Failed");
  }
};
const handleEdit = (state) => {
  setEditingId(state.id);
  setStateName(state.name);
  setCapital(state.capital);
  setDescription(state.description);
};
const handleUpdate = async () => {
  try {
    await updateDoc(doc(db, "states", editingId), {
      name: stateName,
      capital: capital,
      description: description,
    });

    alert("State Updated ✅");

    setEditingId(null);
    setStateName("");
    setCapital("");
    setDescription("");

    fetchStates();
  } catch (error) {
    console.error(error);
    alert("Update Failed");
  }
};

  return (
    <div className="flex-1 p-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-white">
            States
          </h1>

          <p className="text-slate-400 mt-2">
            Manage all Indian states.
          </p>
        </div>

        <button
          onClick={editingId ? handleUpdate : handleAddState}
          className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition"
        >
          <Plus size={18} />
          {editingId ? "Update State" : "Add State"}
        </button>
      </div>

      {/* Table Container */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex flex-col gap-4">
          <input
            placeholder="State Name"
            value={stateName}
            onChange={(e) => setStateName(e.target.value)}
            className="bg-slate-800 p-3 rounded-xl text-white"
          />

          <input
            placeholder="Capital"
            value={capital}
            onChange={(e) => setCapital(e.target.value)}
            className="bg-slate-800 p-3 rounded-xl text-white"
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="bg-slate-800 p-3 rounded-xl text-white"
            rows={4}
          />
        </div>

        <table className="w-full">
          <thead className="bg-slate-800">
            <tr>
              <th className="text-left p-5">State</th>
              <th className="text-left p-5">Capital</th>
              <th className="text-left p-5">Description</th>
              <th className="text-left p-5">Action</th>
            </tr>
          </thead>

          <tbody>
            {states.map((state) => (
              <tr
                key={state.id}
                className="border-t border-slate-800"
              >
                <td className="p-5">{state.name}</td>

                <td className="p-5">{state.capital}</td>

                <td className="p-5">
                  {state.description}
                </td>

                <td className="p-5 flex gap-2">
                  <button
                  onClick={() => handleEdit(state)}
                  className="bg-blue-500 px-4 py-2 rounded-lg">
                    Edit
                  </button>

                  <button 
                  onClick={() => handleDelete(state.id)}
                  className="bg-red-500 px-4 py-2 rounded-lg">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}