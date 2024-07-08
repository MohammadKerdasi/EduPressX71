import { useState, useRef } from "react";
import "./CourseSingleDetail.css";
//  import Col from "react-bootstrap/Col";
//  import Form from "react-bootstrap/Form";
//  import Row from "react-bootstrap/Row";
// import FloatingLabel from "react-bootstrap/FloatingLabel";
// import ContactTitle from "../ContactTitle/ContactTitle";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Accordion from "./../CourseSingleAccordions/CourseSingleAccordions.jsx";
import Lesson_Icon from "./../../../public/assetsProject/imges/lesson.png";
import Right_sign from "./../../../public/assetsProject/imges/rightsign.svg";
import lock_sign from "./../../../public/assetsProject/imges/lock.svg";
import Course_single_img from "./../../../public/assetsProject/imges/course-single.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaste } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import {
  faXTwitter,
  faPinterest,
  faInstagram,
  faFacebookF,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

import SingleCourseFAQs from "../SinglePageFAQs/SinglePageFAQs.jsx";
import filled_star from "./../../../public/assetsProject/imges/filled-star.png";
import not_filled_star from "./../../../public/assetsProject/imges/not-filled-star.png";
import Card_img from './../../../public/assetsProject/imges/card(6).png'
import GirlImg from "./../../../public/assetsProject/imges/card(12).png";
import ReplayIcon from "./../../../public/assetsProject/imageFromHaidar/Vector.svg";




const Overview = () => {
  return (
    <div>
      <p className="Mk-OverViewP">
        LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This
        is one of the best WordPress LMS Plugins which can be used to easily
        create & sell courses online. You can create a course curriculum with
        lessons & quizzes included which is managed with an easy-to-use
        interface for users. Having this WordPress LMS Plugin, now you have a
        chance to quickly and easily create education, online school,
        online-course websites with no coding knowledge required.
      </p>

      <p className="Mk-OverViewP">
        LearnPress is free and always will be, but it is still a premium
        high-quality WordPress Plugin that definitely helps you with making
        money from your WordPress Based LMS. Just try and see how amazing it is.
        LearnPress WordPress Online Course plugin is lightweight and super
        powerful with lots of Add-Ons to empower its core system.How to use WPML
        Add-on for LearnPress? No comments yet! You be the first to comment.
      </p>
    </div>
  );
};

