import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ShimmerMenu from "./ShimmerMenu";
import RestaurantItemCard from "./RestaurantItemCard";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // console.log(resId)

  const resInfo = useRestaurantMenu(resId);

  return !resInfo ? (
    <ShimmerMenu />
  ) : (
    <div className="menu">
      {resInfo.length > 0 && (
        <p className="text-xl text-[#3F4255] uppercase font-bold w-11/12 md:w-9/12 mx-auto pl-3 my-5">
          Recommended - ({resInfo.length})
        </p>
      )}
      {resInfo.map((item) => {
        return <RestaurantItemCard item={item} key={item.card.info.id} />;
      })}
    </div>
  );
};

export default RestaurantMenu;
