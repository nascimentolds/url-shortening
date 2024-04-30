import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Advanced from "./components/Advanced";
import Shorten from "./components/Shorten";
import Boost from "./components/Boost";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [shortUrl] = useState("");
  const [error, setError] = useState("");
  const [urlPairs, setUrlPairs] = useState(() => {
    const urlOnStorage = localStorage.getItem("urlPairs");
    return urlOnStorage ? JSON.parse(urlOnStorage) : [];
  });

  useEffect(() => {
    localStorage.setItem("urlPairs", JSON.stringify(urlPairs));
  }, [urlPairs]);

  function handleInputUrl(value) {
    setInputValue(value);
  }

  async function sendingLink() {
    try {
      const response = await axios.post(
        "https://url-short-api-seven.vercel.app/shorten",
        { url: inputValue }
      );

      const newPair = {
        longUrl: inputValue,
        shortUrl: response.data.result_url,
      };

      setUrlPairs([...urlPairs, newPair]);
      setInputValue("");

    } catch (error) {
      setError("Error, try again!");
    }
  }

  console.log(error ? error : shortUrl);
  inputValue && sendingLink();

  return (
    <div className="container">
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Shorten inputUrl={handleInputUrl} />
        <Advanced data={urlPairs} />
        <Boost />
      </main>
      <Footer />
    </div>
  );
}

export default App;
