import { useState, useRef } from 'react';
import './SinglePageFAQs.css'


const SingleCourseFAQs = () => {
  const [activeIndexSet1, setActiveIndexSet1] = useState(null);
  const contentRefs = useRef([]);

  const toggleAccordionSet1 = (index) => {
    setActiveIndexSet1(activeIndexSet1 === index ? null : index);

  };


  const faqs = [
    {
      question: "What Does Royalty Free Mean?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in."
    },
    {
      question: "What Does Royalty Free Mean?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in."
    },
    {
      question: "What Does Royalty Free Mean?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in."
    },
    {
      question: "What Does Royalty Free Mean?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in."
    },
  ];

  return (
    <>
    <div className='Mk-SingelCourseFAQs-container'>
      <div className='Mk-SingleCorseFAQs-set'>
        {faqs.slice(0, 4).map((faq, index) => (
          <div key={index} className={`Mk-SingleCourseFAQs ${activeIndexSet1 === index ? 'active' : ''}`}>
            <div className='Mk-SingleCourseQuestion' onClick={() => toggleAccordionSet1(index)}>
              <h5>{faq.question}</h5>
              <svg
                className={`arrow-icon ${activeIndexSet1 === index ? 'active' : ''}`}
                width="12px" height="7"
              >
                <path d="M10.59 0.590088L6 5.17009L1.41 0.590088L0 2.00009L6 8.00009L12 2.00009L10.59 0.590088Z" fill="var(--grey)" />
              </svg>
            </div>
            <div
              className='Mk-SingleCourseAnswer'
              ref={Mk => contentRefs.current[index] = Mk}
              style={{
                maxHeight: activeIndexSet1 === index ? `${contentRefs.current[index]?.scrollHeight}px` : '0',
                
                transition: 'max-height 0.3s ease-out',
                overflow: 'hidden'
              }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default SingleCourseFAQs;