import React from 'react'
import TableData from './TableData'
import {useNavigate } from 'react-router-dom'

const Student = () => {
  const navigate=useNavigate();
  const studentadd=()=>{
    navigate('/AddStudents')
  }

  return (
    <div>
      <div id="studentsflex">
        <p style={{minHeight:"10px"}} id={Student}>Students Details</p>
        <button id='stuAddBtn' onClick={studentadd}>Add new student</button>
      </div>
      <TableData/>
    </div>
  )
}

export default Student