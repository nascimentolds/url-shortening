export default function AdvancedCard({ img, title, description, classPosition }) {
  console.log(classPosition);
  return (
    <div className={`advanced--card ${classPosition}`}>
      <div className="advanced--card-image">
        <img src={img} alt="" />
      </div>
      <div className="advanced--card-content">
        <h3 className="advanced--card-title">{title}</h3>
        <p className="advanced--card-desc">{description}</p>
      </div>
    </div>
  );
}
