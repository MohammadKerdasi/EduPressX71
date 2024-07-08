import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs'
import "./../index.css"
import FAQsPage from '../Components/FAQsPage/FAQsPage'



export default function FAQs() {
  return (
    <div>
    <BreadCrumbs/>
    <div className='Project-Container-FAQs'>
       <FAQsPage/>
       </div>
    </div>
  )
}