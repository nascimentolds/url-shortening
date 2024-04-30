import { useState } from "react";

export default function Shorten({ inputUrl }) {
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState(false);

  function handleInputValue(event) {
    const value = event.target.value;
    setInputValue(value);
    setInputError(false);
  }

  async function sendingLink() {
    if (inputValue === "") {
      setInputError(true);
    } else {
      inputUrl(inputValue);
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
      </div>
    </form>
  );
}
