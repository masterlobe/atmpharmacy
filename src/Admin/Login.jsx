import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // already stored credentials
  const ADMIN_USERNAME = "admin";
  const ADMIN_PASSWORD = "admin123";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      sessionStorage.setItem("isAdminLoggedIn", "true");
      navigate("/adminPage"); 

    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm relative"
      >
        <h2 className="text-xl font-semibold mb-4 text-center">
          Admin Access Required
        </h2>
        <p className="text-sm text-gray-500 mb-4 text-center">
          Please log in to continue
        </p>

        {error && (
          <p className="text-red-500 text-sm mb-3 text-center">
            {error}
          </p>
        )}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
          required
          autoFocus
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-[#4F7D73] text-white py-2 rounded hover:bg-[#41685F]"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;