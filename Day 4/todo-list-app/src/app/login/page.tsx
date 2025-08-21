import LoginForm from "@/components/LoginForm";
import { User } from "lucide-react";

const Login = () => {
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

        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
