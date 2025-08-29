import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const nevigate = useNavigate();

  const auth = getAuth(app);

  function handleLogin(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("login success", user);

        nevigate("/welcome");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError("Invalid Email or Password");
      });
  }
  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("google login successful", user);
      })
      .catch((error) => {
        console.log("Google login failed", error);
      });
  }
  return (
    <div className="flex items-center justify-center bg-gray-200 min-h-screen">
      <div className="shadow-lg rounded-lg p-8 w-full max-w-md bg-white space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 underline text-center">
          Sign In To Your Account
        </h2>

        {/* login form */}
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email:{" "}
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              className="py-2 px-4 border border-gray-200 w-full rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Password{" "}
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              placeholder="Enter Your password"
              className="py-2 px-4 border border-gray-200 w-full rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-300"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-lg shadow-md bg-blue-500 hover:bg-blue-600 text-white mt-2"
          >
            Log In
          </button>
          {error && (
            <p className="text-center italic text-sm text-red-500">{error}</p>
          )}
        </form>

        {/* social login */}
        <div className="text-center space-y-4">
          <p className="text-gray-600">Or login with</p>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handleGoogleLogin}
              className="flex items-center space-x-2 bg-red-400 px-4 py-2 rounded-lg text-white hover:bg-red-500"
            >
              <FaGoogle />
              <span>Google</span>
            </button>
            <button className="flex items-center space-x-2 bg-blue-400 px-4 py-2 rounded-lg text-white hover:bg-blue-500">
              <FaFacebook />
              <span>Facebook</span>
            </button>
            <button className="flex items-center space-x-2 bg-gray-700 px-4 py-2 rounded-lg text-white hover:bg-gray-800">
              <FaGithub />

              <span>Github</span>
            </button>
          </div>
        </div>

        {/* text */}
        <p className="text-gray-900 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
