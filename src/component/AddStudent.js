import { ColumnGroup } from 'ag-grid-community';
import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addnewStudentinClass } from './../store/actions/actionCreators'

import { useNavigate } from 'react-router-dom';
import './addstudent.css';

const AddStudent = (props) => {
 
  const navigate =  useNavigate();
  const [name,setName]= useState('');
  const [age,setAge]= useState('');
  const [marks,setMarks]= useState('');
  const [subject,setSubject]= useState('Math');
  const [valid,setValid] = useState(false);
  const [showmsg,setshowmsg] = useState(null);
  const dispatch = useDispatch();
  const  studentForm = useSelector((state) => state.studentForm);

    const onclickHandler =()=>{
      const newStudent = {
        "id": 200,
        "name": name,
        "subject": subject,
        "marks": marks,
        "age":age
      }
      dispatch(addnewStudentinClass(newStudent));
      setshowmsg("Successfully saved record!!");
      navigate('/');
    }

    useEffect(()=>{
      if(name && age && marks && subject){
        setValid(true);
      }else{
        setValid(false);
      }
    },[name,age, marks, subject])



    
    return (
      <form className="add-new-student-form" >
        {showmsg && <p style={{color:'green'}}>{showmsg}</p>}
        <div class="form-group">
          <label for="nameinput">Name</label>
          <input onChange={(e)=>{setName(e.target.value)}} value= {name} type="text" class="form-control" id="nameinput" placeholder="Enter your name"/>
        </div>
        <div class="form-group">
          <label for="ageinput">Age</label>
          <input onChange={(e)=>{setAge(e.target.value)}} value= {age} type="text" class="form-control" id="ageinput" placeholder="Enter your Age"/>
        </div>
        <div class="form-group">
          <label for="marksinput">Marks</label>
          <input onChange={(e)=>{setMarks(e.target.value)}} value= {marks} type="text" class="form-control" id="marksinput" placeholder="Enter your Marks"/>
        </div>
        <div class="form-group">
          <label for="subjectSelect1">Subject select</label>
          <select onChange={(e)=>{setSubject(e.target.value)}} value= {subject} class="form-control" id="subjectSelect1">
            <option value="Math">Math</option>
            <option value="Hindi">Hindi</option>
            <option value="Science">Science</option>
            <option value="Englist">Englist</option>
            <option value="Computer">Computer</option>
          </select>
        </div>     
        <button type="button" disabled={!valid} className="btn btn-primary" onClick={onclickHandler}>Add new student</button>  
      </form>
    );
}

export default AddStudent;