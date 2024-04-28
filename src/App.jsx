import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Advanced from "./components/Advanced";
import Shorten from "./components/Shorten";
import Boost from "./components/Boost";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Shorten />
        <Advanced />
        <Boost />
      </main>
      <Footer />
    </div>
  );
}

export default App;
