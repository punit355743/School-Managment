import React from 'react';
import './addstudent.css';

const AddStudent = (props) => {

    const onclickHandler =()=>{
        
    }
    return (
      <form className="add-new-student-form">
        <div class="form-group">
          <label for="nameinput">Name</label>
          <input type="text" class="form-control" id="nameinput" placeholder="Enter your name"/>
        </div>
        <div class="form-group">
          <label for="ageinput">Age</label>
          <input type="text" class="form-control" id="ageinput" placeholder="Enter your Age"/>
        </div>
        <div class="form-group">
          <label for="marksinput">Marks</label>
          <input type="text" class="form-control" id="marksinput" placeholder="Enter your Marks"/>
        </div>
        <div class="form-group">
          <label for="subjectSelect1">Subject select</label>
          <select class="form-control" id="subjectSelect1">
            <option>Math</option>
            <option>Hindi</option>
            <option>Science</option>
            <option>Englist</option>
            <option>Computer</option>
          </select>
        </div>     
        <button type="button" className="btn btn-primary" onClick={onclickHandler}>Add new student</button>  
      </form>
    );
}

export default AddStudent;