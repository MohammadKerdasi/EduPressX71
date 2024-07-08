// for css
import "./ExploreCourses.css";

// for images
import banner1 from "./../../../public/assetsProject/imges/banner-a(1).png";
import banner2 from "./../../../public/assetsProject/imges/banner-a(2).png";
import banner3 from "./../../../public/assetsProject/imges/banner-a(3).png";
import banner4 from "./../../../public/assetsProject/imges/banner-a(4).png";
import banner5 from "./../../../public/assetsProject/imges/banner-a(5).png";
import banner6 from "./../../../public/assetsProject/imges/banner-a(6).png";
import banner7 from "./../../../public/assetsProject/imges/banner-a(7).png";
import banner8 from "./../../../public/assetsProject/imges/banner-a(8).png";
import banner9 from "./../../../public/assetsProject/imges/banner-a(9).png";

export default function ExploreCourses() {
  return (
    <div className="NA-Project-Container block">
      <div className="NA-ExploreCourses">
        <div className="NA-ExploreCourses-text">
          <p className="NA-ExploreCourses-subtitle">GET MORE POWER FROM</p>

          <h3 className="NA-ExploreCourses-title">LearnPress Add-Ons</h3>

          <p className="NA-ExploreCourses-desc">
            The next level of LearnPress - LMS WordPress Plugin. More Powerful,
            Flexible and Magical Inside.
          </p>
          <button className="NA-btn NA-btn-effect">Explore courses</button>
        </div>

        <img className="NA-banner NA-bannerGreen" src={banner1} alt="banner" />
        <img className="NA-banner NA-bannerPurple" src={banner2} alt="banner" />
        <img
          className="NA-banner NA-bannerDarkpurple"
          src={banner6}
          alt="banner"
        />
        <img className="NA-banner NA-bannerPink" src={banner3} alt="banner" />
        <img className="NA-banner NA-bannerYellow" src={banner5} alt="banner" />
        <img
          className="NA-banner NA-bannerBabyblue"
          src={banner4}
          alt="banner"
        />
        <img className="NA-banner NA-bannerRed" src={banner7} alt="banner" />
        <img className="NA-banner NA-bannerOrange" src={banner8} alt="banner" />
        <img className="NA-banner NA-bannerBlue" src={banner9} alt="banner" />
      </div>
    </div>
  );
}
