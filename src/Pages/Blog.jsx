// for css
import "./../index.css";
import './Blog.css'

// import React from "react";
import { useEffect, useState } from "react";

// for components
import BreadCrumbs from "../Components/BreadCrumbs/BreadCrumbs";
import FilterBar from "../Components/FilterBar/FilterBar";
import CoursePagination from "../Components/Courses/CoursePagination";

// for images
import articlecard1 from "./../../public/assetsProject/imges/card-rb(7).png";
import articlecard2 from "./../../public/assetsProject/imges/card-rb(6).png";
import articlecard3 from "./../../public/assetsProject/imges/card-rb(5).png";
import articlecard4 from "./../../public/assetsProject/imges/card-rb(8).png";
import articlecard5 from "./../../public/assetsProject/imges/card(11).png";
import articlecard6 from "./../../public/assetsProject/imges/card(10).png";

// fontawesome 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFilter} from "@fortawesome/free-solid-svg-icons";
const blog = [
  {
    id: 1,
    img: articlecard1,
    title: "Best LearnPress WordPress Theme Collection for 2023",
    date: "Jan 24, 2023",
    desc: "Looking for an amazing & well-functional LearnPress WordPress Theme?",
  },
  {
    id: 2,
    img: articlecard2,
    title: "Best LearnPress WordPress Theme Collection for 2023",
    date: "Jan 24, 2023",
    desc: "Looking for an amazing & well-functional LearnPress WordPress Theme?",
  },
  {
    id: 3,
    img: articlecard3,
    title: "Best LearnPress WordPress Theme Collection for 2023",
    date: "Jan 24, 2023",
    desc: "Looking for an amazing & well-functional LearnPress WordPress Theme?",
  },
  {
    id: 4,
    img: articlecard4,
    title: "Best LearnPress WordPress Theme Collection for 2023",
    date: "Jan 24, 2023",
    desc: "Looking for an amazing & well-functional LearnPress WordPress Theme?",
  },
  {
    id: 5,
    img: articlecard5,
    title: "Best LearnPress WordPress Theme Collection for 2023",
    date: "Jan 24, 2023",
    desc: "Looking for an amazing & well-functional LearnPress WordPress Theme?",
  },
  {
    id: 6,
    img: articlecard6,
    title: "Best LearnPress WordPress Theme Collection for 2023",
    date: "Jan 24, 2023",
    desc: "Looking for an amazing & well-functional LearnPress WordPress Theme?",
  },
  {
    id: 7,
    img: articlecard2,
    title: "Best LearnPress WordPress Theme Collection for 2023",
    date: "Jan 24, 2023",
    desc: "Looking for an amazing & well-functional LearnPress WordPress Theme?",
  },
  {
    id: 8,
    img: articlecard4,
    title: "Best LearnPress WordPress Theme Collection for 2023",
    date: "Jan 24, 2023",
    desc: "Looking for an amazing & well-functional LearnPress WordPress Theme?",
  },
  {
    id: 9,
    img: articlecard5,
    title: "Best LearnPress WordPress Theme Collection for 2023",
    date: "Jan 24, 2023",
    desc: "Looking for an amazing & well-functional LearnPress WordPress Theme?",
  },
  {
    id: 10,
    img: articlecard1,
    title: "Best LearnPress WordPress Theme Collection for 2023",
    date: "Jan 24, 2023",
    desc: "Looking for an amazing & well-functional LearnPress WordPress Theme?",
  },
  {
    id: 11,
    img: articlecard2,
    title: "Best LearnPress WordPress Theme Collection for 2023",
    date: "Jan 24, 2023",
    desc: "Looking for an amazing & well-functional LearnPress WordPress Theme?",
  },
  {
    id: 12,
    img: articlecard1,
    title: "Best LearnPress WordPress Theme Collection for 2023",
    date: "Jan 24, 2023",
    desc: "Looking for an amazing & well-functional LearnPress WordPress Theme?",
  },
  {
    id: 13,
    img: articlecard3,
    title: "Best LearnPress WordPress Theme Collection for 2023",
    date: "Jan 24, 2023",
    desc: "Looking for an amazing & well-functional LearnPress WordPress Theme?",
  },
  {
    id: 14,
    img: articlecard5,
    title: "Best LearnPress WordPress Theme Collection for 2023",
    date: "Jan 24, 2023",
    desc: "Looking for an amazing & well-functional LearnPress WordPress Theme?",
  },
  {
    id: 15,
    img: articlecard6,
    title: "Best LearnPress WordPress Theme Collection for 2023",
    date: "Jan 24, 2023",
    desc: "Looking for an amazing & well-functional LearnPress WordPress Theme?",
  },
  {
    id: 16,
    img: articlecard1,
    title: "Best LearnPress WordPress Theme Collection for 2023",
    date: "Jan 24, 2023",
    desc: "Looking for an amazing & well-functional LearnPress WordPress Theme?",
  },
  {
    id: 17,
    img: articlecard3,
    title: "Best LearnPress WordPress Theme Collection for 2023",
    date: "Jan 24, 2023",
    desc: "Looking for an amazing & well-functional LearnPress WordPress Theme?",
  },
  {
    id: 18,
    img: articlecard4,
    title: "Best LearnPress WordPress Theme Collection for 2023",
    date: "Jan 24, 2023",
    desc: "Looking for an amazing & well-functional LearnPress WordPress Theme?",
  },
];


export default function Blog() {
  const [searchBox, setSearchBox] = useState("");
  
  const handleSearchChange = (value) => {
    setSearchBox(value);
  };
  const filteredRecords = blog.filter((val) => {
  if (searchBox === "") {
      return val;
    } else if (val.title.toLowerCase().includes(searchBox.toLowerCase())) {
      return val;
    }
    return null;
  });

  return (
    <div className="NA-blog-relative">
    <BreadCrumbs />
    <div className="Project-Container">
      <div className="NA-blog">
        <CoursePagination
          searchBox={searchBox}
          onSearchChange={handleSearchChange}
          items={filteredRecords}
          x={false}
          title="All Articles"
        />
        <div className="SHaaban-sideBar-blog-listing">
          <FilterBar />

          
        </div>
        
      </div>
    </div>
  </div>
  );
}
