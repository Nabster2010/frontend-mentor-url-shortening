import { useState } from "react";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Results from "./components/Results";
import Shortener from "./components/Shortener";
import Stats from "./components/Stats";
import useCopyToClipboard from "./hooks/useCopyToClipboard";
import useLocalStorage from "./hooks/useLocalStorage";
import { arrLimit } from "./utils/array_limit";

function App() {
  const [copiedText, copy] = useCopyToClipboard();
  const [errorMsg, setErrorMsg] = useState(null);
  const [urls, setUrls] = useLocalStorage("SHORTEN_URLS", []);

  const shortenUrl = async (url) => {
    const res = await fetch(` https://api.shrtco.de/v2/shorten?url=${url}`);
    const data = await res.json();
    const { result, ok, error } = data;
    if (!ok) {
      setErrorMsg(error);
      console.log(error);
      return;
    }
    const limitedUrls = arrLimit(3, urls);
    setUrls([{ url: url, shortUrl: result.full_short_link }, ...limitedUrls]);
  };

  return (
    <div className="text-[18px] font-Poppins ">
      <Header />
      <Hero />
      <section className=" bg-GrayishViolet/10">
        <Shortener
          errorMsg={errorMsg}
          setErrorMsg={setErrorMsg}
          shortenUrl={shortenUrl}
        />
        <Results data={urls} copiedText={copiedText} copyText={copy} />
        <Stats />
        <Cta />
      </section>
      <Footer />
    </div>
  );
}

export default App;
