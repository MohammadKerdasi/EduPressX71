import { useState } from "react";

// for css
import "./StudentsFeedback.css";

// for images
import feedback from "./../../../public/assetsProject/imges/Student feedbacks.png";
import Title from "../Title/Title";

export default function StudentsFeedback() {
  const [StudentFeedback] = useState([
    {
      id: 1,
      img: feedback,
      desc: "I must explain to you how all this mistaken . Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound",
      by: "roe smith",
      job: "designer",
    },
    {
      id: 2,
      img: feedback,
      desc: "I must explain to you how all this mistaken . Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound",
      by: "william frank",
      job: "web developer",
    },
    {
      id: 3,
      img: feedback,
      desc: "I must explain to you how all this mistaken . Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound",
      by: "sarah jhonson",
      job: "back-end developer",
    },
    {
      id: 4,
      img: feedback,
      desc: "I must explain to you how all this mistaken . Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound",
      by: "john doe",
      job: "software engineer",
    },
  ]);

  return (
    <section className="NA-feedbacks-Section NA-Project-Container block">
      <Title
        header="students feedbacks"
        desc="what students say about us"
        showBtn={false}
      />
      <div className="NA-feedbackCards NA-flex">
        {StudentFeedback.map((item) => {
          return (
            <div key={item.id} className="NA-feeback-card">
              <div>
                <img
                  className="feedback-qoute"
                  src={item.img}
                  alt="double-qoute"
                />
                <p>{item.desc}</p>
              </div>
              <div>
                <h3>{item.by}</h3>
                <p>{item.job}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
