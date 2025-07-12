import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#283618] text-white ">
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
        <div className="logo font-bold text-white text-2xl">
          <span className="text-[#BC6C25]"> &lt;</span>
          <span>Pass</span>
          <span className="text-[#BC6C25]">XC/&gt;</span>
        </div>

        {/* <ul>
          <li className="flex gap-4 ">
            <a className="hover:font-bold" href="/">Home</a>
            <a className="hover:font-bold" href="#">About</a>
            <a className="hover:font-bold" href="#">Contact</a>
          </li>
        </ul> */}

        <button className="text-white cursor-pointer bg-[#a4520b] hover:bg-[#ba651a] my-5 mx-2 rounded-full flex  justify-between items-center ring-white ring-1">
          <img
            className="invert  w-8 p-1"
            src="/icons/github.svg"
            alt="github logo"
          />
          <span className="font-bold px-2">GitHub</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
