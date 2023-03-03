import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import Banner from "./components/Banner";
import Overview from "./components/Overview";
import Classes from "./components/Classes";
// import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <header className="header">
        <Navigation />
        <div className="trial">
          <a
            aria-label="Chat on WhatsApp"
            href="https://wa.me/14694035401?text=Hello Chanchal, I am interested in booking free dance trial class"
          >
            {" "}
            Book your free trial class now
          </a>
        </div>
      </header>
      <main>
        <Banner />
        <Overview />
        <Classes />
      </main>
    </div>
  );
}

export default App;
