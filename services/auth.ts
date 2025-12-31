import axios from "axios";
import {
  User,
  LoginPayload,
  RegisterPayload,
  CheckSessionResponse,
} from "@/types/auth";

export async function login(payload: LoginPayload): Promise<User> {
  const { data } = await axios.post<User>("/api/auth/login", payload, {
    headers: { "Content-Type": "application/json" },
  });
  return data;
}

export async function register(payload: RegisterPayload): Promise<User> {
  const { data } = await axios.post<User>("/api/auth/register", payload, {
    headers: { "Content-Type": "application/json" },
  });
  return data;
}

export async function checkSession(): Promise<boolean> {
  const { data } = await axios.get<CheckSessionResponse>("/api/auth/session");
  return data.success;
}

export async function getMe(): Promise<User> {
  const { data } = await axios.get<User>("/api/auth/me");
  return data;
}

export async function logout(): Promise<void> {
  await axios.post("/api/auth/logout");
}
