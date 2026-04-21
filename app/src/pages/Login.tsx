import { useState } from "react";
import { useAuth } from "../features/auth/authContext";
import { loginApi } from "../features/auth/authService";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const user = await loginApi(email, password);
    login(user);

    navigate("/");
  }

  return (
    <form onSubmit={handleLogin} className="p-4 max-w-md">
      <input
        className="border p-2 w-full mb-2"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="border p-2 w-full mb-2"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="bg-blue-500 text-white p-2 w-full">
        Login
      </button>
    </form>
  );
}