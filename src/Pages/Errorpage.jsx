import React from 'react'
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs'
import Error from '../Components/Error/Error'

export default function Errorpage() {
  return (
    <div>
    <BreadCrumbs/>
    <div className='Project-Container'>
        <Error/>
       </div>
    </div>
  )
}
