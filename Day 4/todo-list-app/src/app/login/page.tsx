"use client";

import { useAppDispatch } from "@/redux/hooks";
import { login } from "@/redux/slices/authSlice";
import { Lock, Mail, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (email.trim() && password.trim()) {
      // store to redux
      dispatch(login(email));
      router.push("/");
      alert("Login");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-xl border border-gray-400 bg-white p-8 shadow-xl dark:border-gray-800 dark:bg-neutral-900">
        <div className="mb-6 text-center">
          <User className="mx-auto mb-4 dark:text-gray-200" size={48} />
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-gray-300">
            Sign In
          </h2>
          <p className="text-gray-500">Sign in to your Todo account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium dark:text-gray-300">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute top-3 left-3 text-gray-400" size={16} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-gray-300 py-2 pr-4 pl-10 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan email Anda"
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium dark:text-gray-300">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute top-3 left-3 text-gray-400" size={16} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md border border-gray-300 py-2 pr-4 pl-10 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan password Anda"
              />
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full cursor-pointer rounded-md border border-gray-400 bg-gray-800 px-6 py-2 font-medium text-white dark:border-gray-800 dark:bg-gray-900"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
