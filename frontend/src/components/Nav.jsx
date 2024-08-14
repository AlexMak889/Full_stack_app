import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Nav = ({ isOpen }) => {
  const NavLinks = () => (
    <>
      <div>
        <button>
          <span className="material-symbols-outlined w-12 h-12">settings</span>
        </button>
        {isOpen ? <p>settings</p> : <></>}
      </div>
      <div>
        <button>
          <NavLink to="/logout" className="flex items-center">
            <span className="material-symbols-outlined w-12 h-12">logout</span>
          </NavLink>
        </button>
        {isOpen ? <p>logout</p> : <></>}
      </div>
    </>
  );

  return (
    <>
      <nav className="justify-end">
        <div className=" w-full justify-between md:flex">
          <Logo />
        </div>
      </nav>
      {isOpen ? (
        <div className="content-end">
          <NavLinks />
        </div>
      ) : (
        <div className="">
          <NavLinks className="cursor-not-allowed" />
        </div>
      )}
    </>
  );
};

export default Nav;
