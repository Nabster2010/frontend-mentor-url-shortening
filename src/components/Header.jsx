import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import logo from "/images/logo.svg";
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="relative ">
      <div className="mx-4 my-6 flex md:gap-6 justify-between md:justify-start items-center md:mx-16">
        <a href="/">
          <img src={logo} alt="" className="max-w-none" />
        </a>
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          <HiMenu size={"2em"} className="text-Gray" />
        </button>
        <nav
          className={`
          ${
            mobileMenuOpen
              ? "translate-y-0 opacity-100 "
              : "-translate-y-[450px] opacity-0 "
          } absolute md:hidden top-20 inset-x-4 transition duration-700  bg-DarkViolet text-white px-4 py-6 rounded-lg`}
        >
          <NavLinks />
          <hr className="my-6" />
          <NavBtns />
        </nav>
        <nav className="hidden md:flex md:justify-between md:items-center md:flex-1 ">
          <NavLinks />
          <NavBtns />
        </nav>
      </div>
    </header>
  );
};

export default Header;

const NavLinks = () => {
  return (
    <ul className="text-center md:text-GrayishViolet md:font-medium md:text-xs md:text-start md:flex md:justify-center md:items-center md:space-y-0 md:gap-8 space-y-6 ">
      <li className="md:hover:text-VeryDarkViolet hover:text-Gray transition">
        <a href="/Features">Features</a>
      </li>
      <li className="md:hover:text-VeryDarkViolet hover:text-Gray transition">
        <a href="/Pricing">Pricing</a>
      </li>
      <li className="md:hover:text-VeryDarkViolet hover:text-Gray transition">
        <a href="/Resources">Resources</a>
      </li>
    </ul>
  );
};

const NavBtns = () => {
  return (
    <ul className="text-center  md:text-xs md:font-medium md:text-start md:flex md:justify-center md:items-center md:space-y-0 md:gap-8 space-y-6">
      <li className="md:text-GrayishViolet md:hover:text-VeryDarkViolet hover:text-Gray transition">
        <button>Login</button>
      </li>
      <li className="">
        <button className="w-full md:w-auto md:px-8 md:text-white bg-Cyan py-2 rounded-3xl hover:opacity-70">
          SignUp
        </button>
      </li>
    </ul>
  );
};
