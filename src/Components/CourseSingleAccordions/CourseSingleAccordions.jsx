import{ useState, useRef, useEffect } from 'react';
import './CourseSingleAccordions.css';
import arrow_icon from './../../../public/assetsProject/imges/navBar-Vector.png';

const Accordion = ({ title, subTitle, subTitle2, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      contentRef.current.style.maxHeight = contentRef.current.scrollHeight + 'px';
    } else {
      contentRef.current.style.maxHeight = '0px';
    }
  }, [isOpen]);

  return (
    <div className="Mk-accordion">
      <div className="Mk-accordion-titleAndSub" onClick={() => setIsOpen(!isOpen)}>
        <div className={`Mk-AccordionTitle ${isOpen ? 'open' : ''}`} >
          <img
            className={`Mk-AccordionArrowIcon ${isOpen ? 'open' : ''}`}
            src={arrow_icon}
            alt="arrow icon"
          />
          {title}
        </div>
        <div className='Mk-AccordionsubTitle'>
          <span>{subTitle}</span>
          <span>{subTitle2}</span>
        </div>
      </div>
      <div ref={contentRef} className={`Mk-accordion-content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default Accordion;
