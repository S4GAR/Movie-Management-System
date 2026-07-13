import { Link } from "react-router-dom";
import { useState } from "react";
import { User, Mail, Lock, Film } from "lucide-react";
import { Eye, EyeOff } from "lucide-react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const hasMinLength = password.length >= 8;
  const hasLetter = /[A-Za-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const isPasswordValid =
    hasMinLength && hasLetter && hasNumber && hasSpecialChar;

  const handleRegister = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "*This field is required";
    }

    if (!email.trim()) {
      newErrors.email = "*This field is required";
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!password.trim()) {
      newErrors.password = "*This field is required";
    }

    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = "*This field is required";
    }

    if (password && !isPasswordValid) {
      newErrors.password = "Password does not meet the requirements.";
    }

    if (password && confirmPassword && password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    // Backend API call goes here later
    console.log("Register Successful");
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#192554] px-6 py-10">
      <div className="w-full max-w-md rounded-2xl bg-[#232f6d] p-8 shadow-2xl">
        {/* Logo */}
        <div className="mb-8 flex flex-col items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500">
            <Film size={30} className="text-white" />
          </div>

          <h1 className="mt-5 text-3xl font-bold text-white">Create Account</h1>

          <p className="mt-2 text-center text-slate-300">
            Join Us and start managing your favorite movies.
          </p>
        </div>

        {/* Name */}
        <div className="mb-5">
          <label className="mb-2 block text-white">Full Name</label>

          <div
            className={`flex items-center rounded-lg border px-4 bg-[#192554] ${
              errors.name ? "border-red-500" : "border-slate-600"
            }`}
          >
            <User size={18} className="text-slate-400" />

            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);

                setErrors((prev) => ({
                  ...prev,
                  name: "",
                }));
              }}
              placeholder="Full Name"
              className="w-full bg-transparent px-3 py-4 text-white outline-none placeholder:text-slate-400"
            />
          </div>
        </div>
        {errors.name && (
          <p className="mt-2 text-sm text-red-400">{errors.name}</p>
        )}

        {/* Email */}
        <div className="mb-5">
          <label className="mb-2 block text-white">Email</label>

          <div
            className={`flex items-center rounded-lg border px-4 bg-[#192554] ${
              errors.email ? "border-red-500" : "border-slate-600"
            }`}
          >
            <Mail size={18} className="text-slate-400" />

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
              placeholder="example@email.com"
              className="w-full bg-transparent px-3 py-4 text-white outline-none placeholder:text-slate-400"
            />
          </div>
        </div>
        {errors.email && (
          <p className="mt-2 text-sm text-red-400">{errors.email}</p>
        )}

        {/* Password */}
        <div className="mb-5">
          <label className="mb-2 block text-white">Password</label>

          <div
            className={`flex items-center rounded-lg border px-4 bg-[#192554] ${
              errors.password ? "border-red-500" : "border-slate-600"
            }`}
          >
            <Lock size={18} className="text-slate-400" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);

                setErrors((prev) => ({
                  ...prev,
                  password: "",
                }));
              }}
              className="w-full bg-transparent px-3 py-4 text-white outline-none placeholder:text-slate-400"
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

          {password && !errors.password && !isPasswordValid && (
            <p className="mt-2 text-sm text-red-400">
              Password must be at least 8 characters long and include a letter,
              a number, and a special character.
            </p>
          )}
        </div>

        {/* Confirm Password */}

        <div>
          <label className="mb-2 block text-white">Confirm Password</label>

          <div
            className={`flex items-center rounded-lg border px-4 bg-[#192554] ${
              errors.confirmPassword ? "border-red-500" : "border-slate-600"
            }`}
          >
            <Lock size={18} className="text-slate-400" />

            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);

                setErrors((prev) => ({
                  ...prev,
                  confirmPassword: "",
                }));
              }}
              className="w-full bg-transparent px-3 py-4 text-white outline-none placeholder:text-slate-400"
            />

            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="text-slate-400 hover:text-white"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {confirmPassword && password !== confirmPassword && (
            <p className="mt-2 text-sm text-red-400">Passwords do not match</p>
          )}
        </div>
        {errors.confirmPassword && (
          <p className="mt-2 text-sm text-red-400">{errors.confirmPassword}</p>
        )}

        <button
          onClick={handleRegister}
          className="mt-8 w-full rounded-lg bg-blue-500 py-4 font-semibold text-white transition hover:bg-blue-600"
        >
          Register
        </button>

        <p className="mt-6 text-center text-slate-300">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-blue-300 hover:text-blue-200"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
