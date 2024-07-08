import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./Pagination.css";

export default function Pagination({
  commentsPerPageProp,
  totalCommentsProp,
  paginate,
  handlePaginationWithArrowINC,
  handlePaginationWithArrowDEC,
}) {
  const pageNumbers = [];

  const [activePage, setActivePage] = useState(1);

  function handleActivePage(number) {
    setActivePage(number);
  }
  function handleActivePageWithArrowINC() {
    if (activePage < pageNumbers.length) {
      setActivePage(activePage + 1);
    }
  }
  function handleActivePageWithArrowDEC() {
    if (activePage > 1) {
      setActivePage(activePage - 1);
    }
  }

  for (
    let i = 1;
    i <= Math.ceil(totalCommentsProp / commentsPerPageProp);
    i++
  ) {
    pageNumbers.push(i);
  }
  return (
    <div className="SHaaban-adding-flex-center">
      <ul className="SHaaban-pagination-container">
        <li
          onClick={() => {
            handlePaginationWithArrowDEC();
            handleActivePageWithArrowDEC();
          }}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </li>
        {pageNumbers.map((number) => {
          return (
            <li
              className={activePage === number ? "active" : ""}
              onClick={() => {
                handleActivePage(number);
                paginate(number);
              }}
              key={number}
            >
              {number}
            </li>
            
          );
        })}
        <li
          onClick={() => {
            handlePaginationWithArrowINC();
            handleActivePageWithArrowINC();
          }}
        >
          
          <FontAwesomeIcon icon={faChevronRight} />
        </li>
      </ul>
    </div>
  );
}
