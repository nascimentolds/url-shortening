import { useEffect, useState } from "react";
import axios from "axios";

export default function Shorten() {
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState(false);
  const [shortUrl] = useState("");
  const [error, setError] = useState("");
  const [urlPairs, setUrlPairs] = useState([]);

  useEffect(() => {
    localStorage.setItem("urlPairs", JSON.stringify(urlPairs));
  }, [urlPairs])

  useEffect(() => {
    const storedUrls = localStorage.getItem("urlPairs");
    if(storedUrls) {
      setUrlPairs(JSON.parse(storedUrls));
    }
  }, [])

  console.log(urlPairs)

  function handleInputValue(event) {
    const value = event.target.value;
    setInputValue(value);
    setInputError(false);
  }

  async function sendingLink() {
    if (inputValue === "") {
      setInputError(true);
    } else {
      try {
        const response = await axios.post(
          'https://url-short-api-seven.vercel.app/shorten',
          { url: inputValue }
        );
        // setShortUrl(response.data.result_url);
        const newPair = {longUrl: inputValue, shortUrl: response.data.result_url}
        setUrlPairs([...urlPairs, newPair])
        setInputValue("")
        
      } catch (error) {
        setError("Error, try again!");
      }
    }
  }

  console.log(error ? error : shortUrl)

  return (
    <form className="shorten">
      <div className="shorten--form">
        <div className="shorten--input-box">
          <input
            className={`shorten--input ${inputError && "shorten--input-erro"}`}
            type="text"
            placeholder="Shorten a link here..."
            value={inputValue}
            onChange={handleInputValue}
          />
          {inputError && (
            <span className="shorten--erro">
              <i>Please add a link</i>
            </span>
          )}
        </div>
        <div>
          <button
            onClick={sendingLink}
            type="button"
            className="shorten--buttom"
          >
            Shorten It!
          </button>
        </div>
      </div>
    </form>
  );
}
