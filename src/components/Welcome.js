const Welcome =()=>{

    var empName=localStorage.getItem('EmployeeName');
	var empDept=localStorage.getItem('EmployeeDept');
    return(

        <h2> Hello {empName} </h2>
    )
}

export default Welcome;