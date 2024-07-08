import { Outlet } from "react-router-dom";
import "./App.css";
import NavBarCom from "./Components/NavBar/NavBarCom";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import ScrollToTop from "./Components/ScrollToTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function App() {
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
  return (
    
    <>
      <section className="app">
        <ScrollToTop />
        <button onClick={scrollToTop} className="rb-scroll-to-top-button"><FontAwesomeIcon icon={faArrowUp} /></button>
        <NavBarCom />
        <Outlet />
        <Footer />
      </section>
    </>
  );
}

export default App;
