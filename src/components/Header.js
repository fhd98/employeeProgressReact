import {Link} from "react-router-dom";


const Header =()=>{


    return ( 

        <div>
            <header class="site-navbar js-sticky-header site-navbar-target" role="banner">

<div class="container">
  <div class="row align-items-center position-relative">


    <div class="site-logo">
      <a href="" class="text-black"><span class="text-primary" />Employee Progress Tracking</a>
    </div>

    <div class="col-12">
      <nav class="site-navigation text-right ml-auto " role="navigation">

        <ul class="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
          
          <li ><Link to="/">Home</Link></li>
          <li ><Link to="/about-us">About Us</Link></li>
          <li ><Link to="/signup">Sign Up</Link></li>
          <li ><Link to="/login">Log In</Link></li>
         
        </ul>
      </nav>

    </div>

    <div class="toggle-button d-inline-block d-lg-none"><a href="#" class="site-menu-toggle py-5 js-menu-toggle text-black"><span class="icon-menu h3"></span></a></div>

  </div>
</div>

</header>


        </div>


    );


}

export default Header;