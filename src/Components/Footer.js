import HungryHeartLogo from "../assets/Images/hungry_heart_logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-blueGray-200 pt-8 pb-6 bg-gradient-to-r from-lime-500 via-lime-300 to-lime-500 shadow-xl rounded-md m-4">
      <div className="container mx-auto px-2">
        <div className="flex flex-wrap text-left lg:text-left items-center">
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex justify-start items-center ">
              <img
                className="h-36 -ml-10 drop-shadow-lg scale-125"
                src={HungryHeartLogo}
                alt="Hungry Heart Logo"
              />
              <h4 className="text-3xl fonat-semibold text-blueGray-700">
                HUNGRY <span className="text-orange-600">HEART</span>
              </h4>
            </div>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Come taste the magic at Hungry Heart - where every bite is a love
              potion{" "}
              <i
                className="fa-solid fa-heart drop-shadow-md"
                style={{ color: "#ec1313" }}
              ></i>
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
              <a target="_blank" href="https://twitter.com/mhdamaan79">
                <button
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i
                    className="fa-brands fa-twitter"
                    style={{ color: "#5a96ff" }}
                  ></i>
                </button>
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/mhdamaan79/">
                <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i
                    className="fa-brands fa-linkedin"
                    style={{ color: "#337eff" }}
                  ></i>
                </button>
              </a>
              <a target="_blank" href="https://github.com/mhdamaan79">
                <button
                  className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fa-brands fa-github"></i>
                </button>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-slate-700 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <Link to="/about">
                    <li>
                      <a className="text-zinc-600 hover:text-zinc-800 font-semibold block pb-2 text-sm">
                        About Us
                      </a>
                    </li>
                  </Link>
                  <li>
                    <a
                      className="text-zinc-600 hover:text-zinc-800 font-semibold block pb-2 text-sm"
                      href=""
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-zinc-600 hover:text-zinc-800 font-semibold block pb-2 text-sm"
                      href=""
                    >
                      Create
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-zinc-600 hover:text-zinc-800 font-semibold block pb-2 text-sm"
                      href=""
                    >
                      Explore
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-zinc-600 hover:text-zinc-800 font-semibold block pb-2 text-sm"
                      href=""
                    >
                      Help Center
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-slate-700 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-zinc-600 hover:text-zinc-800 font-semibold block pb-2 text-sm"
                      href=""
                    >
                      MIT License
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-zinc-600 hover:text-zinc-800 font-semibold block pb-2 text-sm"
                      href=""
                    >
                      Partners
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-zinc-600 hover:text-zinc-800 font-semibold block pb-2 text-sm"
                      href=""
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-zinc-600 hover:text-zinc-800 font-semibold block pb-2 text-sm"
                      href=""
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <Link to="/contact">
                    <li>
                      <a className="text-zinc-600 hover:text-zinc-800 font-semibold block pb-2 text-sm">
                        Contact Us
                      </a>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300"></hr>
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2024</span>
              <a
                href="https://www.creative-tim.com/product/notus-js"
                className="text-blueGray-500 hover:text-gray-800"
                target="_blank"
              ></a>{" "}
              HUNGRY <span className="text-orange-600">HEART</span> by{" "}
              <a
                href="https://github.com/mhdamaan79"
                className="text-blueGray-500 hover:text-blueGray-800"
              >
                Mohd Amaan
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
