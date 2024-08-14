import { NavLink } from "react-router-dom";

const LogRegNav = ({ name }) => {
  return (
    <button>
      {name === "Login" ? (
        <NavLink to="/register" className="flex items-center ">
          <p className="text-gray-600 mr-2 ml-1">Don't have an account? </p>
          <p className="text-green-700">Sign Up now</p>
        </NavLink>
      ) : (
        <NavLink to="/Login" className="flex items-center">
          <p className="font-heading text-m text-green-700 ml-3">Login</p>
        </NavLink>
      )}
    </button>
  );
};

export default LogRegNav;
