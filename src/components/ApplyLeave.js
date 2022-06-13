const ApplyLeaves=()=>{
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
                        <input type="text" class="form-control" placeholder="Enter a number"/>
                      </div>

                      

                      <div class="form-group">
                        <label>Type Of Leave</label>
                        <select class="form-control">
                          <option>Sick Leave</option>
                          <option>Casual Leave</option>
                          <option>Annual Leave</option>
                          
                        </select>
                      </div>

                      <div class="form-group">
                        <label>Details </label>
                        <input type="text" class="form-control" placeholder="Details (if any)"/>
                      </div>

                      <div class="form-group">
                  <label>Starting Date:</label> <br/>
                  <input type="date" id="" name=""/>
                </div>

                <div class="form-group">
                  <label>Ending Date:</label> <br/>
                  <input type="date" id="" name=""/>
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