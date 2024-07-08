import { useState } from "react";

// for css
import "./../index.css";
import "./../Components/FeaturedCoursesCards/FeaturedCoursesCards.css";

// for components
import FeaturedCoursesCards from "../Components/FeaturedCoursesCards/FeaturedCorsesCards";
import ExploreCourses from "../Components/ExploreCourses/ExploreCourses";
import HomePageHero from "../Components/HomePageHero/HomePageHero";
import CategoriesCards from "../Components/CategoriesCards/CategoriesCards";
import CounterCards from "../Components/CounterCards/CounterCards";
import GrowSkills from "../Components/GrowSkills/GrowSkills";
import ExploreCourses2 from "../Components/ExploreCourses2/ExploreCourses2";
import StudentsFeedback from "../Components/StudentsFeedback/StudentsFeedback";
import StartAcademy from "../Components/StartAcademy/StartAcademy";
import ArticlesCards from "../Components/ArticlesCards/ArticlesCards";
import Title from "../Components/Title/Title";

// for images
import featuredcard1 from "./../../public/assetsProject/imges/card(1).png";
import featuredcard2 from "./../../public/assetsProject/imges/card(2).png";
import featuredcard3 from "./../../public/assetsProject/imges/card(3).png";
import featuredcard4 from "./../../public/assetsProject/imges/card(4).png";
import featuredcard5 from "./../../public/assetsProject/imges/card(5).png";
import featuredcard6 from "./../../public/assetsProject/imges/card(6).png";

import articlecard1 from "./../../public/assetsProject/imges/card(7).png";
import articlecard2 from "./../../public/assetsProject/imges/card(8).png";
import aeticlecard3 from "./../../public/assetsProject/imges/card(9).png";

import { Link } from "react-router-dom";

export default function Home() {
  const [FeaturedCards] = useState([
    {
      id: 1,
      img: featuredcard6,
      note: "Photography",
      detail: " Determined-Poitras",
      title: "Create an lms website with learnPress",
      time: "2Weeks",
      number: "156 Students",
      levels: "All Levels",
      lessons: "20 Lessons",
      price: "29.0",
      viewMore: "view more",
    },
    {
      id: 2,
      img: featuredcard1,
      note: "Photography",
      detail: " Determined-Poitras",
      title: "design a website with thimPress",
      time: "2Weeks",
      number: "156 Students",
      levels: "All Levels",
      lessons: "20 Lessons",
      price: "29.0",
      viewMore: "view more",
    },
    {
      id: 3,
      img: featuredcard2,
      note: "Photography",
      detail: " Determined-Poitras",
      title: "Create an lms website with learnPress",
      time: "2Weeks",
      number: "156 Students",
      levels: "All Levels",
      lessons: "20 Lessons",
      price: "29.0",
      viewMore: "view more",
    },
    {
      id: 4,
      img: featuredcard3,
      note: "Photography",
      detail: " Determined-Poitras",
      title: "Create an lms website with learnPress",
      time: "2Weeks",
      number: "156 Students",
      levels: "All Levels",
      lessons: "20 Lessons",
      price: "29.0",
      viewMore: "view more",
    },
    {
      id: 5,
      img: featuredcard4,
      note: "Photography",
      detail: " Determined-Poitras",
      title: "Create an lms website with learnPress",
      time: "2Weeks",
      number: "156 Students",
      levels: "All Levels",
      lessons: "20 Lessons",
      price: "29.0",
      viewMore: "view more",
    },
    {
      id: 6,
      img: featuredcard5,
      note: "Photography",
      detail: " Determined-Poitras",
      title: "Create an lms website with learnPress",
      time: "2Weeks",
      number: "156 Students",
      levels: "All Levels",
      lessons: "20 Lessons",
      price: "29.0",
      viewMore: "view more",
    },
  ]);

  const [ArticleCards] = useState([
    {
        id: 1,
        img: articlecard2,
        title: "Best LearnPress WordPress Theme Collection for 2023",
        date: "Jan 24, 2023",
        desc: "Looking for an amazing & well-functional LearnPress WordPress Theme?"
    },
    {
        id: 2,
        img: aeticlecard3,
        title: "Best LearnPress WordPress Theme Collection for 2023",
        date: "Jan 24, 2023",
        desc: "Looking for an amazing & well-functional LearnPress WordPress Theme?"
    },
    {
        id: 3,
        img: articlecard1,
        title: "Best LearnPress WordPress Theme Collection for 2023",
        date: "Jan 24, 2023",
        desc: "Looking for an amazing & well-functional LearnPress WordPress Theme?"
    },
])

  return (
    <>
      <HomePageHero />
      <CategoriesCards />
      <section className="NA-featuredCards-Section NA-Project-Container block">
        <Title
          header="featured courses"
          desc="Explore our Popular courses"
          btn=" all courses "
          showBtn={true}
          link="/Courses"
        />
        <FeaturedCoursesCards FeaturedCards={FeaturedCards} className="block" />
        <Link className="NA-header-btn NA-btn-effect NA-hidden-btn" to="/Courses">
          all courses
        </Link>
      </section> {/* end of NA-featuredCards-Section */}

      <CounterCards />
      <ExploreCourses  />
      <GrowSkills  />
      <ExploreCourses2  />
      <StudentsFeedback  />
      <StartAcademy  />

      <section className="NA-articlesCards-Section NA-Project-Container block">
        <Title
          header="latest articles"
          desc="Explore our Free Acticles"
          btn=" all articles "
          showBtn="true"
          link="/Blog"
        />
        <ArticlesCards ArticleCards={ArticleCards}/>

        <Link className="NA-header-btn NA-btn-effect NA-hidden-btn" to="/Blog">
          all articles
        </Link>
      </section> {/* end of NA-articlesCards-Section */}
      

    </>
  );
}
