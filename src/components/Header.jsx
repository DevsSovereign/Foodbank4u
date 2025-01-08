import { useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="flex items-center justify-between py-4 md:px-14 px-5 relative z-30">
      <span className="flex items-center gap-2">
        <img
          src="/assets/foodbank-logo.png"
          className="sm:w-auto w-10"
          alt="foodbank logo"
        />
        <p className="font-bold text-secondary text-xl">FOODBANK</p>
      </span>
      <button type="button" onClick={() => setShowMenu(true)}>
        <RxHamburgerMenu className="w-7 h-7 sm:hidden" />
      </button>
      <ul
        className={`gap-4 sm:flex ${
          showMenu
            ? "bg-secondary flex-col p-5 pb-10 flex text-white absolute z-30 top-0 right-0 sm:w-1/2 w-full md:hidden"
            : "hidden items-center "
        }`}
      >
        {showMenu && (
          <button type="button" onClick={() => setShowMenu(false)}>
            <RiCloseLargeFill className="w-7 h-7 sm:hidden" />
          </button>
        )}
        <li className="font-mplus">
          <Link to={""}>Our Process</Link>
        </li>
        <li className="font-mplus">
          <Link to={""}>FAQs</Link>
        </li>
        <li className="font-mplus">
          <Link to={""}>Partner With Us</Link>
        </li>
        <li className="md:ml-8 mx-auto">
          <button
            type="button"
            className={`border-2 font-mplus py-2 rounded-full md:px-10 ${
              showMenu ? "px-10" : "border-secondary text-secondary px-4"
            }`}
          >
            Get Started
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
