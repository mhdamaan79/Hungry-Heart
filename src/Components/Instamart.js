import ComingSoon from "../assets/Images/coming_soon.png";

const Instamart = () => {
  return (
    <div className="flex flex-col items-center m-4">
      <h1 className="text-xs sm:text-lg lg:text-2xl font-medium md:font-semibold text-center text-lime-100 bg-lime-700 p-4 m-4 rounded-md">
        Unlock the Secrets of Flavorful Bliss with Hungry Heart's Culinary
        Experience
      </h1>
      <img
        className="scale-125 h-72 sm:h-96 p-4 m-6"
        src={ComingSoon}
        alt="Coming Soon"
      />
    </div>
  );
};

export default Instamart;
