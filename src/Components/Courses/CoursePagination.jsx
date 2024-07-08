import React, { useState, useEffect } from "react";
import FeaturedCoursesCards from "./../FeaturedCoursesCards/FeaturedCorsesCards";
import "./CoursePagination.css";
import "./../../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faMagnifyingGlass,
  faFilter,
  faList,
  faBorderAll,
} from "@fortawesome/free-solid-svg-icons";
import ArticlesCards from "../ArticlesCards/ArticlesCards";
import FilterBar from "../FilterBar/FilterBar";
import { useMediaQuery } from 'react-responsive';

const CoursePagination = ({ searchBox, onSearchChange, items, title, x }) => {
 
  const isMobileView = useMediaQuery({ maxWidth: 767 });
  const [view, setView] = useState('NA-feature-card');
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;
  const totalPages = Math.ceil(items.length / recordsPerPage);

  useEffect(() => {
    if (isMobileView) {
      setView('NA-feature-card');
    }
  }, [isMobileView]);

  const handleButtonClick = (viewType) => {
    if (!isMobileView) {
      setView(viewType === 1 ? 'NA-feature-card' : 'rb-listing');
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedItems = items.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  // for nahla filterBar
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="rb-CoursePagination ">
      <div className="rb-CoursePagination-head">
        <h1>{title}</h1>
        <div className="search-view">
          <div className="rb-search-with-icone">
            <input
              className="rb-searchbox"
              type="text"
              placeholder="Search"
              value={searchBox}
              onChange={(e) => onSearchChange(e.target.value)}
            />
            <FontAwesomeIcon
              className="rb-search-pag"
              icon={faMagnifyingGlass}
            />
          </div>
          <button
            className={`listing-button ${
              view === "NA-feature-card" ? "rb-view-active" : ""
            }`}
            onClick={() => handleButtonClick(1)}
          >
            <svg
              className="NA-view-svg"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.5 0.5V7.16667H7.16667V0.5H0.5ZM0.5 8.83333V15.5H7.16667V8.83333H0.5ZM8.83333 0.5V7.16667H15.5V0.5H8.83333ZM8.83333 8.83333V15.5H15.5V8.83333H8.83333Z"
              />
            </svg>
          </button>
          <button
            className={`listing-button ${
              view === "rb-listing" ? "rb-view-active" : ""
            }`}
            onClick={() => handleButtonClick(2)}
          >
            <svg
              className="NA-view-svg"
              viewBox="0 0 16 11"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.291992 7.04175H2.58366V4.75008H0.291992V7.04175ZM0.291992 11.0001H2.58366V8.70842H0.291992V11.0001ZM0.291992 3.08341H2.58366V0.791748H0.291992V3.08341ZM4.25033 7.04175H15.7087V4.75008H4.25033V7.04175ZM4.25033 11.0001H15.7087V8.70842H4.25033V11.0001ZM4.25033 0.791748V3.08341H15.7087V0.791748H4.25033Z" />
            </svg>
          </button>

          <button className="NA-filter-btn" onClick={showSidebar}>
            <FontAwesomeIcon icon={faFilter} />
          </button>
        </div>
      </div>

      {x ? (
        <FeaturedCoursesCards FeaturedCards={paginatedItems} view={view} />
      ) : (
        <ArticlesCards ArticleCards={paginatedItems} view={view} />
      )}
      <ul className="rb-ul-pagination">
        <li>
          <a
            onClick={() =>
              handlePageChange(currentPage === 1 ? totalPages : currentPage - 1)
            }
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </a>
        </li>
        {[...Array(totalPages)].map((_, i) => (
          <li key={i} className={currentPage === i + 1 ? "rb-PageActive" : ""}>
            <a onClick={() => handlePageChange(i + 1)}>{i + 1}</a>
          </li>
        ))}
        <li>
          <a
            onClick={() =>
              handlePageChange(currentPage === totalPages ? 1 : currentPage + 1)
            }
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </a>
        </li>
      </ul>

      {sidebar ? <FilterBar onClick={showSidebar} /> : ""}
    </div>
  );
};

export default CoursePagination;