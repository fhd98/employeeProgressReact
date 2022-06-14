import { useState } from "react";


const ApplyLeaves=()=>{

const [daysLeave, setDaysLeave]=useState('');
const [typeLeave, setTypeLeave]=useState('Casual Leave');
const [details, setDetails]=useState('');
const [startDate, setStartDate]=useState('');
const [endDate, setEndDate]=useState('');



const check=()=>{
    alert(daysLeave+', '+typeLeave+', '+details+', '+startDate+', '+endDate);
}
    return(
<div class="center">
        <div class="col-md-6">
<div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Apply for Leave</h3>
              </div>
            
              <form>
                <div class="card-body">

                <div class="form-group">
                        <label>Total Days of Leave</label>
                        <input value={daysLeave} type="text" class="form-control" onChange={(e)=>setDaysLeave(e.target.value)} placeholder="Enter a number"/>
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
                  <button type="button" onClick={check} class="btn btn-primary">Submit</button>
                </div>
              </form>
              </div>

              </div>
              </div>
    )
}

export default ApplyLeaves;