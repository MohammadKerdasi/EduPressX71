import React from "react";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FilterBar from "../../FilterBar/FilterBar";
import "./ShowFilter.css";

export default function ShowFilter() {
  // قسم الهوكس
  // تراقب حالة زر الفلتر بار
  let [filterBarStatus, setFilterBarStatus] = useState(false);

  // قسم الدوال
  // تابع يتعامل مع زر الفلتر بار
  function handleFilterBarBtn() {
    setFilterBarStatus(!filterBarStatus);
  }

  return (
    <>
      <button
        onClick={handleFilterBarBtn}
        className="SHaaban-adding-style-for-filterBar-btn"
      >
        <p id="SHaaban-filter-btn-text">
          {filterBarStatus ? "Close" : "Show"} Filter
        </p>
        <div>
          {filterBarStatus ? (
            <FontAwesomeIcon icon={faArrowUp} />
          ) : (
            <FontAwesomeIcon icon={faArrowDown} />
          )}
        </div>
      </button>
      <div
        className={
          filterBarStatus
            ? "SHaaban-sideBar-blog-listing-with-click-on-filter-btn"
            : "hidden"
        }
      >
        <FilterBar />
      </div>
    </>
  );
}
