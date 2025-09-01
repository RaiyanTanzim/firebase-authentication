import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router";
import app from "../firebase/firebase.config";
import { useAuth } from "../context/AuthContext";
import UserProfile from "./UserProfile";

export default function WelcomePage({}) {
  const nevigate = useNavigate();
  const auth = getAuth(app);
  const { currentUser } = useAuth();
  console.log(currentUser);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        nevigate("/login");
      })
      .catch((error) => {
        // An error happened.
        console.log(error.message);
      });
  };
  return (
    <div className="bg-gray-200 text-center p-4">
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome, {currentUser?.email}
        </h2>
        <p className="text-lg font-semibold text-indigo-900 mt-4">
          Successfully logged in.
        </p>
      </div>
      <UserProfile
        userName={currentUser?.displayName || "User"}
        email={currentUser?.email || "N/A"}
        picture={currentUser?.photoURL}
        emailVarified={currentUser?.emailVerified}
        userId={currentUser?.uid}
      />
      <div>
        <button
          onClick={handleSignout}
          className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 mt-8 font-semibold text-white"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
