"use client";

import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth";
import { register } from "@/services/auth";
import type { ApiError } from "@/types/api";

function Registration() {
  const setUser = useAuthStore((state) => state.setUser);
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const { mutate, isPending } = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      setUser(data);
      router.push("/profile");
    },
    onError: (error) => {
      console.log(error);
      setError(
        (error as ApiError).response?.data?.error ?? (error as ApiError).message
      );
    },
  });

  const handleSubmit = (formData: FormData) => {
    const userName = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    mutate({ userName, email, password });
  };

  return (
    <form action={handleSubmit}>
      <p>{error}</p>
      <div>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
      </div>
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
          Sign up
        </button>
      </div>
    </form>
  );
}

export default Registration;
