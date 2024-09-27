import React, {useState} from 'react'
import './Formcss.css';
import DisplayCom from './DisplayCom';


export default function FromComp() {
  const [userName,setName] = useState("");
  const [userAge,setAge] = useState("");
  const [userEmail,setEmail] = useState("");
  const [userPho,setPho] = useState("");
  const [show,setShow] = useState([])


  const calledOnSubmit= (e) =>{
    console.log(e)
    e.preventDefault();

    setShow([...show,userName,userAge,userEmail,userPho])
    setName("")
    setAge("")
    setEmail("")
    setPho("")
      
  }
  

  return (
    <div className="container-div">
        <form onSubmit={calledOnSubmit}>
            <label>Name : </label>
            <input type="text"
            value={userName}
            placeholder='Enter the Name'
            onChange={(e) =>{setName(e.target.value)}} required/>
            <br />

            <label>Age : </label>
            <input type="number" 
            value={userAge}
            placeholder='Enter the Age'
            onChange={(e) =>{setAge(e.target.value)}} required/>
            <br />

            <label>Email : </label>
            <input type="email" 
            value={userEmail}
            placeholder='Enter the Email'
            onChange={(e) =>{setEmail(e.target.value)}} required/>
            <br />

            <label>Phone No: </label>
            <input type="text"
            value={userPho}
            placeholder='Enter Phone Number'
            onChange={(e)=>{setPho(e.target.value)}} required/>
            <br />
           
            <button type="submit">Submit</button>
        </form>
      <DisplayCom showArray = {show}/>
    </div>
  )
}
