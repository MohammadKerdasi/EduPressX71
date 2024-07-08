import CommentForm from '../Components/CommentForm/CommentForm'
import BreadCrumbs from './../Components/BreadCrumbs/BreadCrumbs'
import Location from './../Components/Location/Location'
import "./../index.css"
export default function Contact() {
  return (
    <div>
    <BreadCrumbs />
      <div className='Project-Container'>
          <Location/> 
          <CommentForm/>
      </div>
    </div>
  )
}
