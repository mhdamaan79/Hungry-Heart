const ShimmerMenu = () => {
  return (
    <div className="flex flex-col justify-center items-center m-4 rounded-md">
      {Array(6)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className="flex justify-around w-11/12 md:w-9/12 h-48 mx-auto gap-14 p-3 m-6 shadow-2xl bg-slate-200 rounded-md animate-pulse"
          >
            <div className="w-3/6 my-2 h-40 grid grid-rows-4 gap-4">
              <div className="h-8 bg-slate-500 rounded row-span-1"></div>
              <div className="h-8 bg-slate-300 rounded row-span-1"></div>
              <div className="h-8 bg-slate-500 rounded row-span-1"></div>
            </div>
            <div className="w-2/12 my-2 h-40 grid grid-rows-4 gap-2">
              <div className="h-18 bg-slate-400 animate-pulse rounded-md row-span-2"></div>
              <div className="h-8 bg-slate-500 animate-pulse rounded-md row-span-1"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ShimmerMenu;
