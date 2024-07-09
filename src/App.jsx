import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBarCom from "./Components/NavBar/NavBarCom";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Home from "./Pages/Home.jsx";
import Courses from "./Pages/Courses.jsx";
import Blog from "./Pages/Blog.jsx";
import Contact from "./Pages/Contact.jsx";
import FAQs from "./Pages/FAQs.jsx";
// import LoginRegister from './Pages/LoginRegister.jsx';
import CourseSingle from "./Pages/CourseSingle.jsx";
import BlogSingle from "./Pages/BlogSingle.jsx";
import Errorpage from "./Pages/Errorpage.jsx";
import LoginandRegister from "./Pages/LoginRegister.jsx";

function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <section className="app">
        <ScrollToTop />
        <button onClick={scrollToTop} className="rb-scroll-to-top-button">
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
        <NavBarCom />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Courses/:courseTitle" element={<CourseSingle />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/FAQs" element={<FAQs />} />
          <Route path="/LoginRegister" element={<LoginandRegister />} />
          <Route path="/Blog/:blogTitle" element={<BlogSingle />} />
          <Route path="/Error" element={<Errorpage />} />
        </Routes>
        <Footer />
      </section>
    </>
  );
}

export default App;
