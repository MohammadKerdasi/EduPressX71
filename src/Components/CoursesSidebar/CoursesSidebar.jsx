import React, { useState,useEffect } from 'react';
import './CoursesSidebar.css'
import './../../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faFilter,faArrowRight } from '@fortawesome/free-solid-svg-icons';

const CoursesSidebar = ({ filters, onFilterChange }) => {

  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleResize = () => {
    if (window.innerWidth <= 1200) {
      setIsSidebarVisible(false);
      setIsButtonVisible(true);
    } else {
      setIsSidebarVisible(true);
      setIsButtonVisible(false);
    }
  };

  useEffect(() => {
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (name === "All") {
      onFilterChange((prevFilters) => ({
        ...prevFilters,
        All: checked,
        Free: checked,
        Paid: checked
      }));
    } else if (name === "All levels") {
      onFilterChange((prevFilters) => ({
        ...prevFilters,
        "All levels": checked,
        Beginner: checked,
        Intermediate: checked,
        Expert: checked
      }));
    } else {
      onFilterChange((prevFilters) => ({
        ...prevFilters,
        [name]: checked
      }));
    }
  };

  return (
    <section className="CoursesSidebar-courses">
          {isButtonVisible && (
            <button
          className={`rb-filter-sidebar ${isSidebarVisible ? 'rb-filter-visible' : 'rb-filter-hidden'}`}
          onClick={toggleSidebar}
        >
        {
          (isSidebarVisible ? <FontAwesomeIcon className='rb-filter-icon' icon={faArrowRight} /> : <FontAwesomeIcon className='rb-filter-icon' icon={faFilter} />)
        }
          
        </button>
      )}


      {isSidebarVisible && ( <div className={`CoursesSidebar `}>
          <div>
            <h4 className="rb-tit-sidebar">Course category</h4>
            {['Commercial', 'Office', 'Shop', 'Educate', 'Academy', 'family', 'Studio', 'University'].map((category) => (
              <div key={category} className="rb-flex-check">
                <div className="rb-flex-label">
                  <input
                    type="checkbox"
                    name={category}
                    id={category}
                    checked={filters[category]}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor={category}>{category}</label>
                </div>
                <p>15</p>
              </div>
            ))}
          </div>
          <div className="rb-padding-top">
            <h4 className="rb-tit-sidebar">Instructors</h4>
            {['KennyWhite', 'JohnDoe'].map((instructor) => (
              <div key={instructor} className="rb-flex-check">
                <div className="rb-flex-label">
                  <input
                    type="checkbox"
                    name={instructor}
                    id={instructor}
                    checked={filters[instructor]}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor={instructor}>{instructor}</label>
                </div>
                <p>15</p>
              </div>
            ))}
          </div>
          <div className="padding-top">
            <h4 className="rb-tit-sidebar">Price</h4>
            <div className="rb-flex-check">
              <div className="rb-flex-label">
                <input
                  type="checkbox"
                  name="All"
                  id="All"
                  checked={filters.All}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="All">All</label>
              </div>
              <p>15</p>
            </div>
            {['Free', 'Paid'].map((priceType) => (
              <div key={priceType} className="rb-flex-check">
                <div className="rb-flex-label">
                  <input
                    type="checkbox"
                    name={priceType}
                    id={priceType}
                    checked={filters[priceType]}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor={priceType}>{priceType}</label>
                </div>
                <p>15</p>
              </div>
            ))}
          </div>
            {/* _______________Review___________________________________________ */}
      <div className='padding-top'>
        <h4 className='rb-tit-sidebar'>Review</h4>
        <div className='rb-flex-check' >
        <div className='rb-flex-label'>
          <input
            type="checkbox"
            name='five'
            id='five'
            checked={filters['five']}
            onChange={handleCheckboxChange}
          />
          <label htmlFor='five'><FontAwesomeIcon icon={faStar} style={{ color: "#F4BF08" }} /><FontAwesomeIcon icon={faStar} style={{ color: "#F4BF08" }} /><FontAwesomeIcon icon={faStar} style={{ color: "#F4BF08"}} /><FontAwesomeIcon icon={faStar} style={{ color: "#F4BF08" }} /><FontAwesomeIcon icon={faStar} style={{ color: "#F4BF08" }} /></label>
          </div>
          <p>(1,025)</p>
        </div>

        <div className='rb-flex-check'>
        <div className='rb-flex-label'>
          <input
            type="checkbox"
            name='four'
            id='four'
            checked={filters['four']}
            onChange={handleCheckboxChange}
          />
          <label htmlFor='four'><FontAwesomeIcon icon={faStar} style={{ color: "#F4BF08" }} /><FontAwesomeIcon icon={faStar} style={{ color: "#F4BF08" }} /><FontAwesomeIcon icon={faStar} style={{ color: "#F4BF08" }} /><FontAwesomeIcon icon={faStar} style={{ color: "#F4BF08" }} /><FontAwesomeIcon icon={faStar} style={{ color: "#9D9D9D" }} /></label>
          </div>
          <p>(1,025)</p>
        </div>
        <div className='rb-flex-check' >
        <div className='rb-flex-label'>
          <input
            type="checkbox"
            name='three'
            id='three'
            checked={filters['three']}
            onChange={handleCheckboxChange}
          />
          <label htmlFor='three'><FontAwesomeIcon icon={faStar} style={{ color: "#F4BF08" }} /><FontAwesomeIcon icon={faStar} style={{ color: "#F4BF08" }} /><FontAwesomeIcon icon={faStar} style={{ color: "#F4BF08"}} /><FontAwesomeIcon icon={faStar} style={{ color: "#9D9D9D" }} /><FontAwesomeIcon icon={faStar} style={{ color: "#9D9D9D" }} /></label>
          </div>
          <p>(1,025)</p>
        </div>
        <div className='rb-flex-check'>
        <div className='rb-flex-label'>
          <input
            type="checkbox"
            name='two'
            id='two'
            checked={filters['two']}
            onChange={handleCheckboxChange}
          />
          <label htmlFor='two'><FontAwesomeIcon icon={faStar} style={{ color: "#F4BF08" }} /><FontAwesomeIcon icon={faStar} style={{ color: "#F4BF08" }} /><FontAwesomeIcon icon={faStar} style={{ color: "#9D9D9D" }} /><FontAwesomeIcon icon={faStar} style={{ color: "#9D9D9D" }} /><FontAwesomeIcon icon={faStar} style={{ color: "#9D9D9D" }} /></label>
          </div>
          <p>(1,025)</p>
        </div>
        <div className='rb-flex-check'>
        <div className='rb-flex-label'>
          <input
            type="checkbox"
            name='one'
            id='one'
            checked={filters['one']}
            onChange={handleCheckboxChange}
          />
          <label htmlFor='one'><FontAwesomeIcon icon={faStar} style={{ color: "#F4BF08" }} /><FontAwesomeIcon icon={faStar} style={{ color: "#9D9D9D" }} /><FontAwesomeIcon icon={faStar} style={{ color: "#9D9D9D" }} /><FontAwesomeIcon icon={faStar} style={{ color: "#9D9D9D" }} /><FontAwesomeIcon icon={faStar} style={{ color: "#9D9D9D" }} /></label>
          </div>
          <p>(1,025)</p>
        </div>
      </div>

    
          <div className="padding-top">
            <h4 className="rb-tit-sidebar">Level</h4>
            <div className="rb-flex-check">
              <div className="rb-flex-label">
                <input
                  type="checkbox"
                  name="All levels"
                  id="All levels"
                  checked={filters['All levels']}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="All levels">All levels</label>
              </div>
              <p>15</p>
            </div>
            {['Beginner', 'Intermediate', 'Expert'].map((level) => (
              <div key={level} className="rb-flex-check">
                <div className="rb-flex-label">
                  <input
                    type="checkbox"
                    name={level}
                    id={level}
                    checked={filters[level]}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor={level}>{level}</label>
                </div>
                <p>15</p>
              </div>
            ))}
          </div>
        </div>
        
      )}
    </section>
  );
};

export default CoursesSidebar;

