import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignUpCall } from "../models/LoginFetch";

const Signup= ()=>{

    const Navigate= useNavigate();
const [name, setName]=useState('');
const [email, setEmail]=useState('');
const [password, setPassword]=useState('');
const [gender, setGender]=useState('');
const [dept, setDept]=useState('');
const [error, setError]=useState('');


const [isLoading, setIsLoading] = useState(false);



const handleSignup=(e)=>{
    e.preventDefault();
    setIsLoading(true);
    SignUpCall({name:name, email:email, password:password, gender:gender, dept:dept}, function(result) 
    {


      if(result.status == "exists"){
        setError(result);
        setIsLoading(false);
      }
      else{

        console.log(result);
        setIsLoading(false);
        Navigate ('/login');
      }


    });
}

    return(        

<div class="register-box" class="hold-transition register-page">
  <div class="register-logo">
    <b> Employee Sign Up </b>
  </div>

  <div class="card">
    <div class="card-body register-card-body">
      <p class="login-box-msg">Register  new membership</p>


      {
error =="" ?
(()=>{ 

			//localStorage.setItem('TaskId'+key, row.task_id);
	return(
							  
<></>  )
}) :

<div class="alert alert-danger" role="alert">
Email Already Exists.
</div>

}



      <form method="POST"  onSubmit={(e)=>{ handleSignup(e)} }>
        <div class="input-group mb-3">
          <input required value={name} onChange={(e)=>setName(e.target.value)} type="text" class="form-control" placeholder="Full name"/>
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-user"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input required value={email} onChange={(e)=>setEmail(e.target.value)} type="email" class="form-control" placeholder="Email"/>
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input required value={password} onChange={(e)=>setPassword(e.target.value)} type="password" class="form-control" placeholder="Password"/>
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>

        <div class="form-group">
                        
                        <select required value={gender} onChange={(e)=>setGender(e.target.value)} class="form-control">
                          <option value="">Choose Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          
                        </select>
                      </div>

        <div class="form-group">
                        
                        <select required value={dept} onChange={(e)=>setDept(e.target.value)} class="form-control">
                          <option value="">Choose Department</option>
                          <option value="reporting">Reporting</option>
                          <option value="development">Development</option>
                          <option value="operations">Operations</option>
                          
                        </select>
                      </div>              
        
        <div class="row">
          
          {/* <!-- /.col --> */}
          <div class="col-12">
          <button type="submit"  class="btn btn-primary btn-block" disabled={isLoading}>Register</button>
          </div>
          {/* <!-- /.col --> */}
        </div>
      </form>

      

      
    </div>
    {/* <!-- /.form-box --> */}
  </div>
</div>
// {/* <!-- /.register-box --> */}


    )
}

export default Signup;