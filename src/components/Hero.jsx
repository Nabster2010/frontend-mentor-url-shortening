import heroImg from "/images/illustration-working.svg";
const Hero = () => {
  return (
    <section className="mt-8 md:mt-16 mb-20 md:ml-28 flex flex-col md:justify-center md:items-center md:flex-row-reverse md:gap-8 ">
      <div className="overflow-hidden  md:flex-1">
        <img src={heroImg} alt="" className="ml-8 md:ml-16 object-cover " />
      </div>
      <div className="mt-8 md:mt-0  text-center md:text-start space-y-6 md:flex-1 md:max-w-[380px]">
        <h1 className="text-5xl leading-tight font-bold">
          More than just shorter links
        </h1>
        <p className="text-GrayishViolet text-sm ">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="bg-Cyan rounded-full text-sm font-bold text-white py-3 px-12 transition hover:bg-Cyan/70">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
