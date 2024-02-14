import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import cat from "../assets/Images/body_nofindresult.png";
import { swiggy_api_URL } from "../constants";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { filterData } from "../utils/helper";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    getRestaurant();
  }, []);

  const getRestaurant = async () => {
    try {
      const data = await fetch(swiggy_api_URL);
      const json = await data.json();
      // console.log(json);
      // setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      // setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setAllRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error(`${error.message}`);
    }
  };

  const onlineStatus = useOnline();

  if (onlineStatus === false) {
    return (
      <div className="flex justify-center items-center">
        <h1 className="bg-orange-400 py-4 mx-8 my-4 inline-block px-6 text-xl font-semibold rounded-md">
          Oops! It seems like you're currently offline. Please take a moment to
          check your internet connection.
        </h1>
      </div>
    );
  }

  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex flex-col justify-start sm:flex-row sm:justify-between sm:items-center flex-wrap search-container p-2 md:p-3 bg-gradient-to-r from-lime-500 via-lime-300 to-lime-500 rounded-md m-4 space-x-4">
        <div className="flex justify-around sm:justify-start items-center w-full sm:w-2/4">
          <input
            type="text"
            className="rounded-md p-2 m-2 placeholder:italic placeholder:text-slate-400 bg-white focus:outline-none focus:border-white focus:ring-green-600 focus:ring-2 w-3/4 sm:w-40 md:w-60 lg:w-80"
            placeholder="Search for restaurants and food"
            value={searchText}
            name="search"
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className="p-2 m-2 bg-lime-700 hover:bg-green-500 text-white rounded-md text-xs lg:text-lg md:text-md"
            onClick={() => {
              // filter the data
              const data = filterData(searchText, allRestaurants);
              // update the state of restaurants list
              setFilteredRestaurants(data);
            }}
          >
            <i
              className="fa-solid fa-magnifying-glass pr-1"
              style={{ color: "#ffffff" }}
            ></i>{" "}
            Search
          </button>
        </div>
        <div className="-ml-2">
          <button
            className="max-sm::-m-2 p-2 m-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md text-xs lg:text-lg md:text-md border-2 border-sky-300"
            onClick={() => {
              const filteredRestro = [...allRestaurants].sort((res1, res2) => {
                return res2.info.avgRating - res1.info.avgRating;
              });
              setFilteredRestaurants(filteredRestro);
            }}
          >
            <i
              className="fa-solid fa-star pr-1"
              style={{ color: "#ffffff" }}
            ></i>{" "}
            Top Rated Restro
          </button>

          <button
            className="p-2 m-2 bg-amber-500 hover:bg-yellow-400 text-white rounded-md text-xs lg:text-lg md:text-md border-2 border-amber-300"
            onClick={() => {
              const filteredRestro = [...allRestaurants].sort((res1, res2) => {
                return res1.info.deliveryTime - res2.info.deliveryTime;
              });
              setFilteredRestaurants(filteredRestro);
            }}
          >
            <i className="fa-solid fa-clock pr-1" style={{ color: "#ffffff" }}></i>{" "}
            Delivery Time
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center m-4">
        {filteredRestaurants.length === 0 ? (
          <div className="flex flex-col justify-center items-center gap-4 mt-8 md:mt-12 mb-10 md:mb-14">
            <img
              src={cat}
              alt="cat"
              className="scale-105 md:scale-125 h-72 md:h-96 p-"
            />
            <h1 className="text-base md:text-xl font-normal mt-3 md:mt-6 text-slate-500">
              😅🍽️ Uh-oh! No results found. Time to taste something new? 🍕🌮🍜
            </h1>
            <a href="/">
              <button
                className="middle none center rounded-lg bg-orange-500 py-2 md:py-4 px-4 md:px-8 font-sans text-base md:text-xl sm:font-semibold md:font-bold text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none md-2 md:m-4"
                data-ripple-light="true"
              >
                See Restaurants near you{" "}
                <i className="fa-solid fa-cart-shopping px-2"></i>
              </button>
            </a>
          </div>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                <RestaurantCard {...restaurant.info} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
