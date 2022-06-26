import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApplyLeaveReq } from "../models/Leaves";


const ApplyLeaves=()=>{
  const Navigate= useNavigate();
const [daysLeave, setDaysLeave]=useState('');
const [typeLeave, setTypeLeave]=useState('');
const [details, setDetails]=useState('');
const [startDate, setStartDate]=useState('');
const [endDate, setEndDate]=useState('');

var empName=localStorage.getItem('EmployeeName');
var empDept=localStorage.getItem('EmployeeDept');


  const handleLeave=(e)=>{
    e.preventDefault();
    ApplyLeaveReq({empName:empName, empDept:empDept, daysLeave:daysLeave, typeLeave:typeLeave, details:details, startDate:startDate, endDate:endDate}, function(result) 
    {
        console.log(result);
        Navigate ('/leaves-status');
    });
  }



    return(
<div class="center">
        <div class="col-md-6">
<div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Apply for Leave</h3>
              </div>
            
              <form onSubmit={(e)=>{ handleLeave(e)} }>
                <div class="card-body">

                <div class="form-group">
                        <label>Total Days of Leave</label>
                        <input value={daysLeave} type="number" class="form-control" onChange={(e)=>setDaysLeave(e.target.value)} placeholder="Select number of days"/>
                      </div>

                      

                      <div class="form-group">
                        <label>Type Of Leave</label>
                        <select value={typeLeave} onChange={(e)=>setTypeLeave(e.target.value)} class="form-control">
                          <option value="Sick Leave">Sick Leave</option>
                          <option value="Casual Leave">Casual Leave</option>
                          <option value="Annual Leave">Annual Leave</option>
                          
                        </select>
                      </div>

                      <div class="form-group">
                        <label>Details </label>
                        <input value={details} onChange={(e)=>setDetails(e.target.value)} type="text" class="form-control" placeholder="Details (if any)"/>
                      </div>

                      <div class="form-group">
                  <label>Starting Date:</label> <br/>
                  <input value={startDate} onChange={(e)=>setStartDate(e.target.value)} type="date" id="" name=""/>
                </div>

                <div class="form-group">
                  <label>Ending Date:</label> <br/>
                  <input value={endDate} onChange={(e)=>setEndDate(e.target.value)} type="date" id="" name=""/>
                </div>

                 
                  
                </div>

                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
              </div>

              </div>
              </div>
    )
}

export default ApplyLeaves;