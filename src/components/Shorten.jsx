import { useState } from "react";
import axios from "axios";

export default function Shorten() {
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState(false);
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");

  function handleInputValue(event) {
    const value = event.target.value;
    setInputValue(value);
    setInputError(false); // Reseta o estado de erro quando o usuário digita algo
  }

  async function sendingLink() {
    if (inputValue === "") {
      setInputError(true);
    } else {
      try {
        const response = await axios.post(
          'https://cleanuri.com/api/v1/shorten',
          { url: inputValue }
        );
        setShortUrl(response.data.result_url);
      } catch (error) {
        setError("Error, try again!");
      }
    }
  }

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
        {shortUrl && (
          <div className="shorten--result">
            <p>Shortened URL:</p>
            <a href={shortUrl} target="_blank" rel="noopener noreferrer">
              {shortUrl}
            </a>
          </div>
        )}
        {error && (
          <div className="shorten--error">
            <p>{error}</p>
          </div>
        )}
      </div>
    </form>
  );
}
