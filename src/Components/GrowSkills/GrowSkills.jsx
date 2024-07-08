// for css
import "./GrowSkills.css";

// for images
import growSkillsPic from "./../../../public/assetsProject/imges/lastArticles-Grow-us.png";
import check from "./../../../public/assetsProject/imges/check-vector.png";

export default function GrowSkills() {
  return (
    <section className="NA-growskills-Section NA-Project-Container NA-flex block">
      <div className="NA-grow-img">
        <img src={growSkillsPic} alt="" />
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
