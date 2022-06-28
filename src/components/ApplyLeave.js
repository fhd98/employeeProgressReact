import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApplyLeaveReq } from "../models/Leaves";


const ApplyLeaves = () => {
  const Navigate = useNavigate();
  const [daysLeave, setDaysLeave] = useState('');
  const [typeLeave, setTypeLeave] = useState('Sick Leave');
  const [details, setDetails] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  var empName = localStorage.getItem('EmployeeName');
  var empDept = localStorage.getItem('EmployeeDept');


  const handleLeave = (e) => {
    e.preventDefault();
    setIsLoading(true);
    ApplyLeaveReq({ empName: empName, empDept: empDept, daysLeave: daysLeave, typeLeave: typeLeave, details: details, startDate: startDate, endDate: endDate }, function (result) {
      console.log(result);
      if (result.leave == 'applied') {
        setIsLoading(false);
        Navigate('/leaves-status');
      }

      else {
        setError(result.leave);
        console.log(error);
        setIsLoading(false);
      }

    });
  }



  return (
    <div class="center">
      <div class="col-md-6">
        <div class="card card-primary">
          <div class="card-header">
            <h3 class="card-title">Apply for Leave</h3>
          </div>

         


          {
error =="" ?
(()=>{ 

			//localStorage.setItem('TaskId'+key, row.task_id);
	return(
							  
<></>  )
}) :

<div class="alert alert-danger" role="alert">
{error}
</div>

}  




          <form onSubmit={(e) => { handleLeave(e) }}>
            <div class="card-body">

              <div class="form-group">
                <label>Total Days of Leave</label>
                <input required value={daysLeave} type="number" class="form-control" onChange={(e) => setDaysLeave(e.target.value)} placeholder="Select number of days" />
              </div>



              <div class="form-group">
                <label>Type Of Leave</label>
                <select required value={typeLeave} onChange={(e) => setTypeLeave(e.target.value)} class="form-control">
                  <option value="Sick Leave">Sick Leave</option>
                  <option value="Casual Leave">Casual Leave</option>
                  <option value="Annual Leave">Annual Leave</option>

                </select>
              </div>

              <div class="form-group">
                <label>Details </label>
                <input required value={details} onChange={(e) => setDetails(e.target.value)} type="text" class="form-control" placeholder="Details (if any)" />
              </div>

              <div class="form-group">
                <label>Starting Date:</label> <br />
                <input required value={startDate} onChange={(e) => setStartDate(e.target.value)} type="date" id="" name="" />
              </div>

              <div class="form-group">
                <label>Ending Date:</label> <br />
                <input required value={endDate} onChange={(e) => setEndDate(e.target.value)} type="date" id="" name="" />
              </div>



            </div>

            <div class="card-footer">
              <button type="submit" class="btn btn-primary" disabled={isLoading}>Submit</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default ApplyLeaves;