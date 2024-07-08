import React from 'react'
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs'
import CourseSingleHero from './../Components/CourseSingleHero/CourseSingleHero'
import CourseSingleDetail from './../Components/CourseSingleDetail/CourseSingleDetail'
import "./../index.css"
export default function CourseSingle() {
  return (
    <div>
    <BreadCrumbs />
    <CourseSingleHero/>
    <div className='Project-Container'>
     <CourseSingleDetail/>
       </div>
    </div>
  )
}