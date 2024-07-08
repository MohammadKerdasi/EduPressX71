import React from "react";
import "./BlogDetails.css";
import Pagination from "./../Pagination/Pagination";
import TagsH from "./../TagsH/Tags";
import { useState, useEffect, useRef } from "react";
import BreadCrumbs from "./../BreadCrumbs/BreadCrumbs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
import FilterBar from "../FilterBar/FilterBar";
import ShowFilter from "./ShowFilter/ShowFilter";
import PersonImg from "./../../../public/assetsProject/imageFromHaidar/person.svg";
import CalenderImg from "./../../../public/assetsProject/imageFromHaidar/calender.svg";
import MeassgeImg from "./../../../public/assetsProject/imageFromHaidar/message.svg";
import Card8 from "./../../../public/assetsProject/imges/card(8).png";
import Card9 from "./../../../public/assetsProject/imges/card(9).png";
import Card7 from "./../../../public/assetsProject/imges/card(7).png";
import Card11 from "./../../../public/assetsProject/imges/card(11).png";
import Card10 from "./../../../public/assetsProject/imges/card(10).png";
import Card5 from "./../../../public/assetsProject/imges/card(5).png";
import GirlImg from "./../../../public/assetsProject/imges/card(12).png";
import ReplayIcon from "./../../../public/assetsProject/imageFromHaidar/Vector.svg";


