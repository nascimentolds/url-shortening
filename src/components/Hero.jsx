// import heroImage from "../assets/images/illustration-working.svg"

export default function Hero() {
  return (
    <div className="hero">
      <section className="hero--section">
        <h1 className="hero--title">More than just shorter links</h1>
        <p className="hero--description">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <a className="hero--button button-rounded-full" href="#">Get Started</a>
      </section>
      <div className="hero--image"></div>
    </div>
  );
}
