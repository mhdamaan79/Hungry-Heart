import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { useEffect, useState } from "react";

const RestaurantItemCard = (props) => {
  // console.log(props);
  const dispatch = useDispatch();

  const [isVeg, setVeg] = useState(true);

  useEffect(() => {
    if (props?.item?.card?.info?.itemAttribute?.vegClassifier !== "VEG") {
      setVeg(false);
    }
  }, []);

  const handleAddItem = (item) => {
    // console.log(item)
    dispatch(addItem(item));
  };

  return (
    <div className="relative">
      <div className="flex justify-around w-11/12 md:w-9/12 mx-auto gap-4 p-3 m-6 shadow-2xl bg-white hover:shadow-stone-300 transition ease-in-out delay-50 hover:scale-105 md:hover:scale-110 duration-200 rounded-md">
        <div className="w-9/12">
          <div className="my-1 rounded-md">
            {isVeg ? (
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/color/48/vegetarian-food-symbol.png"
                alt="vegetarian"
              />
            ) : (
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/color/48/non-vegetarian-food-symbol.png"
                alt="non vegetarian"
              />
            )}
          </div>
          <h2 className="font-2xl font-bold text-[#3F4255] mb-1">
            {props?.item?.card?.info?.name}
          </h2>
          <p className="text-zinc-600 tracking-wider text-sm hidden md:block">
            {props?.item?.card?.info?.description}
          </p>
          <p className="text-slate-800 my-2 font-semibold">
            ₹{props?.item?.card?.info?.price / 100}
          </p>
        </div>
        <div className="relative flex flex-col gap-2">
          <img
            className="w-52 md:h-32 h-24 object-cover rounded-md"
            src={
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
              props?.item?.card?.info?.imageId
            }
          />

          <button
            onClick={() => handleAddItem(props?.item?.card)}
            className=" bg-lime-200 text-slate-600 hover:bg-lime-300 font-bold p-2 uppercase transition ease-in-out delay-50 hover:scale-105 duration-200 rounded-md"
          >
            Add Item +
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantItemCard;
