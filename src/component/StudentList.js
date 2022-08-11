import React, { useState, useEffect, use } from 'react';
import { useNavigate } from 'react-router-dom';
import { AgGridReact } from 'ag-grid-react';

import { useSelector, useDispatch } from 'react-redux';
import EditStudent from './EditStudent';


const StudentList = () => {
  const navigate = useNavigate();
  const [rowData, setRowData] = useState([]);
  const { loading, studentList, error } = useSelector((state) => state.studentlist);
  const [studentDetails,setStudentDetails] = useState({
    id: '',
    name: '',
    subject: '',
    marks:'',
    age:''
  })
  const [columnDefs] = useState([
    { field: 'id', filter: true, sortable: true },
    { field: 'name', filter: true, sortable: true },
    { field: 'subject', filter: true },
    { field: 'marks', filter: true },
    { field: 'age', filter: true }
  ])

  useEffect(() => {
    setRowData(studentList);
  }, [studentList])

  const onclickHandler = () => {
    navigate('/addstudent');
  }
  const onRowClicked = (row) => {
    setStudentDetails(row.data)
  }

  return (

    <div>
      <div class="row">
        <div class="col-7">
          <div className="ag-theme-alpine" style={{ height: 400}} >
            <AgGridReact
              rowData={rowData}
              columnDefs={columnDefs}
              onRowClicked={onRowClicked} >
            </AgGridReact>
            <button type="button" className="btn btn-primary" onClick={onclickHandler}>Add new student</button>
          </div>
        </div>
        <div class="col-5">
          <div style={{backgroundColor:'white'}}>
            <EditStudent key={studentDetails.id} studentDetails={studentDetails}/>
          </div>
        </div>
      </div>
    </div>



  )
}

export default StudentList










