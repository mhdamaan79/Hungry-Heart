import { useState, useEffect } from "react";
import { swiggy_menu_api_URL } from "../constants";
import { makeRequestThroughProxy } from "../Services/apiService";

const useRestaurantMenu = (resId) => {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, [resId]);

  async function getRestaurantInfo() {
    try {
      // Make a request using the CORS proxy function
      const responseData = await makeRequestThroughProxy(
        swiggy_menu_api_URL + resId
      );
      // console.log(responseData);
      const itemCards =
        responseData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      // console.log(itemCards);
      setRestaurantList(itemCards);
    } catch (error) {
      console.error(`Opps!!! Something went wrong ${error}`);
    }
  }

  return restaurantList;
};

export default useRestaurantMenu;
