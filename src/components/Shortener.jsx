import { useRef } from "react";

const Shortener = ({ shortenUrl, errorMsg, setErrorMsg }) => {
  const inputRef = useRef();
  const handleSubmit = (e) => {
    const url = inputRef.current.value;
    e.preventDefault();
    if (url === "") {
      setErrorMsg("Please add a link");
      return;
    }
    shortenUrl(url);
    inputRef.current.value = "";
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative md:flex  md:items-start md:gap-6 mt-36 -top-20 md:-top-12 mx-6  md:mx-28 bg-DarkViolet p-6 md:p-8 rounded-lg md:space-y-0 space-y-4 md:bg-[url('/images/bg-shorten-desktop.svg')] bg-[url('/images/bg-shorten-mobile.svg')] bg-no-repeat bg-right-top"
    >
      <div className="md:flex-1">
        <input
          ref={inputRef}
          type="text"
          placeholder="Shorten a link here ..."
          className={`${
            errorMsg && "error"
          } w-full  focus:outline-none  text-sm rounded-md px-4 py-3 placeholder:text-sm`}
        />
        {errorMsg && (
          <span className="text-red-500 text-xs mt-2">{errorMsg}</span>
        )}
      </div>
      <button
        type="submit"
        className="bg-Cyan w-full md:w-auto text-sm rounded-md font-bold text-white py-3 px-8 transition hover:bg-Cyan/70"
      >
        Shorten it!
      </button>
    </form>
  );
};

export default Shortener;