const Curriculum = () => {
  return (
    <div>
      <p className="Mk-OverViewP">
        LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This
        is one of the best WordPress LMS Plugins which can be used to easily
        create & sell courses online.
      </p>

      <Accordion
        title="Lessons With Video Content"
        subTitle="5 Lessons "
        subTitle2="45 Mins"
      >
        <ul className="Mk-AccordionUl">
          <li>
            <div className="Mk-liMargin">
              <img className="Mk-LessonIcon" src={Lesson_Icon} alt="" />{" "}
              <span>Lessons with video content</span>
            </div>
            <div className="Mk-Priview">
              <button className="MK-Accordion-btn">
                <p>Preview</p>
              </button>
              <span className="Mk-Li-Span">12:30</span>
              <div>
                <img className="Mk-RightSign" src={Right_sign} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div>
              <img className="Mk-LessonIcon" src={Lesson_Icon} alt="" />{" "}
              <span>Lessons with video content</span>
            </div>
            <div className="Mk-Priview">
              <button className="MK-Accordion-btn">
                <p>Preview</p>
              </button>
              <span className="Mk-Li-Span">12:30</span>
              <div>
                <img src={Right_sign} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div>
              <img className="Mk-LessonIcon" src={Lesson_Icon} alt="" />{" "}
              <span>Lessons with video content</span>
            </div>
            <div className="Mk-Priview">
              <button className="MK-Accordion-btn">
                <p>Preview</p>
              </button>
              <span className="Mk-Li-Span Mk-225">2:25</span>
              <div>
                <img className="Mk-lockSign" src={lock_sign} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div>
              <img className="Mk-LessonIcon" src={Lesson_Icon} alt="" />{" "}
              <span>Lessons with video content</span>
            </div>
            <div className="Mk-Priview">
              <button className="MK-Accordion-btn">
                <p>Preview</p>
              </button>
              <span className="Mk-Li-Span Mk-225">2:25</span>
              <div>
                <img className="Mk-lockSign" src={lock_sign} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div>
              <img className="Mk-LessonIcon" src={Lesson_Icon} alt="" />{" "}
              <span>Lessons with video content</span>
            </div>
            <div className="Mk-Priview">
              <button className="MK-Accordion-btn">
                <p>Preview</p>
              </button>
              <span className="Mk-Li-Span Mk-225">2:25</span>
              <div>
                <img className="Mk-lockSign" src={lock_sign} alt="" />
              </div>
            </div>
          </li>
        </ul>
      </Accordion>
      <Accordion
        title="Lessons With Video Content"
        subTitle="3 Lessons "
        subTitle2="45 Mins"
      >
        <ul className="Mk-AccordionUl">
          <li>
            <div className="Mk-liMargin">
              <img className="Mk-LessonIcon" src={Lesson_Icon} alt="" />{" "}
              <span>Lessons with video content</span>
            </div>
            <div className="Mk-Priview">
              <button className="MK-Accordion-btn">
                <p>Preview</p>
              </button>
              <span className="Mk-Li-Span">12:30</span>
              <div>
                <img className="Mk-RightSign" src={Right_sign} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div>
              <img className="Mk-LessonIcon" src={Lesson_Icon} alt="" />{" "}
              <span>Lessons with video content</span>
            </div>
            <div className="Mk-Priview">
              <button className="MK-Accordion-btn">
                <p>Preview</p>
              </button>
              <span className="Mk-Li-Span">12:30</span>
              <div>
                <img className="Mk-RightSign" src={Right_sign} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div>
              <img className="Mk-LessonIcon" src={Lesson_Icon} alt="" />{" "}
              <span>Lessons with video content</span>
            </div>
            <div className="Mk-Priview">
              <button className="MK-Accordion-btn">
                <p>Preview</p>
              </button>
              <span className="Mk-Li-Span Mk-225">2:25</span>
              <div>
                <img className="Mk-lockSign" src={lock_sign} alt="" />
              </div>
            </div>
          </li>
        </ul>
      </Accordion>
      <Accordion
        title="Lessons With Video Content"
        subTitle="5 Lessons "
        subTitle2="45 Mins"
      >
        <ul className="Mk-AccordionUl">
          <li>
            <div className="Mk-liMargin">
              <img className="Mk-LessonIcon" src={Lesson_Icon} alt="" />{" "}
              <span>Lessons with video content</span>
            </div>
            <div className="Mk-Priview">
              <button className="MK-Accordion-btn">
                <p>Preview</p>
              </button>
              <span className="Mk-Li-Span">12:30</span>
              <div>
                <img className="Mk-RightSign" src={Right_sign} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div>
              <img className="Mk-LessonIcon" src={Lesson_Icon} alt="" />{" "}
              <span>Lessons with video content</span>
            </div>
            <div className="Mk-Priview">
              <button className="MK-Accordion-btn">
                <p>Preview</p>
              </button>
              <span className="Mk-Li-Span">12:30</span>
              <div>
                <img className="Mk-RightSign" src={Right_sign} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div>
              <img className="Mk-LessonIcon" src={Lesson_Icon} alt="" />{" "}
              <span>Lessons with video content</span>
            </div>
            <div className="Mk-Priview">
              <button className="MK-Accordion-btn">
                <p>Preview</p>
              </button>
              <span className="Mk-Li-Span Mk-225">2:25</span>
              <div>
                <img className="Mk-lockSign" src={lock_sign} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div>
              <img className="Mk-LessonIcon" src={Lesson_Icon} alt="" />{" "}
              <span>Lessons with video content</span>
            </div>
            <div className="Mk-Priview">
              <button className="MK-Accordion-btn">
                <p>Preview</p>
              </button>
              <span className="Mk-Li-Span Mk-225">2:25</span>
              <div>
                <img className="Mk-lockSign" src={lock_sign} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div>
              <img className="Mk-LessonIcon" src={Lesson_Icon} alt="" />{" "}
              <span>Lessons with video content</span>
            </div>
            <div className="Mk-Priview">
              <button className="MK-Accordion-btn">
                <p>Preview</p>
              </button>
              <span className="Mk-Li-Span Mk-225">2:25</span>
              <div>
                <img className="Mk-lockSign" src={lock_sign} alt="" />
              </div>
            </div>
          </li>
        </ul>
      </Accordion>
      <Accordion
        title="Lessons With Video Content"
        subTitle="5 Lessons "
        subTitle2="45 Mins"
      >
        <ul className="Mk-AccordionUl">
          <li>
            <div className="Mk-liMargin">
              <img className="Mk-LessonIcon" src={Lesson_Icon} alt="" />{" "}
              <span>Lessons with video content</span>
            </div>
            <div className="Mk-Priview">
              <button className="MK-Accordion-btn">
                <p>Preview</p>
              </button>
              <span className="Mk-Li-Span">12:30</span>
              <div>
                <img className="Mk-RightSign" src={Right_sign} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div>
              <img className="Mk-LessonIcon" src={Lesson_Icon} alt="" />{" "}
              <span>Lessons with video content</span>
            </div>
            <div className="Mk-Priview">
              <button className="MK-Accordion-btn">
                <p>Preview</p>
              </button>
              <span className="Mk-Li-Span">12:30</span>
              <div>
                <img className="Mk-RightSign" src={Right_sign} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div>
              <img className="Mk-LessonIcon" src={Lesson_Icon} alt="" />{" "}
              <span>Lessons with video content</span>
            </div>
            <div className="Mk-Priview">
              <button className="MK-Accordion-btn">
                <p>Preview</p>
              </button>
              <span className="Mk-Li-Span Mk-225">2:25</span>
              <div>
                <img className="Mk-lockSign" src={lock_sign} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div>
              <img className="Mk-LessonIcon" src={Lesson_Icon} alt="" />{" "}
              <span>Lessons with video content</span>
            </div>
            <div className="Mk-Priview">
              <button className="MK-Accordion-btn">
                <p>Preview</p>
              </button>
              <span className="Mk-Li-Span Mk-225">2:25</span>
              <div>
                <img className="Mk-lockSign" src={lock_sign} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div>
              <img className="Mk-LessonIcon" src={Lesson_Icon} alt="" />{" "}
              <span>Lessons with video content</span>
            </div>
            <div className="Mk-Priview">
              <button className="MK-Accordion-btn">
                <p>Preview</p>
              </button>
              <span className="Mk-Li-Span Mk-225">2:25</span>
              <div>
                <img className="Mk-lockSign" src={lock_sign} alt="" />
              </div>
            </div>
          </li>
        </ul>
      </Accordion>
      <Accordion
        title="Lessons With Video Content"
        subTitle="5 Lessons "
        subTitle2="45 Mins"
      >
        <ul className="Mk-AccordionUl">
          <li>
            <div className="Mk-liMargin">
              <img className="Mk-LessonIcon" src={Lesson_Icon} alt="" />{" "}
              <span>Lessons with video content</span>
            </div>
            <div className="Mk-Priview">
              <button className="MK-Accordion-btn">
                <p>Preview</p>
              </button>
              <span className="Mk-Li-Span">12:30</span>
              <div>
                <img className="Mk-RightSign" src={Right_sign} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div>
              <img className="Mk-LessonIcon" src={Lesson_Icon} alt="" />{" "}
              <span>Lessons with video content</span>
            </div>
            <div className="Mk-Priview">
              <button className="MK-Accordion-btn">
                <p>Preview</p>
              </button>
              <span className="Mk-Li-Span">12:30</span>
              <div>
                <img className="Mk-RightSign" src={Right_sign} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div>
              <img className="Mk-LessonIcon" src={Lesson_Icon} alt="" />{" "}
              <span>Lessons with video content</span>
            </div>
            <div className="Mk-Priview">
              <button className="MK-Accordion-btn">
                <p>Preview</p>
              </button>
              <span className="Mk-Li-Span Mk-225">2:25</span>
              <div>
                <img className="Mk-lockSign" src={lock_sign} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div>
              <img className="Mk-LessonIcon" src={Lesson_Icon} alt="" />{" "}
              <span>Lessons with video content</span>
            </div>
            <div className="Mk-Priview">
              <button className="MK-Accordion-btn">
                <p>Preview</p>
              </button>
              <span className="Mk-Li-Span Mk-225">2:25</span>
              <div>
                <img className="Mk-lockSign" src={lock_sign} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div>
              <img className="Mk-LessonIcon" src={Lesson_Icon} alt="" />{" "}
              <span>Lessons with video content</span>
            </div>
            <div className="Mk-Priview">
              <button className="MK-Accordion-btn">
                <p>Preview</p>
              </button>
              <span className="Mk-Li-Span Mk-225">2:25</span>
              <div>
                <img className="Mk-lockSign" src={lock_sign} alt="" />
              </div>
            </div>
          </li>
        </ul>
      </Accordion>
    </div>
  );
};

