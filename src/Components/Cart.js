import { useDispatch, useSelector } from "react-redux";
import { BsApple } from "react-icons/bs";
import { clearItem } from "../utils/cartSlice";
import CartItems from "./CartItems";
import EmptyCart from "../assets/Images/empty_cart.png";
import { Link } from "react-router-dom";

let keyCartItem = 1;

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearItem());
  };

  return (
    <div>
      {cartItems.length != 0 ? (
        <div className="w-11/12 min-h-full mx-auto flex flex-col md:flex-row justify-between mt-12 ">
          <div className="w-full md:w-3/5">
            <p className="text-3xl mb-3 p-4 font-semibold text-white bg-gradient-to-r from-orange-500 from-10% via-orange-400 via-45% to-orange-500 to-90% rounded-md inline-block">
              <i className="fa-solid fa-cart-shopping px-2"></i>
              Shopping Cart
            </p>
            <br></br>
            <p className="font-medium text-xl text-white p-4 bg-orange-500 mb-8 inline-block rounded-md">
              You have {cartItems.length} items in your cart
            </p>
            <div>
              {cartItems.map((item) => {
                // console.log(`item + ${item}`);
                // console.log(item.info.id);
                return <CartItems {...item} key={keyCartItem++} />;
              })}
            </div>
            {cartItems.length > 0 && (
              <button className="mb-8" onClick={() => handleClearCart()}>
                <a
                  href="#_"
                  className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-lime-200 rounded hover:bg-white group"
                >
                  <span className="w-48 h-48 rounded rotate-[-40deg] bg-green-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                    Clear Cart
                  </span>
                </a>
              </button>
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="w-full md:w-[30%] md:h-[500px] mt-12 md:mt-0 transition-all duration-200">
              <p className="text-xl text-[#131317] mb-5">Order Summary</p>
              <button className="h-12 w-full bg-green-100 rounded-md flex justify-center items-center gap-1 hover:bg-green-200">
                <BsApple className="text-xl" />
                <div className="text-xl font-semibold">Pay</div>
              </button>
              <div>
                <div></div>
                <p className="text-center my-4 text-[#909090]">
                  Or pay with card
                </p>
              </div>

              <div className="text-[#909090] my-2">
                Gift Card/ Discount code
              </div>
              <div className="flex justify-between mb-5">
                <input
                  type="text"
                  className="bg-[#E2E8F0] h-10 rounded-md w-72 outline-none p-1"
                />
                <button className="h-10 w-24  text-[#3182CE] border-[#3182CE] border-2 rounded-md">
                  Apply
                </button>
              </div>
              <div className="flex justify-between text-sm my-3">
                <p className="text-[#3F4255]">Sub Total</p>
                <p className=" text-[#909090]">₹XXX</p>
              </div>
              <div className="flex justify-between text-sm my-3">
                <p className="text-[#3F4255]">Shipping</p>
                <p className=" text-[#909090]">₹49</p>
              </div>
              <div className="flex justify-between text-md my-3">
                <p className="text-[#3F4255] font-semibold">Total</p>
                <p className=" text-[#909090] font-semibold">₹XXX</p>
              </div>
              <button className="h-12 w-full bg-black rounded-md text-white flex justify-center items-center text-xl font-semibold mt-5 hover:bg-slate-400 hover:text-black">
                Pay ₹XXX
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-4 mt-4 mb-16 md:mb-24">
          <img
            className="scale-105 md:scale-125 h-72 md:h-96 p-2"
            src={EmptyCart}
            alt="Empty Cart"
          />
          <h1 className="text-lg md:text-2xl font-bold text-slate-600">
            Your cart is empty
          </h1>
          <p className="text-base md:text-lg font-normal text-slate-500">
            You can go to home page to view more restaurants
          </p>
          <Link to="/">
            <button
              className="middle none center rounded-lg bg-orange-500 py-2 md:py-4 px-4 md:px-8 font-sans text-base md:text-xl sm:font-semibold md:font-bold text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none md-2 md:m-4"
              data-ripple-light="true"
            >
              See Restaurants near you{" "}
              <i className="fa-solid fa-cart-shopping px-2"></i>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
