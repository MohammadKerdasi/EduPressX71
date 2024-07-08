import React from 'react'
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs'
import "./../index.css"
import BlogDtails from './../Components/BlogDetails/BlogDetails.jsx';
export default function BlogSingle() {
  return (
    <div>
          <div>
    <BreadCrumbs />
    <div className='Project-Container'>
    <BlogDtails/>
       </div>
    </div>
    </div>
  )
}