const Stats = () => {
  return (
    <div className="mt-16 mx-6 md:mx-16 flex flex-col justify-center items-center text-center space-y-8">
      <div className="space-y-6 ">
        <h1 className="font-bold text-2xl">Advanced Statistics</h1>
        <p className="text-GrayishViolet text-sm md:max-w-[500px]">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="flex stat-container flex-col md:flex-row justify-center items-center gap-6">
        <StatCard />
        <StatCard />
        <StatCard />
      </div>
    </div>
  );
};

export default Stats;

const StatCard = () => {
  return (
    <div className=" relative stat-card group mt-12 md:mt-0 px-6 pb-8 pt-14 rounded-lg shadow-sm flex flex-col items-center md:items-start gap-6  bg-white md:text-start ">
      <div className="absolute -top-8 bg-DarkViolet p-4 rounded-full ">
        <img
          src="/images/icon-detailed-records.svg"
          alt=""
          className="w-8 h-8"
        />
      </div>
      <span className="group-first:hidden absolute left-1/2 md:-left-6 md:translate-x-0  -translate-x-1/2 -top-[4.5rem] md:top-1/2 w-2 md:w-6 md:h-2 h-10 bg-Cyan"></span>

      <h1 className="font-bold ">Brand Recognition</h1>
      <p className="  leading-6 text-GrayishViolet text-xs">
        Boost your brand recognition with each click. Generic links don’t mean a
        thing. Branded links help instil confidence in your content.
      </p>
    </div>
  );
};
