import { useState, useEffect } from "react";
import { swiggy_menu_api_URL } from "../constants";

const useRestaurantMenu = (resId) => {
  const [restaurantList, setRestaurantList] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      const data = await fetch(swiggy_menu_api_URL + resId);
      const json = await data.json();
      // console.log(json.data);
      const itemCards =
        json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
          ?.card?.itemCards;
      setRestaurantList(itemCards);
    } catch (error) {
      console.error(`Opps!!! Something went wrong ${error}`);
    }
  }

  return restaurantList;
};

export default useRestaurantMenu;
