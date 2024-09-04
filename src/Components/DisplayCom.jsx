import React, { useState } from 'react'

export default function DisplayCom(props) {

  return (
    <div className="cont">
    {
         props.showArray.map((val) =>{
             return (
                 <li>{val}</li>
            )})
    }</div>
  )
}

