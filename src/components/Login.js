import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../store/Context";

const Login =()=>{

    const {globalState, globalDispatch} =useContext(Context);
    const Navigate = useNavigate();


const [email, setEmail]=useState('');
const [password, setPassword]=useState('');



const handleLogin=(e)=>{
    
    e.preventDefault();

    globalDispatch ({ type: 'TOKEN', data: {token: 'fahad123'} });

    let isLoggedIn= globalState?.token?.token;
    console.log(isLoggedIn);
    if(isLoggedIn === undefined || isLoggedIn === '') {
        Navigate ('/tasks-view'); }
        else {
            Navigate ('login');
        }
}



    return (
<div class="login-box" class="hold-transition login-page">
  <div class="login-logo">
  <b>Log In </b>
  </div>
  {/* <!-- /.login-logo --> */}
  <div class="card">
    <div class="card-body login-card-body">
      <p class="login-box-msg">Sign in to start your session</p>

      <form onSubmit={handleLogin}>
        <div class="input-group mb-3">
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" class="form-control" placeholder="Email"/>
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" class="form-control" placeholder="Password" /> 
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div class="row">
          
          {/* <!-- /.col --> */}
          <div class="col-12">
            <button type="submit"  class="btn btn-primary btn-block">Sign In</button>
          </div>
          {/* <!-- /.col --> */}
        </div>
      </form>

      <div class="social-auth-links text-center mb-3">
        <p>- OR -</p>
        <a href="#" class="btn btn-block btn-primary">
          <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
        </a>
        <a href="#" class="btn btn-block btn-danger">
          <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
        </a>
      </div>
      {/* <!-- /.social-auth-links --> */}

      <p class="mb-1">
        <a href="forgot-password.html">I forgot my password</a>
      </p>
      <p class="mb-0">
        <a href="register.html" class="text-center">Register a new membership</a>
      </p>
    </div>
    {/* <!-- /.login-card-body --> */}
  </div>
</div>
    )
}

export default Login;