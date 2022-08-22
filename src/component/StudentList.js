import React, { useState, useEffect, useRef,useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { AgGridReact } from 'ag-grid-react';

import { useSelector, useDispatch } from 'react-redux';
import EditStudent from './EditStudent';
import {BtnCellRenderer} from './BtnCellRenderer'


const StudentList = () => {
  const navigate = useNavigate();
  const [chnageTheme,setChangeTheme] = useState('green')
  const gridRef = useRef();
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
    { field: 'age', filter: true },
    {
      field: 'remove',
      cellRenderer: BtnCellRenderer,
      cellRendererParams: {
        clicked: function(field) {
          alert(`${field} was clicked`);
        },
      },
    }
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

  const onBtnExport = useCallback(() => {
    gridRef.current.api.exportDataAsCsv();
  }, []);

  const onChangeTheme =  ()=>{
    chnageTheme ==='green' ? setChangeTheme('red') : setChangeTheme('green');
  }

  return (

    <div style={{backgroundColor:chnageTheme}}>
      <div class="row">
        <div class="col-7">
          <div className="ag-theme-alpine" style={{ height: 400}} >
            <AgGridReact
             ref={gridRef}
              rowData={rowData}
              columnDefs={columnDefs}
              onRowClicked={onRowClicked} >
            </AgGridReact>
            <button type="button" className="btn btn-primary" onClick={onclickHandler}>Add new student</button>
            <button type="button" className="btn btn-primary" onClick={onChangeTheme}>Change Theme</button>
          <div style={{ margin: '10px 0' }}>
          <button onClick={onBtnExport}>Download CSV export file</button>
        </div>
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

export default React.memo(StudentList)










