const Welcome =()=>{

    var empName=localStorage.getItem('EmployeeName');
	var empDept=localStorage.getItem('EmployeeDept');
    return(
<>
        <h2> Hello, {empName} </h2>
        <h3> Department: {empDept} </h3>
        </>
    )
}

export default Welcome;