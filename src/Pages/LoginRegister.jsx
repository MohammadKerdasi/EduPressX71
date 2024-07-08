import React from 'react'
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs'
import "./../index.css"
import LoginRegister from './../Components/LoginRegister/LoginRegister.jsx'
export default function LoginandRegister() {
  return (
    <div>
    
       <BreadCrumbs />
       <div className='Project-Container'>
       <LoginRegister/>
       </div>
       </div>

  )
}
