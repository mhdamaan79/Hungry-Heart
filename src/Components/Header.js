import { useState } from "react";
import HungryHeartLogo from "../assets/Images/hungry_heart_logo.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";
import { HiMenu, HiOutlineArrowNarrowRight } from "react-icons/hi";

const Title = () => (
  <a href="/">
    <img
      className="h-16 md:h-24 lg:h-36 drop-shadow-lg scale-125 md:scale-150"
      src={HungryHeartLogo}
      alt="Hungry Heart Logo"
    />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for the mobile menu

  const isOnline = useOnline();

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between items-center shadow-xl bg-gradient-to-r from-lime-500 via-lime-300 to-lime-500 rounded-lg m-4 sticky top-0 z-50">
      <Title />
      <div className="nav font-semibold text-xs relative lg:text-lg md:text-md xl:text-2xl">
        {/* Hamburger menu */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 focus:outline-none"
          >
            <HiMenu className="h-6 w-6" />
          </button>
        </div>
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } max-sm:absolute max-sm:top-14 max-sm:w-40 max-sm:p-4 max-sm:bg-slate-100 max-sm:rounded-md sm:flex py-2 gap-1 md:gap-2 lg:gap-4 font-normal transition-all duration-150`}
          onClick={() => setIsMenuOpen(false)}
        >
          <Link to="/">
            <li className="px-2 border-b-2 border-yellow-50 border-opacity-0 hover:border-opacity-100 text-zinc-800 hover:text-white font-semibold hover:duration-200 cursor-pointer active">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="px-2 border-b-2 border-yellow-50 border-opacity-0 hover:border-opacity-100 text-zinc-800 hover:text-white font-semibold hover:duration-200 cursor-pointer active">
              About
            </li>
          </Link>
          <Link to="/contact">
            <li className="px-2 border-b-2 border-yellow-50 border-opacity-0 hover:border-opacity-100 text-zinc-800 hover:text-white font-semibold hover:duration-200 cursor-pointer active">
              Contact
            </li>
          </Link>
          <Link to="/instamart">
            <li className="px-2 border-b-2 border-yellow-50 border-opacity-0 hover:border-opacity-100 text-zinc-800 hover:text-white font-semibold hover:duration-200 cursor-pointer active">
              Instamart
            </li>
          </Link>
          <Link to="/help">
            <li className="px-2 border-b-2 border-yellow-50 border-opacity-0 hover:border-opacity-100 text-zinc-800 hover:text-white font-semibold hover:duration-200 cursor-pointer active">
              Help
            </li>
          </Link>
          <Link to="/cart">
            <li className="border-b-2 border-yellow-50 border-opacity-0 hover:border-opacity-100 text-zinc-800 hover:text-white font-semibold hover:duration-200 cursor-pointer active">
              <i className="fa-solid fa-cart-shopping px-2"></i>
              Cart - {cartItems.length} items
            </li>
          </Link>
        </ul>
      </div>

      <div className="flex max-sm:pl-2 sm:gap-3 md:gap-6 lg:gap-12 justify-start items-center">
        <a
          href="#_"
          className="whitespace-nowrap max-sm:mx-2 p-1 md:px-2.5 md:py-1.5 lg:px-5 lg:py-2.5 font-medium bg-white text-blue-500 rounded-lg text-sm cursor-default"
        >
          {isOnline ? "✅ " + "Online" : "🔴 " + "Offline"}
        </a>

        {!isLoggedIn ? (
          <Link to="./login">
            <button
              onClick={() => {
                setIsLoggedIn(true);
              }}
              className="text-xs sm:text-sm md:text-md lg:text-2xl font-semibold mr-2 sm:mr-4"
            >
              <a
                href="#_"
                className="rounded relative inline-flex group items-center justify-center p-1 sm:p-2 lg:py-2 lg:m-1 cursor-pointer border-b-4 border-l-2 active:border-green-600 active:shadow-none shadow-lg bg-gradient-to-tr from-lime-600 to-lime-500 border-lime-700 text-white"
              >
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-16 group-hover:h-16 sm:group-hover:w-20 sm:group-hover:h-20 md:group-hover:w-24 md:group-hover:h-24 lg:group-hover:w-32 lg:group-hover:h-32 opacity-10"></span>
                <span className="relative flex justify-center items-center gap-2">
                  Login <HiOutlineArrowNarrowRight />
                </span>
              </a>
            </button>
          </Link>
        ) : (
          <Link to="/">
            <button
              onClick={() => {
                setIsLoggedIn(false);
              }}
              className="text-xs sm:text-sm md:text-md lg:text-2xl font-semibold mr-2 sm:mr-4"
            >
              <a
                href="#_"
                className="rounded relative inline-flex group items-center justify-center p-1 sm:p-2 lg:px-3.5 lg:py-2 lg:m-1 cursor-pointer border-b-4 border-l-2 active:border-red-600 active:shadow-none shadow-lg bg-gradient-to-tr from-orange-600 to-orange-500 border-orange-700 text-white"
              >
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-16 group-hover:h-16 sm:group-hover:w-20 sm:group-hover:h-20 md:group-hover:w-24 md:group-hover:h-24 lg:group-hover:w-32 lg:group-hover:h-32 opacity-10"></span>
                <span className="relative flex justify-center items-center gap-2">
                  Logout <HiOutlineArrowNarrowRight />
                </span>
              </a>
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
