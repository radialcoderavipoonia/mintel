import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/Hero";
import DidYouKnow from "./components/DidYouKnow";
import Prospecting from "./components/Prospecting";
import Compatible from "./components/Compatible";
import Mintelize from "./components/Mintelize";
import OneClick from "./components/OneClick";
import Brands from "./components/Brands";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="overflow-hidden">
        <Hero />
        <DidYouKnow />
        <Prospecting />
        <Compatible />
        <Mintelize />
        <OneClick />
        <Brands />
        <Footer />
      </div>
    </>
  );
}

export default App;
