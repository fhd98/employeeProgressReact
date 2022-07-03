import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginCall } from "../models/LoginFetch";
import Context from "../store/Context";

const Login = () => {

    const { globalDispatch } = useContext(Context);
    const Navigate = useNavigate();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');

    const [isLoading, setIsLoading] = useState(false);




    const handleLogin = (e) => {


        e.preventDefault();
        setIsLoading(true);

        LoginCall({ email: email, password: password }, function (result) {
            console.log(result);
            if (result.log === "Success") {
                if (result.userDetails.status == "approved") {
                    console.log("Approved");
                    globalDispatch({ type: 'TOKEN', data: { token: 'logged in' } });
                    //set local storage here
                    localStorage.setItem('EmployeeName', result.userDetails.e_name);
                    localStorage.setItem('EmployeeDept', result.userDetails.department);
                    localStorage.setItem('EmployeeID', result.userDetails.employeeID);



                    setIsLoading(false);
                    Navigate('/welcome');
                }
                else {
                    setIsLoading(false);
                    setError("pending");
                    console.log(error);
                    //Navigate('/pending-login');
                }
            }


            else {
                setIsLoading(false);
                setError("not exist");
                console.log(error);
                //Navigate('/error-login');
            }
        })

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




                    {(() => {
                        if (error == "") {
                            return (
                                <></>
                            )
                        } else if (error == "pending") {
                            return (
                                <div class="alert alert-danger" role="alert">
                                    Your Request is still Pending.
                                </div>
                            )
                        } else {
                            return (
                                <div class="alert alert-danger" role="alert">
                                    Invalid Email or Password.
                                </div>
                            )
                        }
                    })()
                    }



                    <form onSubmit={(e) => { handleLogin(e) }}>
                        <div class="input-group mb-3">
                            <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" class="form-control" placeholder="Email" />
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-envelope"></span>
                                </div>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" class="form-control" placeholder="Password" />
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <div class="row">

                            {/* <!-- /.col --> */}
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary btn-block" disabled={isLoading}>Sign In</button>
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