const Instructor = () => {
  return (
    <>
      <div className="w-100 d-flex justify-content-between gap-4 Mk-flex-direction">
        <div>
          <img
            className="Mk-course-single-img"
            src={Course_single_img}
            alt=""
          />
        </div>
        <div className="Mk-instructor-contact">
          <h4>ThimPress</h4>
          <p>
            LearnPress is a comprehensive WordPress LMS Plugin for WordPress.
            This is one of the best WordPress LMS Plugins which can be used to
            easily create & sell courses online.
          </p>
          <div className="Mk-ThimPressUl">
            <ul>
              <li className="Mk-Instructor-Li">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  size="2xs"
                  style={{ color: "var(--main-color)" }}
                />
                <span> 156 Students </span>{" "}
              </li>
              <li className="Mk-Instructor-Li">
                <FontAwesomeIcon
                  icon={faPaste}
                  size="2xs"
                  style={{ color: "var(--main-color)" }}
                />{" "}
                <span> 20 Lessons </span>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="Mk-LearnPress-p">
        LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This
        is one of the best WordPress LMS Plugins which can be used to easily
        create & sell courses online.
      </p>
      <div className="Mk-LinksLearnPress">
        <div className="Mk-Links">
          <span>Follow:</span>
          <a href="#">
            <FontAwesomeIcon
              style={{ color: "var(--dark-grey)" }}
              size="xs"
              icon={faFacebookF}
            />
          </a>
          <a href="#">
            <FontAwesomeIcon
              style={{ color: "var(--dark-grey)" }}
              size="xs"
              icon={faPinterest}
            />
          </a>
          <a href="#">
            <FontAwesomeIcon
              style={{ color: "var(--dark-grey)" }}
              size="xs"
              icon={faXTwitter}
            />
          </a>
          <a href="#">
            <FontAwesomeIcon
              style={{ color: "var(--dark-grey)" }}
              size="xs"
              icon={faInstagram}
            />
          </a>
          <a href="#">
            <FontAwesomeIcon
              style={{ color: "var(--dark-grey)" }}
              size="xs"
              icon={faYoutube}
            />
          </a>
        </div>
      </div>
    </>
  );
};

