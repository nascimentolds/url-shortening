import { useState } from "react";

export default function ShortenLink({ data }) {
  const [copied, setCopied] = useState({});

  const copiedUrl = (url) => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        // console.log("Url copied to the clipboard!");
      })
      .catch((err) => {
        console.log("Error while copying to the clipboard:", err);
      });
  };

  const handleCopiar = (id, texto) => {
    copiedUrl(texto);
    setCopied({ ...copied, [id]: true });
  };

  return (
    <div className="shorten-link">
      {data.map((item, index) => {
        return (
          <div className="shorten-link--box" key={index}>
            <div className="shorten-link--real">{item.longUrl}</div>
            <div className="shorten-link--shorted">{item.shortUrl}</div>
            <div className="shorten-link--box-buttom">
              <button
                onClick={() => handleCopiar(index, item.shortUrl) }
                disabled={copied[index]}
                className={`shorten-link--button shorten--buttom ${copied[index] ? "shorten--copied" : ""}`}
              >
                {copied[index] ? 'Copied!' : 'Copy'}              
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
