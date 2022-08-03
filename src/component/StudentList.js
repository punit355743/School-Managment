import React, { useState, useEffect, use } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AgGridReact } from 'ag-grid-react';
import { fetchStudentlist, fetchStudentlistSucess, fetchStudentlistError } from './../store/actions/actionCreators'


const StudentList = () => {
  const dispatch = useDispatch();
  const navigate =  useNavigate();
  const { loading, studentList, error } = useSelector((state) => state);
  console.log(loading, studentList, error);
  const [rowData,setRowData] = useState([]);
  const [columnDefs] = useState([
    { field: 'id',filter:true, sortable: true },
    { field: 'name',filter:true , sortable: true},
    { field: 'subject',filter:true   },
    { field: 'marks',filter:true },
    { field: 'age',filter:true   }
])
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

  useEffect(() => {
    setRowData(studentList);
  }, [studentList])

const onclickHandler =()=>{
  navigate('/addstudent');
}

  return (
  <div className="ag-theme-alpine" style={{height:400,width:'100%'}} >
    <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}>
    </AgGridReact>
    <button type="button" className="btn btn-primary" onClick={onclickHandler}>Add new student</button>
</div>
  )
}

export default StudentList










