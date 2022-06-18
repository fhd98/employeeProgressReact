import { useState } from "react";

const Signup= ()=>{
    
const [name, setName]=useState('');
const [email, setEmail]=useState('');
const [password, setPassword]=useState('');
const [againPassword, setAgainPassword]=useState('');

const check=()=>{
    alert(name+', '+email+', '+password+', '+againPassword);
}

    return(        

<div class="register-box" class="hold-transition register-page">
  <div class="register-logo">
    <b> Employee Sign Up </b>
  </div>

  <div class="card">
    <div class="card-body register-card-body">
      <p class="login-box-msg">Register  new membership</p>

      <form action="../../index.html" method="post">
        <div class="input-group mb-3">
          <input value={name} onChange={(e)=>setName(e.target.value)} type="text" class="form-control" placeholder="Full name"/>
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-user"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" class="form-control" placeholder="Email"/>
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" class="form-control" placeholder="Password"/>
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input value={againPassword} onChange={(e)=>setAgainPassword(e.target.value)} type="password" class="form-control" placeholder="Retype password"/>
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-8">
            <div class="icheck-primary">
              <input type="checkbox" id="agreeTerms" name="terms" value="agree"/>
              <label for="agreeTerms">
               I agree to the <a href="#">terms</a>
              </label>
            </div>
          </div>
          {/* <!-- /.col --> */}
          <div class="col-4">
            <button onClick={check} type="button" class="btn btn-primary btn-block">Register</button>
          </div>
          {/* <!-- /.col --> */}
        </div>
      </form>

      <div class="social-auth-links text-center">
        <p>- OR -</p>
        <a href="#" class="btn btn-block btn-primary">
          <i class="fab fa-facebook mr-2"></i>
          Sign up using Facebook
        </a>
        <a href="#" class="btn btn-block btn-danger">
          <i class="fab fa-google-plus mr-2"></i>
          Sign up using Google+
        </a>
      </div>

      <a href="login.html" class="text-center">I already have a membership</a>
    </div>
    {/* <!-- /.form-box --> */}
  </div>
</div>
// {/* <!-- /.register-box --> */}


    )
}

export default Signup;