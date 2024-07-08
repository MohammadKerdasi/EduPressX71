import './CourseSingleHero.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faSignal } from "@fortawesome/free-solid-svg-icons";
import { faPaste } from "@fortawesome/free-solid-svg-icons";
import { faClipboardQuestion } from "@fortawesome/free-solid-svg-icons";

const CourseSingleHero = () => {
  return (
    <>
    <div className="Mk-Course-Single-hero">
        <div className='Mk-Container'>
        <div className='d-flex align-items-center justify-content-between Mk-Photography-by-Determined-Poitras'>
            <p className='Mk-Photography'>Photography</p>
            <p className='Mk-by'>by <span>Determined-Poitras</span></p>
        </div>
        <div className='Mk-hero-heading'>
            <h1>The Ultimate Guide to the best WordPress LMS Plugin</h1>
        </div>
        <div className='w-100'>
            <ul className='Mk-ul'>
                <li className='Mk-list-item'><FontAwesomeIcon icon={faClock} style={{color: "var(--main-color)",}} /> <span> 2 Weeks </span> </li>
                <li className='Mk-list-item'><FontAwesomeIcon icon={faGraduationCap} style={{color: "var(--main-color)",}} /><span> 156 Students </span> </li>
                <li className='Mk-list-item'><FontAwesomeIcon icon={faSignal} style={{color: "var(--main-color)",}} /> <span> All levels </span> </li>
                <li className='Mk-list-item'><FontAwesomeIcon icon={faPaste} style={{color: "var(--main-color)",}} /> <span> 20 Lessons </span> </li>
                <li className='Mk-list-item'><FontAwesomeIcon icon={faClipboardQuestion} style={{color: "var(--main-color)",}} /> <span> 3 Quizzes </span> </li>
            </ul>
        </div>
        </div>
    </div>
    </>
  )
}

export default CourseSingleHero