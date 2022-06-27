import {  useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { LeavesStatusRequest } from "../models/Leaves";


const LeavesStatus=()=>{

	var empName=localStorage.getItem('EmployeeName');
	var empDept=localStorage.getItem('EmployeeDept');

	const[leaves, setLeaves]=useState([]);

	useEffect(()=>{
		//console.log('HEllo World');
		LeavesStatusRequest({empName,empDept} ,function(result){
			setLeaves(result);
		})
		
	},[])



    return(
<section class="ftco-section">
		<div class="container">
			
			<div class="row">
				<div class="col-md-12">
					<div class="table-wrap">
						<table class="table">
						  <thead class="thead-primary">
						    <tr>
						      <th>#</th>
						      <th>No. of Days</th>
                              <th>Leave Type</th>
						      <th>Starting Date</th>
                              <th>Ending Date</th>
                              <th>Status</th>
                              
                              
						    </tr>
						  </thead>
						  <tbody>

							  {
						  leaves.length >0 ?
leaves.map((row,key)=>{ 

			
	return(
							  

						    <tr>
                            <td>{key}</td>
						      <td>{row.days}</td>
							  <td>{row.type}</td>
							  <td>{row.startingDate}</td>
							  <td>{row.endingDate}</td>
							  <td>{row.status}</td>
						      
							  
						    </tr>

							  )
}) :
<h3> No Leaves Found </h3>

}   
						   
						    
						  </tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</section>
    )
}

export default LeavesStatus;