const FAQs = () => {
  return (
    <>
      <SingleCourseFAQs />
    </>
  );
};


const Tabs = ({ config }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="Mk-tabs">
      <div className="Mk-tab-headers">
        {config.map((entry, index) => (
          <div
          key={index}
          className={`Mk-tab-header ${activeTab === index ? "active" : ""}`}
          onClick={() => setActiveTab(index)}
          >
            {entry.header}
          </div>
        ))}
      </div>
      <div className="Mk-tab-body">{config[activeTab].component}</div>
    </div>
  );
};
const PaginationReviews = ({
  commentsPerPage,
  totalComments,
  currentPage,
  paginate,
  handlePaginationWithArrowINC,
  handlePaginationWithArrowDEC,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalComments / commentsPerPage); i++) {
    pageNumbers.push(i);
  }
  

  return (
    <div className="Mk-PaginationContainer">
      <button
        className="Mk-PaginationButton"
        onClick={handlePaginationWithArrowDEC}
        disabled={currentPage === 1}
      >
        <FontAwesomeIcon icon={faChevronLeft} size="xs" />
      </button>
      {pageNumbers.map((number) => (
        <span
          key={number}
          className={`Mk-PaginationPageNumber ${
            number === currentPage ? "Mk-ActivePage" : ""
          }`}
          onClick={() => paginate(number)}
        >
          {number}
        </span>
      ))}
      <button
        className="Mk-PaginationButton"
        onClick={handlePaginationWithArrowINC}
        disabled={currentPage === pageNumbers.length}
      >
        <FontAwesomeIcon  icon={faChevronRight} size="xs"/>
      </button>
    </div>
  );
};

