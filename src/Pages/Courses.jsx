import React, { useState } from "react";
import BreadCrumbs from "../Components/BreadCrumbs/BreadCrumbs";
import CoursePagination from "../Components/Courses/CoursePagination";
import CoursesSidebar from "../Components/CoursesSidebar/CoursesSidebar";
import "../Components/CoursesSidebar/CoursesSidebar.css";
import "./Courses.css";
import CardImg1 from './../../public/assetsProject/imges/card-rb(1).png'
import CardImg2 from './../../public/assetsProject/imges/card-rb(2).png'
import CardImg3 from './../../public/assetsProject/imges/card-rb(3).png'
import CardImg4 from './../../public/assetsProject/imges/card-rb(4).png'
import CardImg5 from './../../public/assetsProject/imges/card-rb(5).png'
import CardImg6 from './../../public/assetsProject/imges/card-rb(6).png'
import CardImg7 from './../../public/assetsProject/imges/card-rb(7).png'
import CardImg8 from './../../public/assetsProject/imges/card-rb(8).png'
import CardImg9 from './../../public/assetsProject/imges/card-rb(9).png'

//mycode
const Service1 = [
  {
  id: 1,

      img: CardImg1 ,
      note: "Photography",
      detail: " Determined-Poitras",
      title: "Create an lms website with learnPress",
      time: "2Weeks",
      number: "156 Students",
      lessons: "20 Lessons",
      viewMore: "view more",
      price: "29.0",
      levels: "All Levels",
      category: "Commercial",
      Review: "one",
      Level: "Beginner",
      Instructors: "KennyWhite",
    PriceCourses: "Paid",

  },
  {
  id: 2,
      img: CardImg2,
      note: "Photography",
      detail: " Determined-Poitras",
      title: "Create an lms website with learnPress",
      time: "2Weeks",
      number: "156 Students",
      lessons: "20 Lessons",
      viewMore: "view more",
      price: "29.0",
      levels: "All Levels",
      category: "University",
      Review: "four",
      Level: "Beginner",
      Instructors: "KennyWhite",
    PriceCourses: "Free",

  },
  {
  id: 3,
      img: CardImg3,
      note: "Photography",
      detail: " Determined-Poitras",
      title: "Create an lms website with learnPress",
      time: "2Weeks",
      number: "156 Students",
      lessons: "20 Lessons",
      viewMore: "view more",
      price: "29.0",
      levels: "All Levels",
      category: "University",
      Review: "five",
      Level: "Beginner",
      Instructors: "JohnDoe",
    PriceCourses: "Paid",

  },
  {
  id: 4,
      img: CardImg4,
      note: "Photography",
      detail: " Determined-Poitras",
      title: "Create an lms website with learnPress",
      time: "2Weeks",
      number: "156 Students",
      lessons: "20 Lessons",
      viewMore: "view more",
      price: "29.0",
      levels: "All Levels",
      category: "Academy",
      Review: "five",
      Level: "Beginner",
      Instructors: "KennyWhite",
    PriceCourses: "Paid",

  },
  {
  id: 5,
      img: CardImg5,
      note: "Photography",
      detail: " Determined-Poitras",
      title: "Create an lms website with learnPress",
      time: "2Weeks",
      number: "156 Students",
      lessons: "20 Lessons",
      viewMore: "view more",
      price: "29.0",
      levels: "All Levels",
      category: "Educate",
      Review: "one",
      Level: "Beginner",
      Instructors: "JohnDoe",
    PriceCourses: "Free",

  },
  {
  id: 6,
      img: CardImg6,
      note: "Photography",
      detail: " Determined-Poitras",
      title: "Create an lms website with learnPress",
      time: "2Weeks",
      number: "156 Students",
      lessons: "20 Lessons",
      viewMore: "view more",
      price: "29.0",
      levels: "All Levels",
      category: "Educate",
      Review: "five",
      Level: "Beginner",
      Instructors: "KennyWhite",
    PriceCourses: "Free",

  },
  {
  id: 7,
      img: CardImg7,
      note: "Photography",
      detail: " Determined-Poitras",
      title: "Create an lms website with learnPress",
      time: "2Weeks",
      number: "156 Students",
      
      lessons: "20 Lessons",
      price: "29.0",

      levels: "All Levels",
      category: "Shop",
      Review: "three",
      Level: "Intermediate",
      Instructors: "KennyWhite",
    PriceCourses: "Paid",

  },
  {
  id: 8,
      img: CardImg8,
      note: "Photography",
      detail: " Determined-Poitras",
      title: "Create an lms website with learnPress",
      time: "2Weeks",
      number: "156 Students",
      lessons: "20 Lessons",
      price: "29.0",
      viewMore: "view more",
    category: "Educate",
    Review: "one",
    Level: "Expert",
    Instructors: "KennyWhite",
    Price: "Free",
  },
  {

  id: 9,
      img: CardImg9,
      note: "Photography",
      detail: " Determined-Poitras",
      title: "Create an lms website with learnPress",
      time: "2Weeks",
      number: "156 Students",
      lessons: "20 Lessons",
      viewMore: "view more",
      price: "29.0",
      levels: "All Levels",
      category: "Shop",
      Review: "two",
      Level: "Intermediate",
      Instructors: "JohnDoe",
    PriceCourses: "Free",

  },
  {
  id: 10,
      img: CardImg1,
      note: "Photography",
      detail: " Determined-Poitras",
      title: "Create an lms website with learnPress",
      time: "2Weeks",
      number: "156 Students",
      lessons: "20 Lessons",
      viewMore: "view more",
      price: "29.0",
      levels: "All Levels",
      category: "University",
      Review: "three",
      Level: "Intermediate",
      Instructors: "KennyWhite",
    PriceCourses: "Paid",

  },
  {
  id: 11,
      img: CardImg2,
      note: "Photography",
      detail: " Determined-Poitras",
      title: "Create an lms website with learnPress",
      time: "2Weeks",
      number: "156 Students",
      lessons: "20 Lessons",
      viewMore: "view more",
      price: "29.0",
      levels: "All Levels",
      category: "Studio",
      Review: "four",
      Level: "Intermediate",
      Instructors: "JohnDoe",
    PriceCourses: "Paid",

  },
  {
  id: 12,
      img: CardImg3,
      note: "Photography",
      detail: " Determined-Poitras",
      title: "Create an lms website with learnPress",
      time: "2Weeks",
      number: "156 Students",
      lessons: "20 Lessons",
      viewMore: "view more",
      price: "29.0",
      levels: "All Levels",
      category: "Office",
      Review: "two",
      Level: "Intermediate",
      Instructors: "JohnDoe",
    PriceCourses: "Free",

  },
  {
  id: 13,
      img: CardImg4,
      note: "Photography",
      detail: " Determined-Poitras",
      title: "Create an lms website with learnPress",
      time: "2Weeks",
      number: "156 Students",
      lessons: "20 Lessons",
      viewMore: "view more",
      price: "29.0",
      levels: "All Levels",
      category: "Academy",
      Review: "four",
      Level: "Expert",
      Instructors: "KennyWhite",
    PriceCourses: "Free",

  },
  {
  id: 14,
      img: CardImg5,
      note: "Photography",
      detail: " Determined-Poitras",
      title: "Create an lms website with learnPress",
      time: "2Weeks",
      number: "156 Students",
      levels: "All Levels",

      category: "Studio",
      Review: "two",
      Level: "Expert",
      Instructors: "JohnDoe",
    PriceCourses: "Paid",

  },
  {
  id: 15,
      img: CardImg6,
      note: "Photography",
      detail: " Determined-Poitras",
      title: "Create an lms website with learnPress",
      time: "2Weeks",
      number: "156 Students",
      lessons: "20 Lessons",
      price: "29.0",

      levels: "All Levels",
      category: "Office",
      Review: "five",
      Level: "Expert",
      Instructors: "JohnDoe",
    PriceCourses: "Free",

  },
  {
  id: 16,
      img: CardImg7,
      note: "Photography",
      detail: " Determined-Poitras",
      title: "Create an lms website with learnPress",
      time: "2Weeks",
      number: "156 Students",
      lessons: "20 Lessons",

      viewMore: "view more",
    category: "Shop",
    Review: "three",
    Level: "Expert",
    Instructors: "JohnDoe",
    Price: "Free",
  },
  {

  id: 17,
      img: CardImg8,
      note: "Photography",
      detail: " Determined-Poitras",
      title: "Create an lms website with learnPress",
      time: "2Weeks",
      number: "156 Students",
      lessons: "20 Lessons",
      viewMore: "view more",
      price: "29.0",
      levels: "All Levels",
      category: "family",
      Review: "five",
      Level: "Expert",
      Instructors: "KennyWhite",
    PriceCourses: "Free",

  },
  {
  id: 18,
      img: CardImg9,
      note: "Photography",
      detail: " Determined-Poitras",
      title: "Create an lms website with learnPress",
      time: "2Weeks",
      number: "156 Students",
      lessons: "20 Lessons",
      viewMore: "view more",
      price: "29.0",
      levels: "All Levels",
      category: "Commercial",
      Review: "five",
      Level: "Expert",
      Instructors: "JohnDoe",
    PriceCourses: "Free",

  }
];

