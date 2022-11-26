import React from "react";
import ResultCard from "./ResultCard";

const Results = ({ copyText, copiedText, data }) => {
  return (
    <div className="space-y-6">
      {data.map((item) => (
        <ResultCard
          key={item.url}
          copyText={copyText}
          copiedText={copiedText}
          url={item.url}
          shortUrl={item.shortUrl}
        />
      ))}
    </div>
  );
};

export default Results;
