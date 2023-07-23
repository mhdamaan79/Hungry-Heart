import { FiTrash2 } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";

const CartItems = (props) => {
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div>
      <div className="h-28 w-full rounded-xl p-4 flex items-center justify-between mb-5 gap-12 shadow-md hover:bg-green-50">
        <div className="flex items-center gap-6">
          <img
            src={
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
              props?.info?.imageId
            }
            alt=""
            className="w-40 h-24 rounded-md object-cover"
          />
          <div>
            <p className="font-semibold text:md md:text-lg text-[#202129]">
              {props.info.name}
            </p>
            <p className="text-[#7c7c7c]"> ₹{props.info.price / 100}</p>
          </div>
        </div>

        <button
          className="p-2 bg-red-400 hover:bg-red-600 hover:shadow-md rounded-full text-white"
          onClick={() => {
            handleRemoveItem(props?.info?.id);
          }}
        >
          <FiTrash2 />
        </button>
      </div>
    </div>
  );
};

export default CartItems;
