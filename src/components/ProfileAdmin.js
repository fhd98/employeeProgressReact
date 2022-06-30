import { adminProfile } from "../models/profileFetch";
import {  useEffect, useState } from "react";


const ProfileAdmin =()=>{

    var empDept=localStorage.getItem('EmployeeDept');

    const[profile, setProfile]=useState('');

	useEffect(()=>{
		//console.log('HEllo World');
		adminProfile({empDept} ,function(result){
			setProfile(result);

            
		})
		
	},[]);

    

    return(

        <div class="col-md-3">
<div class="card card-primary card-outline">
        <div class="card-body box-profile">
<div class="text-center">
<img class="profile-user-img img-fluid img-circle" src="" alt="User profile picture" />
</div>
<h3 class="profile-username text-center">{profile.name}</h3>
<p class="text-muted text-center">{profile.department}</p>
<ul class="list-group list-group-unbordered mb-3">
<li class="list-group-item">
<b>Date Of Birth</b> <a class="float-right">{profile.dob}</a>
</li>
<li class="list-group-item">
<b>Expertise</b> <a class="float-right">{profile.expertise}</a>
</li>
<li class="list-group-item">
<b>Experience</b> <a class="float-right">{profile.experience}</a>
</li>
</ul>
<a href="#" class="btn btn-primary btn-block"><b>Follow</b></a>
</div>
</div>

</div>
    );


}

export default ProfileAdmin;