const Reviews = ({ comments,   }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 3; // Updated to 3 comments per page

  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = comments.slice(indexOfFirstComment, indexOfLastComment);

  const handlePagination = (pageNumber) => setCurrentPage(pageNumber);

  const handlePaginationArrow = (direction) => {
    if (direction === "next" && currentPage < Math.ceil(comments.length / commentsPerPage)) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <h4 className="Mk-ReviewsHeading">Comments</h4>
      <div className="Mk-40Rating">
        <h1>4.0</h1>
        <div className="Mk-StarsRatings">
          <div className="Mk-Stars">
            <img style={{ width: "18px" }} src={filled_star} alt="star" />
            <img style={{ width: "18px" }} src={filled_star} alt="star" />
            <img style={{ width: "18px" }} src={filled_star} alt="star" />
            <img style={{ width: "18px" }} src={filled_star} alt="star" />
            <img style={{ width: "18px" }} src={not_filled_star} alt="star" />
          </div>
          <p>based on 146,951 ratings</p>
        </div>
      </div>
      {[90, 5, 2, 2, 1].map((percentage, index) => (
        <div className="Mk-Rating" key={index}>
          <span className="Mk-Stars-2">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                className="Mk-Starswidth"
                src={i < percentage / 1.5 ? filled_star : not_filled_star}
                alt="star"
              />
            ))}
          </span>
          <span className="Mk-NumOfRate">{percentage}%</span>
          <div className="Mk-RatingBar">
            <div className="Mk-RatingBarInner" style={{ width: `${percentage}%` }}></div>
          </div>
        </div>
      ))}

      <div className="SHaaban-comment-section Mk-CommentSection">
        {currentComments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
          />
        ))}
      </div>

      <PaginationReviews
        commentsPerPage={commentsPerPage}
        totalComments={comments.length}
        currentPage={currentPage}
        paginate={handlePagination}
        handlePaginationWithArrowINC={() => handlePaginationArrow("next")}
        handlePaginationWithArrowDEC={() => handlePaginationArrow("prev")}
      />
    </>
  );
};

const Comment = ({
  comment
}) => {
  return (
    <div className="SHaaban-comment-body">
      <div className="SHaaban-adding-flex Mk-AddingFlex">
        <img
          className="SHaaban-adding-style-for-comment-imange"
          src={GirlImg}
          alt="user"
        />
        <div className="SHaaban-adding-flex-grow">
          <div className="SHaaban-adding-flex-center-spaceBetween Mk-DateAndUserName">
            <p className="SHaaban-comment-userName Mk-CommentUsername">Laura Hipster</p>
            <p className="SHaaban-comment-date Mk-CommentDate">October 03, 2022</p>
          </div>
          <p className="SHaaban-comment-content Mk-CommentContent">{comment.text}</p>
          <div className="Mk-ReplayIconMargin">
            <img
              src={ReplayIcon}
              alt="reply"
            />
            <span className="SHaaban-adding-style-for-replay Mk-ReplayP ">Reply</span>
          </div>
        </div>
      </div>
      
    </div>
  );
};



