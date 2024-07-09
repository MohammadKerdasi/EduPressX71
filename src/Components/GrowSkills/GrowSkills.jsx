// for css
import "./GrowSkills.css";

// nahla
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// -------------------------------
// for images
import growSkillsPic from "./../../../public/assetsProject/imges/lastArticles-Grow-us.png";
import check from "./../../../public/assetsProject/imges/check-vector.png";

export default function GrowSkills() {
  // nahla
useEffect(() => {
  AOS.init({ duration: 500 });
}, []);
  return (
// -------------------------------
    <section className="NA-growskills-Section NA-Project-Container NA-flex">
      <div className="NA-grow-img" >
        <img src={growSkillsPic} alt="grow your skills" data-aos="zoom-in-right"/>
      </div>
      <div className="NA-grow-content">
        <h2 className="NA-flex">
          <span>Grow us your skill</span>
          <span>with LearnPress LMS</span>
        </h2>

        <p>
          We denounce with righteous indignation and dislike men who are so
          beguiled and demoralized that cannot trouble.
        </p>

        <ul>
          <li>
            <img src={check} alt="check-vector" />
            Certification
          </li>
          <li>
            <img src={check} alt="check-vector" />
            Certification
          </li>
          <li>
            <img src={check} alt="check-vector" />
            Certification
          </li>
          <li>
            <img src={check} alt="check-vector" />
            Certification
          </li>
        </ul>
        <button className="NA-btn NA-btn-effect">explore courses</button>
      </div>
    </section>
  );
}
