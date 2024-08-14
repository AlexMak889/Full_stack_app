import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import LoadingIndicator from "./LoadingIndicator";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";
import LogRegNav from "./LogRegNav";

function Form({ route, method }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const name = method === "login" ? "Login" : "Register";

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await api.post(route, { username, password });
      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        navigate("/");
      } else {
        navigate("/login");
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen bg-gradient-to-t from-green-300 to-green-800 pt-20 pb-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col mx-auto w-[600px] mt-[150px] bg-gray-300 py-10"
      >
        <div className="flex flex-col items-center gap-2.5 w-full mt-7">
          <div className="text-green-700 text-7xl font-bold mb-3">
            <h1 className="font-sans">{name}</h1>
          </div>
          <div className="w-15 h-1.5 bg-green-700 rounded-lg"></div>
        </div>

        <div className="mt-14 flex flex-col gap-6.5">
          <div className="flex items-center mx-auto w-[480px] h-[80px] bg-gray-200 rounded-lg">
            <img src={email_icon} alt="" className="mx-7.5 ml-2" />
            <input
              className="h-12.5 w-[400px] bg-transparent border-none outline-none text-gray-400 text-lg ml-2"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </div>
          <br />
          <div className="flex items-center mx-auto w-[480px] h-[80px] bg-gray-200 rounded-lg">
            <img src={password_icon} alt="" className="mx-7.5 ml-1" />
            <input
              className="h-12.5 w-[400px] bg-transparent border-none outline-none text-gray-400 text-lg ml-2"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
        </div>
        {loading && <LoadingIndicator />}
        <br />
        <div className="flex gap-7.5 mx-auto mt-15">
          <button
            className="transition ease-in-out delay-150 bg-green-400 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-200 rounded-full px-10 py-3 text-gray-500 font-heading text-xl hover:text-gray-700 hover:shadow-lg shadow-black-500/40"
            type="submit"
          >
            {name}
          </button>
        </div>

        <div className="flex items-center my-4">
          <div className="flex-grow border-t-4 border-green-600 rounded"></div>
          <span className="px-4 text-gray-500 font-heading text-xl">or</span>
          <div className="flex-grow border-t-4 border-green-600 rounded"></div>
        </div>

        <div>
          <LogRegNav name={name} />
        </div>
      </form>
    </div>
  );
}

export default Form;
