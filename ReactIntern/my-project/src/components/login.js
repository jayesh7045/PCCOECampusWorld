import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Implement your login logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div>
    
      <Header></Header>
       
      <div className="container mx-auto mt-8 flex flex-col items-center bg-blue-100 h-81">
        <h2 className="text-3xl font-semibold mb-6 mt-8">Login</h2>
        <div className="max-w-md">
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-1">
              Username
            </label>
            <input
              type="text"
              className="w-full border-2 border-gray-300 rounded-md"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full border-2 border-gray-300 px-3 py-2 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button
          className="w-1/6 px-2 bg-blue-500 text-white py-2 rounded-md"
          onClick={handleLogin}
        >
          Login
        </button>
        <p>No Account ? Please Click on Signup</p>
        <a href="/signup">SignUp</a>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