const CourseSingleDetail = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      text: "First Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus. At eget euismod cursus non. Molestie dignissim sed volutpat feugiat vel.",
      replys: [],
    },
    {
      id: 2,
      text: "Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus. At eget euismod cursus non. Molestie dignissim sed volutpat feugiat vel.",
      replys: [],
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eius iste eum. Possimus id itaque in?",
      replys: [],
    },
    {
      id: 4,
      text: "Lorem ipsum dolor Eveniet eius iste eum. sit amet consectetur adipisicing elit. Possimus id itaque in?",
      replys: [],
    },
    {
      id: 5,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus id itaque in?",
      replys: [],
    },
  ]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [commentText, setCommentText] = useState("");
  const [isReply, setIsReply] = useState(false);


  const handleSubmit = () => {
    if (isReply) {
      handlePostReply();
    } else {
      const newComment = {
        id: comments.length + 1,
        text: commentText,
        replys: [],
      };

      setComments([newComment, ...comments]);
    }

    setName("");
    setEmail("");
    setCommentText("");
    
  };

  const handlePostReply = () => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === replyCommentId) {
        return {
          ...comment,
          replys: [
            ...comment.replys,
            {
              id: comment.replys.length + 1,
              replayText: commentText,
            },
          ],
        };
      }
      return comment;
    });

    setComments(updatedComments);
  };

  return (
    <>
      <div className="Mk-CourseSingleTabsAndCard">
        <div className="Mk-CommentsAndTabs">
        <Tabs
config={[
  { header: "Overview", component: <Overview /> },
  { header: "Curriculum", component: <Curriculum /> },
  { header: "Instructor", component: <Instructor /> },
  { header: "FAQs", component: <FAQs /> },
  { header: "Reviews", component: <Reviews
      comments={comments}
      handleClickingOnReply={() => {}}
      setIsReply={() => {}}

    />
  },
]}
/>
        </div>
        <div className="Mk-CourseSingleCard">
          <Card className="Mk-CardStyling">
            <Card.Img
              className="Mk-CardImg"
              variant="top"
              src={Card_img}
            />
            <Card.Body className="Mk-CardBody">
              <Card.Text className="Mk-CardText">
                <span>$59.0</span>
                <h4>$49.0</h4>
              </Card.Text>
              <Button className="Mk-CardBtn NA-btn NA-btn-effect">Start now</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="SHaaban-form-area Mk-FormArea">
        <h4 className="SHaaban-form-area-title">Leave A Comment</h4>
        <p className="SHaaban-form-area-paragraph">
          Your email address will not be published. Required fields are marked *
        </p>
        <form id="SHaaban-form-body">
          <div className="SHaaban-styling-form-inputs Mk-formInputs">
            <input
            className="Mk-FormInput1"
              type="text"
              placeholder="Name*"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
            className="Mk-FormInput2"
              type="email"
              placeholder="Email*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <textarea
            className="SHaaban-styling-text-area"
            placeholder="Comment"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          ></textarea>
          <div className="Mk-CheckBoxandP">
          <input className="Mk-CheckBoxReview" type="checkbox" />
          <label htmlFor="SHaaban-checkbox" id="SHaaban-adding-style-for-label">
            Save my name, email in this browser for the next time I comment
          </label>
          </div>
          
        </form>
        <div className="SHaaban-btn-area ">
          <button onClick={handleSubmit} className="NA-btn NA-btn-effect" id="SHaaban-adding-style-for-button">
            {isReply ? 'Post Reply' : 'Post Comment'}
          </button>
        </div>
      </div>
    </>
  );
};

export default CourseSingleDetail;



