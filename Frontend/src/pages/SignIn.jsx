import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SignIn = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const endpoint = isLogin
      ? "https://hotel-king.onrender.com/api/auth/login"
      : "https://hotel-king.onrender.com/api/auth/register";
    const payload = isLogin ? { email, password } : { name, email, password };

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Authentication failed");
      }

      // Save token and user info
      localStorage.setItem("token", data.token);
      localStorage.setItem(
        "user",
        JSON.stringify({ name: data.name, email: data.email, role: data.role }),
      );

      // Navigate to previous page or home
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <header className="bg-primary pt-[120px] text-center text-white relative h-[150px]">
        <Navbar />
      </header>

      <main className="bg-background py-[4rem] min-h-[70vh] flex items-center justify-center">
        <div className="container mx-auto px-4 max-w-[1000px]">
          <div className="bg-white rounded-[15px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col md:flex-row max-w-[900px] mx-auto min-h-[500px]">
            {/* Form Section */}
            <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
              <h2 className="font-primary text-3xl mb-6 text-primary text-center">
                {isLogin ? "Sign In" : "Create Account"}
              </h2>

              <div className="flex justify-center gap-4 mb-6 text-2xl text-secondary">
                <a href="#" className="hover:text-primary">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="hover:text-primary">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="hover:text-primary">
                  <i className="fab fa-github"></i>
                </a>
              </div>

              <p className="text-center text-textSecondary text-sm mb-6">
                {isLogin
                  ? "Login with Email & Password"
                  : "Register with E-mail"}
              </p>

              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 text-sm text-center">
                  {error}
                </div>
              )}

              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                {!isLogin && (
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="p-3 bg-[#f3f3f3] border-none rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                  />
                )}
                <input
                  type="email"
                  placeholder="Enter E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 bg-[#f3f3f3] border-none rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                />
                <input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 bg-[#f3f3f3] border-none rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                  required
                />

                {isLogin && (
                  <a
                    href="#"
                    className="text-sm text-textSecondary hover:text-secondary text-right"
                  >
                    Forgot Password?
                  </a>
                )}

                <button
                  type="submit"
                  className="bg-secondary text-white font-semibold py-3 rounded mt-2 hover:bg-primary transition-colors duration-300 uppercase"
                >
                  {isLogin ? "Sign In" : "Sign Up"}
                </button>
              </form>
            </div>

            {/* Toggle Panel Section */}
            <div className="w-full md:w-1/2 bg-[linear-gradient(135deg,rgba(26,26,46,0.9),rgba(191,161,74,0.9))] text-white p-10 flex flex-col justify-center items-center text-center">
              <h1 className="font-primary text-4xl mb-4 text-white">
                {isLogin ? "....Welcome...." : "Welcome To HOTELKING"}
              </h1>
              <p className="mb-8 text-lg opacity-90">
                {isLogin
                  ? "Register For Better Hotel Experience"
                  : "Sign in With ID & Password"}
              </p>
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="bg-transparent border-2 border-white text-white font-semibold py-3 px-10 rounded hover:bg-white hover:text-primary transition-colors duration-300 uppercase"
              >
                {isLogin ? "Sign Up" : "Sign In"}
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default SignIn;
