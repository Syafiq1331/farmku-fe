import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const Navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", { email, password }, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        }
      });

      // Menyimpan data token user ke localstorage
      const token = response.data.data[1].access_token;
      localStorage.setItem("token", token);

      const user = response.data.data[0];
      localStorage.setItem("user", JSON.stringify(user));

      // Setelah 1 jam token dan user akan di hapus secara otomatis
      setTimeout(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }, 3600000);


      if (response.status == 200) {
        Navigate("/");
      }

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-2xl px-4 py-6">
        <figure className="px-10 pt-10">
          <h1 className="text-4xl font-bold">Farm<span className="font-medium">ku</span></h1>
        </figure>
        <hr className="mb-4 w-12 mx-auto bg-sky-500 h-1" />

        {/* {
          email === "" || password === "" ? (
            <div className="toast toast-top toast-center">
              <div className="alert alert-success text-white">
                <span>Message sent successfully.</span>
              </div>
            </div>
          ) : null
        } */}

        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <div className="mb-4">
            <label className="block text-slate-800 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="appearance-none border rounded w-full py-2 px-3 text-slate-800 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className="block text-slate-800 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="appearance-none border rounded w-full py-2 px-3 text-slate-800 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-sky-500 hover:bg-sky-400 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </section>

  );
};

export default Login;
