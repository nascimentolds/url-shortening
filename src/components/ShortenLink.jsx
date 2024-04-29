import { useEffect, useState } from "react";

export default function ShortenLink() {
  const [urls, setUrls] = useState([])

  useEffect(() => {
    const storedUrls = localStorage.getItem("urlPairs");
    if(storedUrls) {
      setUrls(JSON.parse(storedUrls));
    }
  }, [])

  console.log(urls)

  return (
    <div className="shorten-link">
      <div className="shorten-link--box">
        <div className="shorten-link--real">https://frontendmentor.io</div>
        <div className="shorten-link--shorted">https://rel.ink/k4IKyk</div>
        <div className="shorten-link--box-buttom"><button className="shorten-link--button shorten--buttom">Copy</button></div>
      </div>

      <div className="shorten-link--box">
        <div className="shorten-link--real">https://frontendmentor.io</div>
        <div className="shorten-link--shorted">https://rel.ink/k4IKyk</div>
        <div className="shorten-link--box-buttom"><button className="shorten-link--button shorten--buttom">Copy</button></div>
      </div>
    </div>
  );
}
