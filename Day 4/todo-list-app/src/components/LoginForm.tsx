"use client";

import { useAppDispatch } from "@/redux/hooks";
import { login } from "@/redux/slices/authSlice";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Lock, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

interface Payload {
  email: string;
  password: string;
}

const LoginForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleSubmit = (payload: Payload) => {
    // store to redux
    dispatch(login(payload.email));
    router.push("/");
    alert("Login");
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Format email tidak valid")
      .required("Email wajib diisi"),
    password: Yup.string()
      .min(6, "Password minimal 6 karakter")
      .max(12, "Maksimal 12 karakter")
      .required("password wajib diisi"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(value, action) => {
        handleSubmit(value);
        action.resetForm();
      }}
    >
      {() => (
        <Form className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium dark:text-gray-300">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute top-3 left-3 text-gray-400" size={16} />
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="Masukkan email anda"
                className="w-full rounded-md border border-gray-300 py-2 pr-4 pl-10 focus:border-transparent focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-xs text-red-500"
              />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium dark:text-gray-300">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute top-3 left-3 text-gray-400" size={16} />
              <Field
                id="password"
                name="password"
                type="password"
                placeholder="Masukkan password anda"
                className="w-full rounded-md border border-gray-300 py-2 pr-4 pl-10 focus:border-transparent focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-xs text-red-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer rounded-md border border-gray-400 bg-gray-800 px-6 py-2 font-medium text-white dark:border-gray-800 dark:bg-gray-900"
          >
            Sign In
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
