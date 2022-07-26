import React,{useState,useEffect} from 'react';
import axios from 'axios';


 const StudentList = () => {
  useEffect(async ()=>{
    const response = await axios.get('./data/studentlist.json');
    console.log(response.data);
  },[])
  return(
    <h1>Student List</h1>
  )
}

export default StudentList










