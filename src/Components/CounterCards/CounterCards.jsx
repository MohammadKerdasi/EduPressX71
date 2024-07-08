import { useState } from "react";

// for css
import "./CounterCards.css";

import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function CounterCards() {
  const [counterOn, setCounterOn] = useState(false);

  const [CounterCards] = useState([
    {
      id: 1,
      desc: "active students",
    },
    {
      id: 2,
      desc: "total courses",
    },
    {
      id: 3,
      desc: "Instructor",
    },
    {
      id: 4,
      desc: "Satisfaction rate",
    },
  ]);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <section className="NA-counterCards-Section NA-Project-Container NA-flex">
        {CounterCards.map((item) => {
          return (
            <div key={item.id} className="NA-counter-card NA-flex">
              {counterOn && item.id == 1 && (
                <h2>
                  <CountUp
                    className="NA-account-balance"
                    start={0}
                    end={25}
                    duration={6}
                    useEasing={true}
                  />
                  k+
                </h2>
              )}
              {counterOn && item.id == 2 && (
                <h2>
                  <CountUp
                    className="NA-account-balance"
                    start={0}
                    end={899}
                    duration={6}
                    useEasing={true}
                  />
                </h2>
              )}
              {counterOn && item.id == 3 && (
                <h2>
                  <CountUp
                    className="NA-account-balance"
                    start={0}
                    end={158}
                    duration={6}
                    useEasing={true}
                  />
                </h2>
              )}
              {counterOn && item.id == 4 && (
                <h2>
                  <CountUp
                    className="NA-account-balance"
                    start={0}
                    end={100}
                    duration={6}
                    useEasing={true}
                  />
                  %
                </h2>
              )}

              <p>{item.desc}</p>
            </div>
          );
        })}
      </section>
    </ScrollTrigger>
  );
}
