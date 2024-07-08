/* eslint-disable react/prop-types */
import './ContactTitle.css'


const  ContactTitle = ({subTitle , Title}) => {
    return (
      <div className='Mk-Contact-Us'>
          <h2>{Title}</h2>
          <p>{subTitle}</p>
      </div>
    )
  }

export default ContactTitle