import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ShimmerMenu from "./ShimmerMenu";
import RestaurantItemCard from "./RestaurantItemCard";
import React from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // console.log(resId)

  const resInfo = useRestaurantMenu(resId);
  const restaurantMenuItemsCard = resInfo
    ? resInfo.filter((card) => card?.card?.card?.itemCards)
    : [];

  return restaurantMenuItemsCard.length === 0 ? (
    <ShimmerMenu />
  ) : (
    <div className="menu">
      {restaurantMenuItemsCard.map((card) => (
        <React.Fragment key={card?.card?.card?.id}>
          {card?.card?.card?.itemCards?.length > 0 && (
            <p className="text-xl text-[#3F4255] uppercase font-bold w-11/12 md:w-9/12 mx-auto pl-3 my-5 drop-shadow-lg">
              {card?.card?.card?.title} - ({card?.card?.card?.itemCards?.length}
              )
            </p>
          )}
          {card?.card?.card?.itemCards &&
            card?.card?.card?.itemCards.map((item) => (
              <RestaurantItemCard item={item} key={item.card.info.id} />
            ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default RestaurantMenu;
// {card?.card?.card?.itemCards.map((item) => (
//   <RestaurantItemCard item={item} key={item.card.info.id} />
// ))}
