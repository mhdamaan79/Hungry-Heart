import { IMG_CDN_URL } from "../constants";
import { BiSolidMap } from "react-icons/bi";
import { RiPinDistanceFill } from "react-icons/ri";

function RestaurantCard({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRatingString,
}) {
  return (
    <div className="w-60 h-80 p-3 m-6 shadow-xl bg-white hover:shadow-stone-300 transition ease-in-out delay-50 hover:scale-110 duration-200 rounded-md">
      <img src={IMG_CDN_URL + cloudinaryImageId} className="rounded-md" />
      <h2 className="font-bold text-xl my-3 truncate">{name}</h2>
      <h5 className="text-sm font-normal tracking-wide truncate">
        {cuisines.join(", ")}
      </h5>
      <h6 className="font-semibold text-sm my-3 flex justify-start items-center gap-2">
        {<BiSolidMap />} {areaName}
      </h6>
      <span className="flex justify-stretch items-center gap-2 text-xs font-bold my-3">
        <h4
          style={
            avgRatingString < 4
              ? { backgroundColor: "#f7084e" }
              : { backgroundColor: "#00ad1d" }
          }
          className="p-2 text-white font-bold rounded-md flex justify-center items-center gap-2"
        >
          <i className="fa-solid fa-star"></i>
          {avgRatingString ? avgRatingString : "--"}
        </h4>
        <h4 className="flex justify-normal items-center gap-1">
          {<RiPinDistanceFill />}
          {sla?.lastMileTravelString ? sla?.lastMileTravelString : "--"}
        </h4>
        <h4>{costForTwo}</h4>
      </span>
    </div>
  );
}

export default RestaurantCard;
