import './App.css';
import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './Component/Home';
import Student from './Component/Student';
import Contact from './Component/Contact';
import Navigation from './Component/Navigation'
import Edit from './Component/Edit';
import AddStudents from './Component/AddStudents';

const  App=()=> {
  return (
    <div>
     <Navigation/>
      

      <Routes>
         <Route path="/Home" element={<Home/>}/>
         <Route path="/Student" element={<Student/>}/>
         <Route path="/Contact" element={<Contact/>}/>
         <Route path="/Edit" element={<Edit/>}/>
         <Route path="/AddStudents" element={<AddStudents/>}/>
   </Routes> 
  
    </div>
  );
}

export default App;
