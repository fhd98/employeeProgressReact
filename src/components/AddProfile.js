import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FetchEmpProfile, updateEmpProfile } from "../models/profileFetch";


const AddProfile = () => {
  const Navigate = useNavigate();
  const [name, setName] = useState('');
  const [dob, setDob] = useState('Sick Leave');
  const [interests, setInterests] = useState('');
  const [picture, setPicture] = useState('');


  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  var empID = localStorage.getItem('EmployeeID');

  useEffect(()=>{
    
    FetchEmpProfile({empID} ,function(result){
        setName(result.e_name);
        setDob(result.dob);
        setInterests(result.interests);
    })
    
},[])
  


  const handleProfile = (e) => {
    e.preventDefault();
    setIsLoading(true);
    updateEmpProfile({empID:empID, name: name, dob: dob, interests: interests}, function (result) {
      console.log("HEllo");
      console.log(result);
      if (result.status == 'pass') {
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
            <h3 class="card-title">Update Your Profile</h3>
          </div>

         


          {
error =="" ?
(()=>{ 

			
	return(
							  
<></>  )
}) :

<div class="alert alert-danger" role="alert">
{error}
</div>

}  




          <form onSubmit={(e) => { handleProfile(e) }}>
            <div class="card-body">

              <div class="form-group">
                <label>Full Name:</label>
                <input required value={name} type="text" class="form-control" onChange={(e) => setName(e.target.value)}  />
              </div>



              

              <div class="form-group">
                <label>Date of Birth:</label> <br />
                <input  value={dob} onChange={(e) => setDob(e.target.value)} type="date" id="" name="" />
              </div>

              <div class="form-group">
                <label>Interests:</label>
                <input  value={interests} type="text" class="form-control" onChange={(e) => setInterests(e.target.value)}  />
              </div>



            </div>

            <div class="card-footer">
              <button type="submit" class="btn btn-primary" disabled={isLoading}>Update Profile</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default AddProfile;