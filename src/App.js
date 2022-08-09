import React, { useState, useEffect, use } from 'react';
import { BrowserRouter as Router, Routes , Route, Link } from "react-router-dom";
import axios from 'axios';
import './App.css';
import AboutUs from "./component/AboutUs";
import StudentList from "./component/StudentList";
import TeachersList from "./component/TeachersList";
import ContactUs from "./component/ContactcUs";
import NotFound from "./component/NotFound";
import AddStudent from "./component/AddStudent";
import { useSelector, useDispatch } from 'react-redux';
import { fetchStudentlist, fetchStudentlistSucess, fetchStudentlistError } from './store/actions/actionCreators'

export default function App() {
  const dispatch = useDispatch();
  useEffect(async () => {
    try {
      dispatch(fetchStudentlist())
      console.log("API call");
      const response = await axios.get('./data/studentlist.json');
      dispatch(fetchStudentlistSucess(response.data.students))
    }
    catch (e) {
      console.log("APP error", e);
      dispatch(fetchStudentlistError(e.message));
    }
  }, [])

  return (
    <Router>
      <div>
      <nav className="navbar-container">
        <Link to="/">Home</Link> |{" "}
        <Link to="/addstudent">Add Student</Link> |{" "}
        <Link to="about">About</Link>|{" "}
        <Link to="/teacher">Teachers</Link> |{" "}
        <Link to="contact">Contact US</Link>
      </nav>
      <h1 style={{ textAlign: "center" }}>School Mangment</h1>
      
        <Routes>
          <Route exact path="/" element={<StudentList />} />
          <Route path="/about" element={<AboutUs/>} />
          <Route exact path="/teacher" element={<TeachersList/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/addstudent" element={<AddStudent/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    <div>
    
    </div>
    </Router>
  );
}
