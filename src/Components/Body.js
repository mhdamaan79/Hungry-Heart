import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { restaurantList } from "../constants";
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
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
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
      <div className="search-container p-2 md:p-3 bg-gradient-to-r from-lime-500 via-lime-300 to-lime-500 rounded-md m-4 space-x-4">
        <input
          type="text"
          className="rounded-md p-2 m-2 placeholder:italic placeholder:text-slate-400 bg-white w-1/4 focus:outline-none focus:border-white focus:ring-green-600 focus:ring-2"
          placeholder="Search for restaurants and food"
          value={searchText}
          name="search"
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="p-2 m-2 bg-lime-700 hover:bg-green-600 text-white rounded-md"
          onClick={() => {
            // filter the data
            const data = filterData(searchText, allRestaurants);
            // update the state of restaurants list
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap justify-center items-center m-4">
        {filteredRestaurants.length === 0 ? (
          <h1>No Restaurants matching your Filter</h1>
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
