import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function UpdateProfile() {
  const { currentUser, updateUserProfile } = useAuth();

  const [newName, setNewName] = useState("");
  const [newImage, setNewImage] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleUpdatedProfile = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile({
        displayName: newName || currentUser.displayName,
        photoURL: newImage || currentUser.photoURL,
      });
      alert('Profile Updated')
      setSuccessMsg("Profile Updated Successfully");
      setErrorMsg("");
    } catch (error) {
      setErrorMsg("Profile Update Failed");
      setSuccessMsg("");
    }
  };
  return (
    <div className="p-8 bg-gray-200 space-y-2">
      <h1 className="text-2xl mb-2 font-bold">Update Your Profile</h1>
      <p>Current Display Name: {currentUser?.displayName || "Not set yet"}</p>
      <p>Current Photo:</p>
      <div>
        {currentUser?.photoURL ? (
          <img src={currentUser?.photoURL} alt="" />
        ) : (
          <span>No Image Found</span>
        )}
      </div>

      {/* Update profile fomr */}
      <form
        onSubmit={handleUpdatedProfile}
        className="shadow-lg p-4 max-w-sm space-y-2 mt-8"
      >
        <div>
          <label className="block">New display name</label>
          <input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            type="text"
            name="name"
            id="name"
            placeholder="Enter new name"
            className="border py-1 px-2 rounded"
          />
        </div>
        <div>
          <label className="block">New Photo URL</label>
          <input
            value={newImage}
            onChange={(e) => setNewImage(e.target.value)}
            type="text"
            name="photourl"
            id="photourl"
            placeholder="Enter new photoURL"
            className="border py-1 px-2 rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-white mt-4"
        >
          Confirm Changes
        </button>
        {successMsg && (
          <p className="text-sm italic text-green-500">{successMsg}</p>
        )}
        {errorMsg && <p className="text-sm italic text-red-500">{errorMsg}</p>}
      </form>
    </div>
  );
}
