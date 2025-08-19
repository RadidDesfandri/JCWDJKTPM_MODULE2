"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout } from "@/redux/slices/authSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { isLoggedin, user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
    alert("Logout success");
  };

  return (
    <div className="border-b border-gray-400 dark:border-gray-800 dark:bg-neutral-900">
      <div className="mx-auto flex max-w-7xl justify-end px-5 py-5">
        {isLoggedin ? (
          <div className="flex items-center gap-3">
            <p className="capitalize">{user.email?.split("@")[0]}</p>
            <button
              onClick={handleLogout}
              className="cursor-pointer rounded-md border border-gray-400 bg-gray-800 px-6 py-2 font-medium text-white dark:border-gray-800 dark:bg-gray-900"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link href="/login">
            <button className="cursor-pointer rounded-md border border-gray-400 bg-gray-800 px-6 py-2 font-medium text-white dark:border-gray-800 dark:bg-gray-900">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
