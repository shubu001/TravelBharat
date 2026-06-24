import { useState } from "react";
import { signInWithEmailAndPassword, sendPasswordResetEmail, } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
  LogIn,
} from "lucide-react";

import logo from "../assets/symbol.png";
import loginBg from "../assets/loginBg.PNG"

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      navigate("/admin");
    } catch (error) {
      alert("Invalid Email or Password");
      console.log(error);
    }
  };
  const handleForgotPassword = async () => {
  if (!email) {
    alert("Please enter your email first");
    return;
  }

  try {
    await sendPasswordResetEmail(auth, email);

    alert(
      "Password reset link sent to your email 📩"
    );
  } catch (error) {
    console.log(error);

    alert(
      "Failed to send reset email"
    );
  }
};
console.log(loginBg);

  return (
    <div className="min-h-screen relative overflow-hidden">

      {/* Background */}
      <div
  className="absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage: `url(${loginBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
></div>
<div className="absolute inset-0 bg-black/60"></div>
     
      {/* Login Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-10">

        <div
          className="
          w-full
          max-w-140
          bg-[#080808]/90
          
          border
          border-orange-500/40
          rounded-[28px]
          p-6
          shadow-[0_0_60px_rgba(249,115,22,0.]
        "
        >
          {/* Logo */}
          <div className="text-center">

            <img
              src={logo}
              alt="TravelBharat"
              className="h-32 mx-auto"
            />

            <h1 className="text-4xl font-bold text-white">
              Welcome back!
            </h1>

            <p className="text-semi-bold-300 tracking-[1px] mt-2">
              Please login to manage 

            <span className="text-orange-500">
                 {" "}TravelBharat
              </span>
              <span className="text-slate-300 tracking-[1px] mt-2">
              {" "}content.
            </span>
            </p>

          </div>
          {/* Email */}
          <div className="relative mt-10">

            <Mail
              size={22}
              className="absolute left-5 top-5 text-slate-400"
            />

            <input
              type="email"
              placeholder="admin@travelbharat.com"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="
              w-full
              bg-[#080808]
              border
              border-slate-600
              focus:border-orange-500
              rounded-2xl
              py-5
              pl-14
              pr-4
              outline-none
              text-white
            "
            />

          </div>

          {/* Password */}
          <div className="relative mt-5">

  <Lock
    size={22}
    className="absolute left-5 top-5 text-slate-400"
  />

  <button
    type="button"
    onClick={() =>
      setShowPassword(!showPassword)
    }
    className="absolute right-5 top-5 text-slate-400"
  >
    {showPassword ? (
      <EyeOff size={22} />
    ) : (
      <Eye size={22} />
    )}
  </button>

  <input
    type={showPassword ? "text" : "password"}
    placeholder="Enter your password"
    value={password}
    onChange={(e) =>
      setPassword(e.target.value)
    }
    className="
      w-full
      bg-[#080808]
      border
      border-slate-600
      focus:border-orange-500
      rounded-2xl
      py-5
      pl-14
      pr-14
      outline-none
      text-white
    "
  />

</div>

        
          <div className="flex justify-between items-center mt-5 mb-8">

            

          </div>
          {/* Remember */}
          
          <div className="flex justify-between items-center mt-5 mb-8">

            <label className="flex items-center gap-2 text-slate-300">

              <input
                type="checkbox"
                className="accent-orange-500"
              />

              Remember me

            </label>

           <button
  type="button"
  onClick={handleForgotPassword}
  className="text-orange-500 hover:text-orange-400 transition"
>
  Forgot Password?
</button>
          </div>

          {/* Login Button */}

          <button
            onClick={handleLogin}
            className="
            w-full
            bg-orange-500
            hover:bg-orange-600
            py-5
            rounded-2xl
            text-xl
            font-bold
            flex
            items-center
            justify-center
            gap-3
            transition-all
            duration-300
            
          "
          >
            <LogIn size={24} />
            Login
          </button>

          {/* Divider */}
          <div className="h-px bg-slate-700 my-8" />

          {/* Footer */}
          <div className="text-center">

            <p className="flex items-center justify-center gap-2 text-slate-300">

              <ShieldCheck
                size={18}
                className="text-orange-500"
              />

              Secure Admin Access

            </p>

            <p className="text-slate-500 text-sm mt-3">
              © 2026 TravelBharat. All Rights Reserved.
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}