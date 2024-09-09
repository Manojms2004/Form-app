import React from 'react';
import './App.css';
// import FromComp from './Components/FromComp';
import Demo from './Components/Demo';

const sendData = [
  {
    name : "Manoj",
    age : 23,
    gender :"Male"
  },
  {
     name :"Harish",
     age:20,
     gender:"Male"
  },
  {
    name: "Venkat",
    age: 34,
    gender:"Male"
  }
]


// const sendData  = [12,32,21,45,56]
// console.log(sendData);



function App() {
  return (
    <Demo collect = {sendData}/>
    // <FromComp/>
  );
}

export default App;
