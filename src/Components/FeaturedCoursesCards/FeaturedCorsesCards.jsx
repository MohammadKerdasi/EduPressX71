// for css
import "./FeaturedCoursesCards.css";

// for images
import graduationHat from "./../../../public/assetsProject/imges/hat.svg"
import clock from "./../../../public/assetsProject/imges/time.svg"
import copyFile from "./../../../public/assetsProject/imges/lesson.svg"
import signal from "./../../../public/assetsProject/imges/leavl.svg"

// for routers
import { Link } from "react-router-dom";

export default function FeaturedCoursesCards(props) {
  return (
        <div className="NA-featuredCards NA-flex">
          {props.FeaturedCards.map((item) => (
            <>
           <div key={item.id} className={props.view || "NA-feature-card"}>
                <div className="NA-feature-card-img">
                  <img src={item.img} alt="features-img" />
                  <p className="NA-card-note">{item.note}</p>
                </div>
                <div className="NA-feature-card-content">
                  <div>
                    <p className="NA-card-desc">by <span>{item.detail}</span></p>
                    <h3 className="NA-card-title">{item.title}</h3>
                    <div className="NA-feature-card-deatails NA-flex">
                      <div>
                      <img src={clock} className="NA-icon" alt="clock-icon" />
                        <span className="NA-icon-desc">{item.time}</span>
                      </div>
                      <div>
                        <img src={graduationHat} className="NA-icon" alt="graduation-hat-icon" />
                        <span className="NA-icon-desc">{item.number}</span>
                      </div>
                      <div className="NA-d-none">
                      <img src={signal} className="NA-icon" alt="signal-icon" />
                        <span className="NA-icon-desc">{item.levels}</span>
                      </div>
                      <div className="NA-d-none">
                      <img src={copyFile} className="NA-icon" alt="copy-file-icon" />
                        <span className="NA-icon-desc">{item.lessons}</span>
                      </div>
                    </div>
                  </div>
                  <div className="NA-card-price NA-flex">
                    <div className="NA-flex">
                      <span> &#36;{item.price}</span>
                      {item.id == 2 ? <p className="discount"> &#36;49.0</p> : <p className="free">Free</p>}
                    </div>
                    <Link to={`/Courses/${encodeURIComponent(item.title)}`}>{item.viewMore}</Link>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
  );
}