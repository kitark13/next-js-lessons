"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuthStore } from "@/store/auth";
import { login } from "@/services/auth";
import type { ApiError } from "@/types/api";

function Login() {
  const setUser = useAuthStore((state) => state.setUser);
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setUser(data);
      router.push("/profile");
    },
    onError: (error) => {
      setError(
        (error as ApiError).response?.data?.error ?? (error as ApiError).message
      );
    },
  });
  const handleSubmit = (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    mutate({ email, password });
  };

  return (
    <form action={handleSubmit}>
      <p>{error}</p>
      <div>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
      </div>
      <div>
        <button type="submit" disabled={isPending}>
          Log in
        </button>
      </div>
    </form>
  );
}

export default Login;
