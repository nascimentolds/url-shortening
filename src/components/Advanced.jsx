import AdvancedCard from "./AdvancedCard";
import ShortenLink from "./ShortenLink";
import iconRecognition from "../assets/images/icon-brand-recognition.svg"
import iconDetailed from "../assets/images/icon-detailed-records.svg"
import iconFully from "../assets/images/icon-fully-customizable.svg"

export default function Advanced({ data }) {
  return (
    <div>
      <section className="advanced">
        <ShortenLink data={data} />
        <h1 className="advanced--title">Advanced Statistics</h1>
        <p className="advanced--description">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className="advanced--cards">
          <AdvancedCard
            classPosition="top"
            img={iconRecognition}
            title="Brand Recognition"
            description="Boost your brand recognition with each click. Generic links don’t mean
            a thing. Branded links help instil confidence in your content."
          />
          <AdvancedCard
            classPosition="middle"
            img={iconDetailed}
            title="Detailed Records"
            description="Gain insights into who is clicking your links. Knowing when and where 
            people engage with your content helps inform better decisions."
          />
          <AdvancedCard
            classPosition="bottom"
            img={iconFully}
            title="Fully Customizable"
            description="Improve brand awareness and content discoverability through customizable 
            links, supercharging audience engagement."
          />
        </div>
      </section>
    </div>
  );
}
