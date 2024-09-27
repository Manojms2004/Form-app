import React from 'react';
import './App.css';
import FromComp from './Components/FromComp';
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
  },
  {
    name: "charani",
    age: 24,
    gender:"Female"
  }
]



function App() {
  return (
    // <Demo collect = {sendData}/>
    <FromComp/>
  );
}

export default App;
