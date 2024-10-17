import { useState } from "react";

const QueryModal = ({ isOpen, onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState({
    title: "",
    description: ""
  });

  if (!isOpen) return null;

  const validate = () => {
    let isValid = true;
    const newErrors = { title: "", description: "" };

    // Title validation
    if (title.length < 6) {
      newErrors.title = "Title must be at least 6 characters long.";
      isValid = false;
    } else if (title.length > 15) {
      newErrors.title = "Title must be at most 15 characters long.";
      isValid = false;
    }

    // Description validation
    if (!description.trim()) {
      newErrors.description = "Description is required.";
      isValid = false;
    }

    setError(newErrors);
    return isValid;
  };

  const handleSave = () => {
    if (validate()) {
      onSave({ title, description });
      // Clear fields and close the modal
      setTitle("");
      setDescription("");
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-60 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-lg shadow-2xl max-w-sm w-full mx-4">
        <h2 className="text-xl font-semibold mb-4 text-center">Submit Your Query</h2>

        {/* Title input */}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className={`w-full p-3 border ${
            error.title ? "border-red-500" : "border-gray-300"
          } rounded mb-1 focus:outline-none focus:ring-2 focus:ring-zinc-400`}
        />
        {error.title && <p className="text-red-500 text-sm mb-4">{error.title}</p>}

        {/* Description input */}
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className={`w-full p-3 border ${
            error.description ? "border-red-500" : "border-gray-300"
          } rounded mb-1 focus:outline-none focus:ring-2 focus:ring-zinc-400`}
          rows="4"
        />
        {error.description && (
          <p className="text-red-500 text-sm mb-4">{error.description}</p>
        )}

        {/* Buttons */}
        <div className="flex justify-center space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-zinc-100 text-black rounded hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-black text-white rounded hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default QueryModal;
