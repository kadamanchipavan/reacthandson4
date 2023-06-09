import React,{useState} from 'react'
import './newStyles.css'

function AddStudents() {
    const[show,setshow]=useState(false)
    const[state,setstate]=useState({
        Name1:"",
        Department:"",
        Rating:"",
        employee:[]
    });

    let name,value;
  const handleInputs=(e)=>{
    console.log(e);
    name=e.target.name;
    value=e.target.value;

    setstate({...state,[name]:value})
    console.log(state);
   
  }

  const submitHandler=(e)=>{
   e.preventDefault()
   console.log(e.target);
   console.log("SubmitHandler called");
   const empObj = {
       Name:state.Name1,
       Department:state.Department,
       Rating:state.Rating,
     };
     
     const arr = state.employee;
     arr.push(empObj);
     console.log(arr);
     console.log(state.employee);
     setstate({...state, employee: arr });
     setshow(!show)
    
    
  }

  const back=(e)=>{
    e.preventDefault();
    setshow((prevValue)=>{return !prevValue})
  }
if(show){
    return(
        <>
        <div id='result'>
            {state.employee.map((value,index,Array)=>
          {
            return(
              <div id="output">
            <p key={index}>Name : {value.Name} | Department : {value.Department} | Rating : {value.Rating}</p> 
            </div>
            )
          })
        }
        </div>
        <button onClick={back}>go back</button>
        </>
    )

      
}

else{
  return (
    <div>
      <br></br>
      <form className='align'>
      <label htmlFor="name"  >Name :</label>
          <input type="text" name="Name1" id="name" value={state.Name1} onChange={handleInputs}/> <br /> <br />
      <label htmlFor="name" >Department :</label>
          <input type="text" name="Department" id="name" value={state.Department} onChange={handleInputs} /> <br /> <br />
      <label htmlFor="name" >Rating :</label>
          <input type="number" name="Rating" id="name" value={state.Rating} onChange={handleInputs}/> <br /><br />
          <button onClick={submitHandler}>Submit</button>
      </form>
    </div>
  )
}
}


export default AddStudents;