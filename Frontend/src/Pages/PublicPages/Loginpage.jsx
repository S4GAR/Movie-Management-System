import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Film, Mail, Lock, Eye, EyeOff } from "lucide-react";
const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "*This field is required";
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!password.trim()) {
      newErrors.password = "*This field is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    console.log("Login Successful");
  };

  return (
    <>
    {location.state?.message && (
        <p className="mt-6 text-slate-400">
          {location.state.message}
        </p>
      )}
      
    <section className="min-h-screen bg-[#192554] flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-md rounded-2xl bg-[#232f6d] p-8 shadow-2xl">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="h-16 w-16 rounded-full bg-blue-500 flex items-center justify-center">
            <Film className="text-white" size={30} />
          </div>

          <h1 className="mt-5 text-3xl font-bold text-white">Welcome Back</h1>

          <p className="mt-2 text-slate-300 text-center">
            Login to continue managing your movies.
          </p>

          {location.state?.message && (
            <div className="mt-4 rounded-lg bg-red-500/20 border border-red-500 p-3 text-center text-red-300">
              {location.state.message}
            </div>
          )}
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="mb-2 block text-white">Email</label>

          <div className="flex items-center rounded-lg bg-[#192554] border border-slate-600 px-4">
            <Mail className="text-slate-400" size={18} />

            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);

                setErrors((prev) => ({
                  ...prev,
                  email: "",
                }));
              }}
              placeholder="Enter your email"
              className="w-full bg-transparent py-4 px-3 text-white outline-none placeholder:text-slate-400"
            />
          </div>
          {errors.email && (
            <p className="mt-2 text-sm text-red-400">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="mb-2 block text-white">Password</label>

          <div className="flex items-center rounded-lg bg-[#192554] border border-slate-600 px-4">
            <Lock className="text-slate-400" size={18} />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full bg-transparent py-4 px-3 text-white outline-none placeholder:text-slate-400"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);

                setErrors((prev) => ({
                  ...prev,
                  password: "",
                }));
              }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-slate-400 hover:text-white"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.password && (
            <p className="mt-2 text-sm text-red-400">{errors.password}</p>
          )}
        </div>

        <div className="mt-5 flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-slate-300">
            <input type="checkbox" className="accent-blue-500" />
            Remember me
          </label>

          <button className="text-blue-300 hover:text-blue-200">
            Forgot password?
          </button>
        </div>

        <button
          onClick={handleLogin}
          className="mt-8 w-full rounded-lg bg-blue-500 py-4 font-semibold text-white transition hover:bg-blue-600"
        >
          Login
        </button>

        <p className="mt-6 text-center text-slate-300">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-blue-300 hover:text-blue-200"
          >
            Register
          </Link>
        </p>
      </div>
    </section>
    </>
  );
};

export default Loginpage;
