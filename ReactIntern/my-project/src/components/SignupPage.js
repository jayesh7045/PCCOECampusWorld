import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
const SignupPage = () => {
  const [fullName, setFullName] = useState("");
  const [favFood, setFavFood] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    // Implement your signup logic here
    console.log("Signup clicked");
    console.log("Full Name:", fullName);
    console.log("Favorite Food:", favFood);
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
  };

  return (
    <div className="container mx-auto bg-blue-200">
      
      <Header></Header>
       
      <h2 className="text-3xl font-semibold mb-4 flex items-center justify-center mt-4">SignUp</h2>
      <div className="max-w-md mx-auto my-auto py-4">
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            className="w-full border-2 border-gray-300 px-3 py-2 rounded-md"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium mb-1">Favorite Food</label>
          <input
            type="text"
            className="w-full border-2 border-gray-300 px-3 py-2 rounded-md"
            value={favFood}
            onChange={(e) => setFavFood(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium mb-1">Username</label>
          <input
            type="text"
            className="w-full border-2 border-gray-300 px-3 py-2 rounded-md"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full border-2 border-gray-300 px-3 py-2 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            className="w-full border-2 border-gray-300 px-3 py-2 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-600 text-sm font-medium mb-1">Confirm Password</label>
          <input
            type="password"
            className="w-full border-2 border-gray-300 px-3 py-2 rounded-md"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button
          className="w-full bg-blue-500 text-white py-2 rounded-md"
          onClick={handleSignup}
        >
          SignUp
        </button>
        <span>Already a User ?</span>
        <a href = "/Loginn" className="mb-16">Login</a>
      </div>
      <Footer/>
    </div>
  );
};

export default SignupPage;
