export default function Shorten() {
  return (
    <div className="shorten">
      <div className="shorten--form">
        <input
          className="shorten--input"
          type="text"
          placeholder="Shorten a link here..."
        />
        <button className="shorten--buttom">Shorten It!</button>
      </div>
      <span></span>
    </div>
  );
}
