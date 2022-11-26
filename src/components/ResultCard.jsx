const ResultCard = ({ url, shortUrl, copiedText, copyText }) => {
  const isCopied = copiedText === shortUrl;
  return (
    <div className="relative mx-6 md:mx-28 p-4 text-center bg-white shadow-sm gap-4 rounded-sm text-sm flex flex-col md:flex-row justify-center items-center md:justify-between">
      <p className="w-full md:w-auto truncate">{url}</p>
      <span className="md:hidden absolute top-11  inset-x-0 h-px bg-gray-100"></span>
      <div className=" contents md:flex  items-center gap-4">
        <p className="text-Cyan  ">{shortUrl}</p>
        <button
          onClick={() => copyText(shortUrl)}
          className={` ${
            isCopied ? "bg-DarkViolet" : " bg-Cyan"
          } w-full transition hover:opacity-70 md:w-28 rounded-sm text-white text-sm px-6 py-2`}
        >
          {isCopied ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
