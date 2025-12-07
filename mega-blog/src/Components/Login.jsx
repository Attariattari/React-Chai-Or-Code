import React, { useState } from "react";
import { login as authLogin } from "../Store/AuthSlice";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Logo from "./Logo";
import Input from "./Inputs";
import Button from "./Button";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // 🚀 prevent multiple requests

  const login = async (data) => {
    if (loading) return;
    setLoading(true);
    setError("");

    try {
      const session = await authService.login(data.email, data.password);

      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(authLogin({ UserData: userData }));
          navigate("/");
        }
      }
    } catch (err) {
      setError(err.message || "Invalid credentials");
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
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don't have an account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary hover:underline"
          >
            Sign Up
          </Link>
        </p>

        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit(login)} className="mt-6 space-y-5">
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
            {loading ? "Log in..." : "Login"}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
