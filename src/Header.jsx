import { Card } from "./Profile";
import { useState } from "react";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full py-4 bg-[#4877fb] flex justify-center">
      <div className="lg:w-[70%] w-[90%] max-w-[1920px]">
        <Nav />
      </div>
    </header>
  );
};

const Nav = () => {
  return (
    <nav className="flex justify-between items-center">
      <p className="text-white font-bold cursor-pointer text-[24px]">
        Framework
      </p>
      <Menu className="lg:hidden" color="white" size={35} />
      <NavRight />
    </nav>
  );
};

const NavRight = () => {
  const List = ["Home", "Dropdown", "Services", "About", "Contact Us"];

  return (
    <ul className="lg:flex hidden gap-8 items-center">
      {List.map((item, index) => (
        <li
          style={{
            color: index === 0 ? "white" : "",
          }}
          className="text-[#ffffffb3] hover:text-white cursor-pointer duration-200 text-[14px]"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export { Header };