export default function BlogDtails() {
  // مصفوفة مسارات الصور للتبديل بين الصور عند النقر على المقالة السابقة واللاحقة
  const MainImages = [
    
    Card8,
    Card9,
    Card7,
    Card11,
    Card10,
    Card5,
  ];

  // قسم الهوكس
  //  التحكم بالانديكس الخاص بالصورة الرئيسية ومراقبته
  let [index, setIndex] = useState(0);

  // التحكم بمصفوفة الكومينتس ومراقبتها
  let [comments, setComments] = useState([
    {
      id: 1,
      text: "First Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus. At eget euismod cursus non. Molestie dignissim sed volutpat feugiat vel.",
      replys: [
        {
          id: 1,
          replayTetx:
            "Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus. At eget euismod cursus non. Molestie dignissim.",
        },
        {
          id: 2,
          replayTetx:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus id itaque in?",
        },
        {
          id: 3,
          replayTetx:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus id itaque in?",
        },
      ],
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
    {
      id: 6,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. dolor sit amet consectetur adipisicing elit. Possimus id itaque in?",
      replys: [],
    },
    {
      id: 7,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. dolor sit amet consectetur adipisicing elit. Possimus id itaque in?",
      replys: [
        {
          id: 4,
          replayTetx:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus id itaque in?",
        },
        {
          id: 5,
          replayTetx:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus id itaque in?",
        },
        {
          id: 6,
          replayTetx:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus id itaque in?",
        },
        {
          id: 7,
          replayTetx:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus id itaque in?",
        },
      ],
    },
    {
      id: 8,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. dolor sit amet consectetur adipisicing elit. Possimus id itaque in?",
      replys: [],
    },
    {
      id: 9,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. dolor sit amet consectetur adipisicing elit. Possimus id itaque in?",
      replys: [],
    },
    {
      id: 10,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. dolor sit amet consectetur adipisicing elit. Possimus id itaque in?",
      replys: [],
    },
    {
      id: 11,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. dolor sit amet consectetur adipisicing elit. Possimus id itaque in?",
      replys: [],
    },
    {
      id: 12,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. dolor sit amet consectetur adipisicing elit. Possimus id itaque in?",
      replys: [],
    },
    {
      id: 13,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. dolor sit amet consectetur adipisicing elit. Possimus id itaque in?",
      replys: [],
    },
    {
      id: 14,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. dolor sit amet consectetur adipisicing elit. Possimus id itaque in?",
      replys: [],
    },
  ]);

  //
  let [currentPage, setCurrentPage] = useState(1);

  // تتحكم بعدد الكومينتس في صفحة الباجينيشن (Pagination)
  let [commentsPerPage, setCommentsPerPage] = useState(5);

  // مراقبة انبوت الاسم
  let [name, setName] = useState("");

  // مراقبة انبوت الايميل
  let [email, setEmail] = useState("");

  // مراقبة التيكست اريا
  let [commentText, setCommentText] = useState("");

  //  (Posts Replay Comment) تتحكم بحالة زر
  let [displayNone, setDisplayNone] = useState(true);

  // للتيكست اريا Auto Focus تتحكم قي حالة
  let [autoFocus, setAutoFocus] = useState(false);

  // تبين حالة الكومينت فيما اذا كان رد ام لا
  let [isReply, setIsReply] = useState(false);

  // تعيد المعرف الخاص بالرد
  let [replyCommentId, setReplyCommentId] = useState(null);

  // تعيد المعرف الخاص بالرد على الرد
  let [replyOnReplyCommentId, setReplyOnReplyCommentId] = useState(null);

  // انشاء مرجع لربط التيكست اريا به
  const textAreaRef = useRef(null);

  // متغيرات تساعد في الباجينيشن (Pagination)
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = comments.slice(
    indexOfFirstComment,
    indexOfLastComment
  );

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // قسم الدوال

  // تابع ينتقل بالصفحة الي الاعلى
  const scrollToTop = () => {
    window.scrollTo({
      top: 100,
      behavior: "smooth",
    });
  };

  // تابع يتعامل مع مصفوفة مسارات الصور (الرجوع الى الخلف)

  function handleDecIndex() {
    if (index > 0) {
      setIndex(index - 1);
      scrollToTop();
    }
  }

  // تابع يتعامل مع مصفوفة مسارات الصور (التقدم الى الامام)
  function handleIncIndex() {
    if (index < MainImages.length - 1) {
      setIndex(index + 1);
      scrollToTop();
    }
  }

  // تابع يتعامل مع رقم الصفحة القادم من كومبوننت الباجنيشن
  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  // (التقدم الى الامام) التعامل مع صفحات الباجنيشن من خلال الاسهم
  function handlePaginationWithArrowINC() {
    if (currentPage < comments.length / commentsPerPage) {
      setCurrentPage(currentPage + 1);
    }
  }

  // (الرجوع الى الخلف) التعامل مع صفحات الباجنيشن من خلال الاسهم
  function handlePaginationWithArrowDEC() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  // (Submit) تابع يفعل عند النقر على زر
  function handleSubmit() {
    // (newComment) انشاء اوبجيكت
    const newComment = {
      id: comments.length + 1,
      text: commentText,
      replys: [],
    };

    setComments([newComment, ...comments]); // اضافة الاوبجيكت السابق الى مصفوفة الكومينتس

    // تصفير قيم الانبوتس
    setName("");
    setEmail("");
    setCommentText("");
  }

  // تابع يفعل قي حالة الرد على الكومينت
  function handleReplayComments(commentId) {
    setComments(
      comments.map((comment) => {
        return commentId === comment.id // مقارنة المعرف الصحيح من اجل الاضافة فيه
          ? {
              ...comment,
              replys: [
                ...comment.replys,
                {
                  // لكي يكون المعرف فريد قي جميع مصفوفات الريببليز وليس فريد في المصفوفة الواحدة فقط
                  id: comments.reduce((total, comment) => {
                    return total + comment.replys.length;
                  }, 1),
                  replayTetx: commentText,
                },
              ],
            }
          : comment;
      })
    );

    // تصفير قيم الانبوتس
    setCommentText("");
  }

  // تابع يفعل قي حالة الرد على رد الكومينت
  function handleReplayOnReplayComments(replayOnReplayCommentId) {
    setComments(
      comments.map((comment) => {
        if (
          comment.replys.some((reply) => reply.id === replayOnReplayCommentId) // مقارنة المعرف الصحيح من اجل الاضافة فيه
        ) {
          return {
            ...comment,
            replys: [
              ...comment.replys,
              {
                // لكي يكون المعرف فريد قي جميع مصفوفات الريببليز وليس فريد في المصفوفة الواحدة فقط
                id: comments.reduce((total, comment) => {
                  return total + comment.replys.length;
                }, 1),
                replayTetx: commentText,
              },
            ],
          };
        }
        return comment;
      })
    );

    // تصفير قيم الانبوتس
    setCommentText("");
  }

  // تابع يفعل في حالة الضغط على مربع الريبلاي الخاص بالكومينت
  function handleClickingOnReplay() {
    // (Posts Replay Comment) عن زر (display: none;) ازالة
    setDisplayNone(false);

    // الى التيكست اريا (Auto Focus) اضافة خاصية
    setAutoFocus(true);
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }

  // (Posts Replay Comment) تابع يفعل عند الضغط على زر
  function handlePostsReplayComment() {
    if (isReply) {
      handleReplayComments(replyCommentId);
    } else {
      handleReplayOnReplayComments(replyOnReplyCommentId);
    }

    // (Posts Replay Comment) الى زر (display: none;) اضافة
    setDisplayNone(true);
    // عن التيكست اريا (Auto Focus) ازالة خاصية
    setAutoFocus(false);
  }

  return (
    <>
      <div>
        <ShowFilter />
      </div>
      <div className="SHaaban-LISTING">
        <div className="SHaaban-detail">
          <div className="SHaaban-title-and-meta">
            <h1>Best LearnPress WordPress Theme Collection for 2023</h1>
            <div className="SHaaban-title-and-meta-info-container">
              <div className="SHaaban-title-and-meta-info">
                <img
                  src={PersonImg}
                  alt=""
                />
                <p>Determined-poitras</p>
              </div>
              <div className="SHaaban-title-and-meta-info">
                <img
                  src={CalenderImg}
                  alt=""
                />
                <p>{formattedDate}</p>
              </div>
              <div className="SHaaban-title-and-meta-info">
                <img
                  src={MeassgeImg}
                  alt=""
                />
                <p>
                  {comments.length +
                    comments.reduce((total, comment) => {
                      return total + comment.replys.length;
                    }, 1)}
                  <span className="SHaaban-adding-margin-left">Comments</span>
                </p>
              </div>
            </div>
          </div>
          <img
            id="SHaaban-adding-style-for-main-image"
            src={MainImages[index]}
            alt=""
          />
          <div id="SHaaban-blog-content">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
              ex, nobis iste laboriosam eos voluptates culpa ullam odio at est
              dolore sint atque tempora modi veritatis temporibus dolorem
              distinctio? At velit autem culpa eius voluptatem ipsa eveniet
              debitis repellendus similique? Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Laudantium tenetur beatae quam amet
              cupiditate soluta blanditiis fugiat perspiciatis commodi ipsum?
              Voluptatum tempora facere quae mollitia dicta unde eos possimus
              fuga.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perferendis doloremque laboriosam cum sint qui sit soluta fugiat
              harum. Saepe vel, dicta molestiae suscipit laboriosam, fuga
              reiciendis fugiat ad maiores autem veniam est ex. Sequi id facilis
              voluptatem ipsum eos placeat est itaque ab, praesentium nemo
              suscipit deserunt eveniet magni. Qui.
            </p>
            <div id="SHaaban-tags-area">
              <p className="SHaaban-adding-style-for-blog-content-title">
                Tags :
              </p>
              <TagsH />
            </div>
            <div id="Shaaban-contact-area">
              <p className="SHaaban-adding-style-for-blog-content-title">
                Share:
              </p>
              <ul className="SHaaban-contact-list">
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faPinterest} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faXTwitter} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="SHaaban-slider-container">
            <div className="SHaaban-slider">
              <div onClick={handleDecIndex} className="SHaaban-slider-arrow">
                <FontAwesomeIcon icon={faChevronLeft} />
              </div>
              <div className="SHaaban-slider-content-first-child">
                <p className="SHaaban-slider-content-title">Prev Articles</p>
                <h4 className="SHaaban-slider-content-mainText">
                  Best LearnPress WordPress Theme Collection for 2023
                </h4>
              </div>
            </div>
            <div className="SHaaban-slider">
              <div className="SHaaban-slider-content-second-child">
                <p className="SHaaban-slider-content-title SHaaban-text-end">
                  Next Articles
                </p>
                <h4 className="SHaaban-slider-content-mainText SHaaban-text-end">
                  Best LearnPress WordPress Theme Collection for 2023
                </h4>
              </div>
              <div onClick={handleIncIndex} className="SHaaban-slider-arrow">
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            </div>
          </div>
          <div className="SHaaban-comment-section">
            <h4>Comments</h4>
            <p id="SHaaban-comment-info">
              {comments.length +
                comments.reduce((total, comment) => {
                  return total + comment.replys.length;
                }, 1)}
              <span className="SHaaban-adding-margin-left">Comments</span>
            </p>
            {currentComments.map((comment) => {
              return (
                <div className="SHaaban-comment-body" key={comment.id}>
                  <div className="SHaaban-adding-flex">
                    <img
                      className="SHaaban-adding-style-for-comment-imange"
                      src={GirlImg}
                      alt=""
                    />
                    <div className="SHaaban-adding-flex-grow">
                      <div className="SHaaban-adding-flex-center-spaceBetween">
                        <p className="SHaaban-comment-userName">
                          Laura Hipster
                        </p>
                        <p className="SHaaban-comment-date">October 03, 2022</p>
                      </div>
                      <p className="SHaaban-comment-content">{comment.text}</p>
                      <div className="SHaaban-adding-margin-bottom">
                        <div className="SHaaban-replay-area">
                          <div
                            onClick={() => {
                              handleClickingOnReplay();
                              setIsReply(true);
                              setReplyCommentId(comment.id);
                            }}
                            className=" SHaaban-adding-style-with-hover"
                          >
                            <img
                              src="../../public/assetsProject/imageFromHaidar/Vector.svg"
                              alt=""
                            />
                            <span className="SHaaban-adding-style-for-replay">
                              Replay
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="SHaaban-replay-comment-body">
                    {comment.replys.map((c) => {
                      return (
                        <div
                          className="SHaaban-comment-body SHaaban-adding-flex SHaaban-adding-width"
                          key={c.id}
                        >
                          <img
                            className="SHaaban-adding-style-for-comment-imange"
                            src={GirlImg}
                            alt=""
                          />
                          <div className="SHaaban-adding-flex-grow">
                            <div className="SHaaban-adding-flex-center-spaceBetween">
                              <p className="SHaaban-comment-userName">
                                Laura Hipster
                              </p>
                              <p className="SHaaban-comment-date">
                                October 03, 2022
                              </p>
                            </div>
                            <p className="SHaaban-comment-content">
                              {c.replayTetx}
                            </p>
                            <div
                              onClick={() => {
                                // تتعامل مع الرد على الردود الخاصة بالتعليقات
                                handleClickingOnReplay();
                                setReplyOnReplyCommentId(c.id);
                              }}
                              className="SHaaban-adding-margin-bottom SHaaban-adding-style-with-hover"
                            >
                              <img
                                src={ReplayIcon}
                                alt=""
                              />
                              <span className="SHaaban-adding-style-for-replay">
                                Replay
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <Pagination
            commentsPerPageProp={commentsPerPage}
            totalCommentsProp={comments.length}
            paginate={paginate}
            handlePaginationWithArrowINC={handlePaginationWithArrowINC}
            handlePaginationWithArrowDEC={handlePaginationWithArrowDEC}
          />
          <div className="SHaaban-form-area ">
            <h4 className="SHaaban-form-area-title">Leave A Comment</h4>
            <p className="SHaaban-form-area-paragraph">
              Your email address will not be published. Required fields are
              marked*
            </p>
            <form id="SHaaban-form-body" action="">
              <div className="SHaaban-styling-form-inputs">
                <input
                  className="Mk-FormInput1"
                  type="text"
                  name=""
                  id=""
                  placeholder="Name*"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="Mk-FormInput2"
                  type="email"
                  name=""
                  id=""
                  placeholder="Email*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <textarea
                className="SHaaban-styling-text-area"
                name=""
                id=""
                placeholder="Comment"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                ref={textAreaRef}
                autoFocus={autoFocus}
              ></textarea>
              <div className="SHaaban-adding-flex-align-center">
                <input type="checkbox" name="" id="SHaaban-checkbox" value="" />
                <label
                  id="SHaaban-adding-style-for-label"
                  htmlFor="SHaaban-checkbox"
                >
                  Save my name, email in this brower for the next time I comment
                </label>
              </div>
            </form>
            <div className="SHaaban-btn-area">
              <button
                onClick={handleSubmit}
                // id="SHaaban-adding-style-for-button"
                className="NA-btn NA-btn-effect SHaaban-styling-width"
              >
                Posts Comment
              </button>
              <button
                onClick={() => {
                  handlePostsReplayComment();
                }}
                // id="SHaaban-adding-style-for-replay-button"
                className={
                  displayNone
                    ? "d-none"
                    : "NA-btn NA-btn-effect SHaaban-styling-width"
                }
              >
                Posts Replay Comment
              </button>
            </div>
          </div>
        </div>
        <div className="SHaaban-sideBar-blog-listing">
          <FilterBar />
        </div>
      </div>
    </>
  );
}
