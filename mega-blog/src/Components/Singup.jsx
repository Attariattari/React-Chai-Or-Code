import React, { useState } from "react";
import { login as authLogin } from "../Store/AuthSlice";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Logo from "./Logo";
import Input from "./Inputs";
import Button from "./Button";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // 🚀 prevent multiple requests

  const signup = async (data) => {
    if (loading) return; // ignore if already sending request
    setLoading(true);
    setError("");

    try {
      // Create account + auto-login
      const user = await authService.createAccount(
        data.email,
        data.password,
        data.name
      );

      if (user) {
        const currentUser = await authService.getCurrentUser();
        if (currentUser) {
          dispatch(authLogin({ UserData: currentUser }));
          navigate("/");
        }
      }
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl border border-black/10 p-6">
        <div className="mb-4 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Create a new account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary hover:underline"
          >
            Log In
          </Link>
        </p>

        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit(signup)} className="mt-6 space-y-5">
          <Input
            label="Full Name:"
            placeholder="Enter your name"
            {...register("name", { required: "Name is required" })}
          />
          <Input
            label="Email:"
            placeholder="Enter your email"
            type="email"
            {...register("email", {
              required: "Email is required",
              validate: (v) =>
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || "Invalid email",
            })}
          />
          <Input
            label="Password:"
            placeholder="Enter your password"
            type="password"
            {...register("password", { required: "Password is required" })}
          />
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Creating..." : "Sign up"}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
