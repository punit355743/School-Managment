import React, { useState, useEffect, use } from 'react';
import { useNavigate } from 'react-router-dom';
import { AgGridReact } from 'ag-grid-react';

import { useSelector, useDispatch } from 'react-redux';


const StudentList = () => {
  const navigate =  useNavigate();
  const [rowData,setRowData] = useState([]);
  const { loading, studentList, error } = useSelector((state) => state.studentlist);
  const [columnDefs] = useState([
    { field: 'id',filter:true, sortable: true },
    { field: 'name',filter:true , sortable: true},
    { field: 'subject',filter:true   },
    { field: 'marks',filter:true },
    { field: 'age',filter:true   }
])

  useEffect(() => {
    setRowData(studentList);
  }, [studentList])

const onclickHandler =()=>{
  navigate('/addstudent');
}
const onRowClicked =(row)=>{
  console.log(row);
}

  return (
  <div className="ag-theme-alpine" style={{height:400,width:800}} >
    <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs} 
        onRowClicked={onRowClicked} >
    </AgGridReact>
    <button type="button" className="btn btn-primary" onClick={onclickHandler}>Add new student</button>

    <div>
      {/* ///here you need to add editstudent component */}
    </div>
</div>
  )
}

export default StudentList










