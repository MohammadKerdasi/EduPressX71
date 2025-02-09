import AOS from "aos";
import "aos/dist/aos.css";
// for css
import "./HomePageHero.css";

// for images
import heroGirl from "./../../../public/assetsProject/imges/girl.png";
import HomeheroGirl from "./../../../public/assetsProject/imges/Homeherogirl.png";
import heroVector from "./../../../public/assetsProject/imges/header-Vector.png";
import heroVector1 from "./../../../public/assetsProject/imges/header-Vector (1).png";
import heroVector2 from "./../../../public/assetsProject/imges/header-Vector (2).png";
import OnlineSchool from "./../../../public/assetsProject/imges/header-online.png";
import HeaderObject1 from "./../../../public/assetsProject/imges/header-background.png";
import HeaderObject2 from "./../../../public/assetsProject/imges/header-OBJECTS.png";
import { useEffect } from "react";

export default function HomePageHero() {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);
  return (
    <header className="NA-header">
      <div className="Project-Container NA-hero-Wrapper NA-flex">
        <div
          className="NA-hero-content"
         
        >
          <h1 className="NA-flex ">
            <span data-aos="fade-right"
     data-aos-duration="500">Build Skills with</span>
            <span data-aos="fade-right"
     data-aos-duration="1000">Online Course</span>
          </h1>
          <p data-aos="fade-right"
     data-aos-duration="1200">
            We denounce with righteous indignation and dislike men who are so
            beguiled and demoralized that cannot trouble.
          </p>
          <button data-aos="fade-right"
     data-aos-duration="1200" className="NA-btn NA-btn-effect">Posts comment</button>
        </div>
        <div className="NA-hero-img" data-aos="fade-left">
          <img className="NA-Homeherogirl1" src={heroGirl} alt="student girl" />
          <img
            className="NA-Homeherogirl2"
            src={HomeheroGirl}
            alt="student girl"
          />
        </div>
      </div>
      <img
        className="NA-header-img NA-img-left"
        src={heroVector1}
        alt="vector1"
      />

      <img
        className="NA-header-img NA-img-top-right"
        src={HeaderObject1}
        alt="header-object1"
      />
      <img
        className="NA-header-img NA-img-top-right-child"
        src={HeaderObject2}
        alt="header-object2"
      />
      <img
        className="NA-header-img NA-img-right"
        src={heroVector2}
        alt="vector2"
      />
      <img
        className="NA-header-img NA-img-bottom-left"
        src={heroVector}
        alt="vector"
      />
      <img
        className="NA-header-img NA-img-center"
        // data-aos="fade-up"
        src={OnlineSchool}
        alt="online school"
      />
    </header>
  );
}
