import React from "react";
import { Link } from "react-router";

export default function UserProfile({
  userName,
  email,
  picture,
  emailVarified,
  userId,
}) {
  return (
    <div className="my-10 flex items-center justify-center">
      <div className="max-w-sm mx-auto shadow-md rounded-xl py-12 px-8 space-y-4  bg-gray-300">
        <h1 className="text-3xl font-bold">User Profile Section</h1>
        <h2 className="text-2xl font-semibold">Welcome {userName}</h2>
        <div className="w-24 h-24 rounded-full mx-auto shadow-md object-cover">
          {picture && <img src={picture} alt="photo url" />}
        </div>
        <div className="space-y-2">
          <p className="text-sm">Email: {email}</p>
          <p className="text-sm">
            Email Varified: {emailVarified ? "Yes" : "No"}
          </p>
          <p className="text-sm">User ID: {userId}</p>
        </div>

        <Link
          to="/update-profile"
          className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-xl"
        >
          Update Profile
        </Link>
      </div>
    </div>
  );
}