export default function Courses() {
  const [searchBox, setSearchBox] = useState("");

  const handleSearchChange = (value) => {
    setSearchBox(value);
  };


 const [selectedFilters, setSelectedFilters] = useState({
    Commercial: false,
    Office: false,
    Shop: false,
    Educate: false,
    Academy: false,
    family: false,
    Studio: false,
    University: false,
    KennyWhite: false,
    JohnDoe: false,
    All: false,
    Free: false,
    Paid: false,
    five: false,
    four: false,
    three: false,
    two: false,
    one: false,
    "All levels": false,
    Beginner: false,
    Intermediate: false,
    Expert: false,
  });

  const filteredRecords = Service1.filter((val) => {
    const matchesCategory =
      (!selectedFilters.Commercial &&
        !selectedFilters.Office &&
        !selectedFilters.University &&
        !selectedFilters.Studio &&
        !selectedFilters.family &&
        !selectedFilters.Academy &&
        !selectedFilters.Educate &&
        !selectedFilters.Shop) ||
      selectedFilters[val.category];
    const matchesReview =
      (!selectedFilters.five &&
        !selectedFilters.four &&
        !selectedFilters.three &&
        !selectedFilters.two &&
        !selectedFilters.one) ||
      selectedFilters[val.Review.toLowerCase()];
    const matchesLevel =
      (!selectedFilters.Beginner &&
        !selectedFilters.Intermediate &&
        !selectedFilters.Expert) ||
      selectedFilters[val.Level];
    const matchesInstructors =
      (!selectedFilters.KennyWhite && !selectedFilters.JohnDoe) ||
      selectedFilters[val.Instructors];
    const matchesPrice =
      (!selectedFilters.Free && !selectedFilters.Paid) ||
      selectedFilters[val.Price];

    return (
      matchesCategory &&
      matchesInstructors &&
      matchesPrice &&
      matchesReview &&
      matchesLevel
    );
    //_____________________________________________________________________________________________________________________________________
  }).filter((val) => {
   if (searchBox === "") {
      return val;
    } else if (val.title.toLowerCase().includes(searchBox.toLowerCase())) {
      return val;
    }
    return null;
  }); 

  return (
    <>
      <BreadCrumbs />
      <div className="Courses Project-Container">
        <CoursePagination
          searchBox={searchBox}
          onSearchChange={handleSearchChange}
          items={filteredRecords}
          title="All Courses"
          x="True"
        />
        <CoursesSidebar
          filters={selectedFilters}
          onFilterChange={setSelectedFilters}
        />
        
      </div>
    </>
  );
}
