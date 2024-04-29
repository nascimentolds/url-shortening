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
  }

  function sendingLink() {
    if (inputValue === "") {
      setInputError(true);
    } else {
      console.log("Gerar url");
      handleShorten()
      setInputError(false);
      setInputValue("");
    }
  }

  const handleShorten = async () => {
    try {
      const response = await axios.post('https://cleanuri.com/api/v1/shorten', {
        url: inputValue
      })
      setShortUrl(response.data.result_url)
    } catch (error) {
      setError("Error, try again!")
    }
  }

  error ? console.log(error) : console.log(shortUrl)

  // const handleShorten = async () => {
  //   try {
  //     const response = await fetch('https://cleanuri.com/api/v1/shorten', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({ url: inputValue })
  //     })

  //     if(!response.ok) {
  //       throw new Error("Error, try again!")
  //     }

  //     const data = await response.json()
  //     setShortUrl(data.result_url)

  //   } catch (error) {
  //     setError(error.message);
  //   }
  // }

  // console.log(shortUrl)

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
