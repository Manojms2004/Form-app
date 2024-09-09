import React from "react";
import './Democss.css';

export default function Demo(props) {

  // const modArray = props.collect.filter((val) =>{
  //    return  val % 2 == 0;
  // })

  return (
    <div className="container">
      {
        // props.collect.map((getVal,index) =>{
        //   return <div className="miniCon" key={index}>{getVal}</div>
        // })
        props.collect.map((getVal, index) => {
          return (
            <div className="miniCon">
              <ol>
                <li>{getVal.name}</li>
                <li>{getVal.age}</li>
                <li>{getVal.gender}</li>
              </ol>
            </div>
          )
        })

      }

    </div>
  )
}