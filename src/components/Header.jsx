import { useEffect, useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import GetStartedModal from "./Modal/GetStartedModal";

// eslint-disable-next-line react/prop-types
const Header = ({ customStyle, textColor, isOtherPage }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroMiddle = heroSection.offsetTop + heroSection.offsetHeight / 3;
        setIsFixed(window.scrollY > heroMiddle);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex items-center justify-between py-4 md:px-10 px-4 z-30 w-full 
    ${
      isFixed
        ? "fixed bg-white shadow-lg transition-all duration-1000 ease-in-out z-50"
        : customStyle
    }`}
    >
      <span
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img
          src="/assets/foodbank-logo.png"
          className="sm:w-auto w-10"
          alt="foodbank logo"
        />
        <p
          className={`${
            isFixed && isOtherPage ? "text-secondary" : textColor
          } font-bold text-secondary text-xl`}
        >
          FOODBANK
        </p>
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
          <Link to={"/become-a-rider"}>Our Process</Link>
        </li>
        <li
          className="font-mplus cursor-pointer"
          onClick={() => scrollToSection("faq")}
        >
          FAQs
        </li>
        <li className="font-mplus">
          <Link to={"/get-in-touch"}>Partner With Us</Link>
        </li>
        <li className="md:ml-8 mx-auto">
          <button
            type="button"
            className={`${
              isFixed && isOtherPage ? "text-secondary" : textColor
            } border-2 font-mplus py-2 rounded-full md:px-10 ${
              showMenu ? "px-10" : "border-secondary text-secondary px-4"
            }`}
            onClick={() => setShowModal((prev) => !prev)}
          >
            Get Started
          </button>
        </li>
      </ul>
      {showModal && <GetStartedModal closeModal={() => setShowModal(false)} />}
    </nav>
  );
};

export default Header;
