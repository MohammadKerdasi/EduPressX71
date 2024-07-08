// for css
import "./StartAcademy.css"

// for images
import student from "./../../../public/assetsProject/imges/StartAcademy-student 1.png"
import studentbanner1 from "./../../../public/assetsProject/imges/StartAcademy-ed1 1.png"
import studentbanner2 from "./../../../public/assetsProject/imges/StartAcademy-ed2 1.png"
export default function StartAcademy () {
    return(
        <div className="NA-StartAcademy-section NA-Project-Container block">
            <div className="NA-StartAcademy NA-flex">
                <div className="NA-StartAcademy-content NA-flex">
                    <img src={student} alt="student" />
                    <h3>Let’s Start With Academy LMS</h3>
                </div>
                <div className="NA-StartAcademy-bttns">
                    <button className="NA-btn NA-btn-effect">i'm a student</button>
                    <button className="NA-btn NA-btn-effect">become an instructor</button>
                </div>
                <img className="NA-student-banner NA-student-banner1" src={studentbanner1} alt="student-banner" />
                <img className="NA-student-banner NA-student-banner2" src={studentbanner2} alt="student-banner" />
            </div>
        </div>
    )
}