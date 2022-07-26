import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Routes , Route, Link } from "react-router-dom";
import './App.css';
import AboutUs from "./component/AboutUs";
import StudentList from "./component/StudentList";
import TeachersList from "./component/TeachersList";
import ContactUs from "./component/ContactcUs";
import NotFound from "./component/NotFound";

export default function App() {
  return (
    <Router>
      <div>
      <nav className="navbar-container">
        <Link to="/">Home</Link> |{" "}
        <Link to="about">About</Link>|{" "}
        <Link to="/teacher">Teachers</Link> |{" "}
        <Link to="contact">Contact US</Link>
      </nav>
      <h1 style={{ textAlign: "center" }}>School Mangment</h1>
      
        <Routes>
          <Route exact path="/" element={<StudentList/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route exact path="/teacher" element={<TeachersList/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    <div>
    
    </div>
    </Router>
  );
}
