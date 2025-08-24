import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../CustomHooks/useAuth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });

  const { signInUser } = useAuth();
  const navigate = useNavigate();

  const validate = () => {
    const nextErrors = { email: "", password: "" };
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) nextErrors.email = "Email is required";
    else if (!emailPattern.test(email)) nextErrors.email = "Enter a valid email";

    if (!password) nextErrors.password = "Password is required";
    else if (password.length < 6) nextErrors.password = "Min 6 characters";

    setErrors(nextErrors);
    return !nextErrors.email && !nextErrors.password;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const userCredential = await signInUser(email, password);
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: `Welcome back ${userCredential.user.email}`,
        confirmButtonColor: "#4f46e5",
      });
      navigate("/"); // Redirect to home
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.message,
        confirmButtonColor: "#ef4444",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-yellow-300 mb-4">
          Welcome Back
        </h1>
        <p className="text-center text-gray-400 mb-6">
          Sign in to continue
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="text-gray-300 block mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className={`w-full px-4 py-3 rounded-xl border outline-none focus:ring-2 focus:ring-indigo-500 transition ${
                errors.email ? "border-red-500" : "border-gray-600"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <label className="text-gray-300 block mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className={`w-full px-4 py-3 rounded-xl border outline-none focus:ring-2 focus:ring-indigo-500 transition ${
                errors.password ? "border-red-500" : "border-gray-600"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white font-semibold transition"
          >
            {isSubmitting ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-400 text-sm">
          Don't have an account?{" "}
          <NavLink to="/Register" className="text-yellow-300 hover:underline">
            Sign up
          </NavLink>
        </p>
      </div>
    </div>
  );
}
