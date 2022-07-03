import {  useEffect, useState } from "react";
import { FetchTeamProfiles } from "../models/profileFetch";


const ViewTeam =()=>{
    var empDept=localStorage.getItem('EmployeeDept');

    const[profiles, setProfiles]=useState([]);

	useEffect(()=>{
		//console.log('HEllo World');
		FetchTeamProfiles({empDept} ,function(result){
			setProfiles(result);

            //console.log(profile);
		})
		
	},[])
    
    //console.log(path);

    return(
<div class="row">

{
profiles.length >0 ?
profiles.map((profile,key)=>{ 

			//localStorage.setItem('TaskId'+key, row.task_id);
	return(


        <div class="col-md-3">
<div class="card card-primary card-outline">
        <div class="card-body box-profile">

<h3 class="profile-username text-center">{profile.e_name}</h3>
<p class="text-muted text-center">{profile.department}</p>
<ul class="list-group list-group-unbordered mb-3">
<li class="list-group-item">
<b>Date Of Birth</b> <a class="float-right">{profile.dob ?? 'Not mentioned'}</a>
</li>
<li class="list-group-item">
<b>Interests</b> <a class="float-right">{profile.interests ?? 'Not mentioned'}</a>
</li>

</ul>
<a href="#" class="btn btn-primary btn-block"><b>Follow</b></a>
</div>
</div>

</div>

)
}) :
<h3> No Profiles Found </h3>
}                 


</div>
    );


}

export default ViewTeam;