const ShimmerAbout = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 m-4">
        <div className="p-3 w-5/6 h-14 md:w-3/6 md:h-20 bg-slate-500 rounded-md animate-pulse"></div>
        <div className="p-3 w-4/6 h-14 md:w-2/6 md:h-20 bg-slate-300 rounded-md animate-pulse"></div>
      </div>
      <div className="flex flex-wrap justify-center items-center m-2 sm:m-4">
        {Array(12)
          .fill("")
          .map((e, index) => (
            <div
              key={index}
              className="flex flex-wrap w-44
              h-44
              p-1 
              m-4 sm:w-80 sm:h-80 sm:p-3 sm:m-6 shadow-2xl bg-slate-200 rounded-md animate-pulse"
            ></div>
          ))}
      </div>
    </>
  );
};

export default ShimmerAbout;
