import {  useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { TaskCompletion, TaskFetch, TaskProgress } from "../models/TaskFetch";

const TasksView =()=>{
	var empName=localStorage.getItem('EmployeeName');
	var empDept=localStorage.getItem('EmployeeDept');
	

	const[tasks, setTasks]=useState([]);

	useEffect(()=>{
		//console.log('HEllo World');
		TaskFetch({empName,empDept} ,function(result){
			setTasks(result);
		})
		
	},[])

	//console.log(tasks);


	const handleTaskCompletion=($taskId)=>{
			
			TaskCompletion($taskId, function(result){
					//console.log(result);
					window.location.reload();
					
			})

	}

	const handleProgress=($taskId)=>{
			
		TaskProgress($taskId, function(result){
				//console.log(result);
				window.location.reload();
		})

}

    return(
        <section class="ftco-section">
		<div class="container">
			
			<div class="row">
				<div class="col-md-12">
					<div class="table-wrap">
						<table class="table">
						  <thead class="thead-primary">
						    <tr>
							<th>No.</th>
						      <th>Title</th>
                              <th>Details</th>
						      <th>Deadline</th>
                              <th>Status</th>
							  <th>Mark as In-Progress</th>
							  <th>Mark as Complete</th>
                              
                              
						    </tr>
						  </thead>
						  <tbody>

							  {
tasks.length >0 ?
tasks.map((row,key)=>{ 

			//localStorage.setItem('TaskId'+key, row.task_id);
	return(
							  

						    <tr>
                            <td>{key}</td>
						      <td>{row.t_title}</td>
						      <td>{row.t_details}</td>
                              <td>{row.deadline}</td>
						      <td>{row.emp_comp_status}</td>
							  <td><Link onClick={() => handleProgress(row.task_id)} to="/tasks-view" > In-Progress</Link> </td>
                              <td><Link onClick={() => handleTaskCompletion(row.task_id)} to="/tasks-view" > Complete</Link> </td>
						    </tr>

							  )
}) :
<h3> No Tasks Found </h3>
}                 
						   
						    
						  </tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</section>
    );
}

export default TasksView;