import { Component } from "react";
import UserContext from "../utils/UserContext";
import Salad from "../assets/Images/about_salad.png";
import Pizza from "../assets/Images/about_pizza.png";
import Burger from "../assets/Images/about_burger.png";
import Vegan from "../assets/Images/about_vegan.png";
import Strawberry from "../assets/Images/about_strawberry.png";
import Watermelon from "../assets/Images/about_watermelon.png";
import Chicken from "../assets/Images/about_chicken.png";
import Korean from "../assets/Images/about_korean.png";
import Ramen from "../assets/Images/about_ramen.png";
import Noodles from "../assets/Images/about_vegNoodles.png";
import Boba from "../assets/Images/about_boba.png";
import Drink from "../assets/Images/about_drink.png";

class About extends Component {
  render() {
    return (
      <div>
        <div className="flex flex-col justify-around items-center gap-6 w-11/12 h-full mx-auto">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold md:font-extrabold text-center py-4">
              Discover the best food & <br></br>drinks in nearest Restaurant
            </h1>
            <p className="text-md md:text-2xl tracking-wide font-semibold p-6 text-center">
              The quality of our food and service is consistently top-notch,
              <br></br> and we always aim to leave our guests feeling satisfied
              and happy.
            </p>
            <a target="_blank" href="https://github.com/mhdamaan79">
              <button
                class="middle none center rounded-lg bg-orange-500 py-2 md:py-4 px-6 md:px-10 font-sans text-md sm:text-xl font-semibold sm:font-bold uppercase text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none m-4"
                data-ripple-light="true"
              >
                Know More About Us{" "}
                <i
                  className="fa-solid fa-user pl-2"
                  style={{ color: "#ffffff" }}
                ></i>
              </button>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-11/12">
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={Burger}
                  alt="Burger"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={Vegan}
                  alt="Vegan"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={Boba}
                  alt="Boba Drink"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={Pizza}
                  alt="Pizza"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={Noodles}
                  alt="Noodles"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={Drink}
                  alt="Drink"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={Strawberry}
                  alt="Strawberry Drink"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={Ramen}
                  alt="Ramen"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={Salad}
                  alt="Salad"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={Chicken}
                  alt="Chicken"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={Korean}
                  alt="Korean"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={Watermelon}
                  alt="Watermelon Drink"
                />
              </div>
            </div>
          </div>
        </div>

        {/* -- Testimonials Section -- */}
        <div class="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center py-5">
          <div class="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
            <div class="w-full max-w-6xl mx-auto">
              <div class="text-center max-w-xl mx-auto">
                <h1 class="text-6xl md:text-7xl font-bold mb-5 text-gray-600">
                  What people are<br></br> saying about us
                </h1>
                <h3 class="text-xl mb-5 font-light">
                  "Feeding Souls, Nourishing Hearts: Hungry Heart's Culinary
                  Art!"
                </h3>
                <div class="text-center mb-10">
                  <span class="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                  <span class="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                  <span class="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                  <span class="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                  <span class="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                </div>
              </div>
              <div class="-mx-3 md:flex items-start">
                <div class="px-3 md:w-1/3">
                  <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6 hover:shadow-zinc-100 hover:shadow-md hover:bg-lime-200 transition ease-in-out delay-50 hover:scale-105 duration-200">
                    <div class="w-full flex mb-4 items-center">
                      <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                        <img src="https://i.pravatar.cc/100?img=1" alt="" />
                      </div>
                      <div class="flex-grow pl-3">
                        <h6 class="font-bold text-sm uppercase text-gray-600">
                          Kenzie Edgar.
                        </h6>
                      </div>
                    </div>
                    <div class="w-full">
                      <p class="text-sm leading-tight">
                        <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                          "
                        </span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quos sunt ratione dolor exercitationem minima quas
                        itaque saepe quasi architecto vel! Accusantium, vero
                        sint recusandae cum tempora nemo commodi soluta
                        deleniti.
                        <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                          "
                        </span>
                      </p>
                    </div>
                  </div>
                  <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6 hover:shadow-zinc-100 hover:shadow-md hover:bg-yellow-200 transition ease-in-out delay-50 hover:scale-105 duration-200">
                    <div class="w-full flex mb-4 items-center">
                      <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                        <img src="https://i.pravatar.cc/100?img=2" alt="" />
                      </div>
                      <div class="flex-grow pl-3">
                        <h6 class="font-bold text-sm uppercase text-gray-600">
                          Stevie Tifft.
                        </h6>
                      </div>
                    </div>
                    <div class="w-full">
                      <p class="text-sm leading-tight">
                        <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                          "
                        </span>
                        Lorem ipsum, dolor sit amet, consectetur adipisicing
                        elit. Dolore quod necessitatibus, labore sapiente, est,
                        dignissimos ullam error ipsam sint quam tempora vel.
                        <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                          "
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="px-3 md:w-1/3">
                  <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6 hover:shadow-zinc-100 hover:shadow-md hover:bg-purple-200 transition ease-in-out delay-50 hover:scale-105 duration-200">
                    <div class="w-full flex mb-4 items-center">
                      <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                        <img src="https://i.pravatar.cc/100?img=3" alt="" />
                      </div>
                      <div class="flex-grow pl-3">
                        <h6 class="font-bold text-sm uppercase text-gray-600">
                          Tommie Ewart.
                        </h6>
                      </div>
                    </div>
                    <div class="w-full">
                      <p class="text-sm leading-tight">
                        <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                          "
                        </span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Vitae, obcaecati ullam excepturi dicta error
                        deleniti sequi.
                        <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                          "
                        </span>
                      </p>
                    </div>
                  </div>
                  <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6 hover:shadow-zinc-100 hover:shadow-md hover:bg-orange-200 transition ease-in-out delay-50 hover:scale-105 duration-200">
                    <div class="w-full flex mb-4 items-center">
                      <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                        <img src="https://i.pravatar.cc/100?img=4" alt="" />
                      </div>
                      <div class="flex-grow pl-3">
                        <h6 class="font-bold text-sm uppercase text-gray-600">
                          Charlie Howse.
                        </h6>
                      </div>
                    </div>
                    <div class="w-full">
                      <p class="text-sm leading-tight">
                        <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                          "
                        </span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Architecto inventore voluptatum nostrum atque, corrupti,
                        vitae esse id accusamus dignissimos neque reprehenderit
                        natus, hic sequi itaque dicta nisi voluptatem! Culpa,
                        iusto.
                        <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                          "
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="px-3 md:w-1/3">
                  <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6 hover:shadow-zinc-100 hover:shadow-md hover:bg-sky-200 transition ease-in-out delay-50 hover:scale-105 duration-200">
                    <div class="w-full flex mb-4 items-center">
                      <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                        <img src="https://i.pravatar.cc/100?img=5" alt="" />
                      </div>
                      <div class="flex-grow pl-3">
                        <h6 class="font-bold text-sm uppercase text-gray-600">
                          Nevada Herbertson.
                        </h6>
                      </div>
                    </div>
                    <div class="w-full">
                      <p class="text-sm leading-tight">
                        <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                          "
                        </span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nobis, voluptatem porro obcaecati dicta, quibusdam sunt
                        ipsum, laboriosam nostrum facere exercitationem pariatur
                        deserunt tempora molestiae assumenda nesciunt alias
                        eius? Illo, autem!
                        <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                          "
                        </span>
                      </p>
                    </div>
                  </div>
                  <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6 hover:shadow-zinc-100 hover:shadow-md hover:bg-pink-200 transition ease-in-out delay-50 hover:scale-105 duration-200">
                    <div class="w-full flex mb-4 items-center">
                      <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                        <img src="https://i.pravatar.cc/100?img=6" alt="" />
                      </div>
                      <div class="flex-grow pl-3">
                        <h6 class="font-bold text-sm uppercase text-gray-600">
                          Kris Stanton.
                        </h6>
                      </div>
                    </div>
                    <div class="w-full">
                      <p class="text-sm leading-tight">
                        <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                          "
                        </span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatem iusto, explicabo, cupiditate quas totam!
                        <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                          "
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
