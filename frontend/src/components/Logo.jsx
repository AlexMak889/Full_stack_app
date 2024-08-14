import person_icon from "../assets/person.png";
import { useState } from "react";

const Logo = ({ isOpen }) => {
  return (
    <div className="text-xl font-semibold mb-4 mt-8">
      <img src={person_icon} alt="logo" className="rounded-full w-25 h-25" />
      {isOpen ? <p className="">name</p> : <p className="invisible">name</p>}
    </div>
  );
};

export default Logo;
