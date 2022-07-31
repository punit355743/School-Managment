import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { fetchStudentlist, fetchStudentlistSucess, fetchStudentlistError } from './../store/actions/actionCreators'


const StudentList = () => {
  const dispatch = useDispatch();
  const { loading, studentList, error } = useSelector((state) => state)
  useEffect(async () => {
    try {
      dispatch(fetchStudentlist())
      const response = await axios.get('./data/studentlist.json');
      dispatch(fetchStudentlistSucess(response.data.students))
    }
    catch (e) {
      console.log("APP error", e);
    }
  }, [])
  return (
    <h1>Student List</h1>
  )
}

export default StudentList










