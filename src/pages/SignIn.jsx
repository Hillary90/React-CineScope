import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const SignIn = () => {
  const navigate = useNavigate();
  const { login, googleSignIn } = useAuth(); // added Firebase auth functions
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // handle normal email/password login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  // handle Google sign-in
  const handleGoogle = async () => {
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat px-4 md:px-8 py-5"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/background_banner.jpg')",
      }}
    >
      <div className="max-w-[450px] w-full bg-black bg-opacity-75 rounded px-8 py-14 mx-auto mt-8">
        <h1 className="text-3xl font-medium text-white mb-7">Sign In</h1>

        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full h-[50px] bg-[#333] text-white rounded px-5 text-base"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full h-[50px] bg-[#333] text-white rounded px-5 text-base"
          />

          <button
            type="submit"
            className="w-full bg-[#e50914] text-white py-2 rounded text-base hover:opacity-90 cursor-pointer"
          >
            Sign In
          </button>
        </form>

        {/*  Google Sign-In Button */}
        <button
          onClick={handleGoogle}
          className="w-full mt-4 bg-blue-600 text-white py-2 rounded text-base hover:bg-blue-700 transition"
        >
          Sign In with Google
        </button>

        <div className="mt-10 text-[#737373] text-sm">
          <p>
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-white font-medium cursor-pointer ml-2 hover:underline"
            >
              Sign Up Now
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
