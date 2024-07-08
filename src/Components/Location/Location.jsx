import "./Location.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Location = () => {
  return (
    <>
      <div className="d-flex Mk-padding-iframe w-100 justify-content-between gap-4 Mk-Wrapper ">
        <div className="Mk-ContactTitle">
          <h1>Need a direct line?</h1>
          <p>
            Cras massa et odio donec faucibus in. Vitae pretium massa dolor
            ullamcorper lectus elit quam.
          </p>
          <div className="d-flex Mk-Icons-Gap Mk-Margin-Contact flex-column">
            <div className="flex-row d-flex Mk-Icons-Gap">
              <div className="MK-Square">
                <FontAwesomeIcon
                  icon={faPhone}
                  size="xl"
                  style={{ color: "var(--main-color)" }}
                />
              </div>
              <div className="Mk-Bold">
                <p>Phone</p>
                <b>(123) 456 7890</b>
              </div>
            </div>
            <div className="flex-row d-flex Mk-Icons-Gap">
              <div className="MK-Square">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="xl"
                  style={{ color: "var(--main-color)" }}
                />
              </div>
              <div className="Mk-Bold">
                <p>Email</p>
                <b>contact@thimpress.com</b>
              </div>
            </div>
          </div>
        </div>
        <div className="Mk-Iframe">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3355378.891023664!2d41.64323629402979!3d34.7873906581411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e6dc413cc6a7%3A0x877546f4882af620!2z2LPZiNix2YrYpw!5e0!3m2!1sar!2s!4v1718242439712!5m2!1sar!2s"
            // width="603.3" height="319.5"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="responsive google map"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Location;
