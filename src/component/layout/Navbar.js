import React from "react";
import logo from "../../assets/img/Retina-logo-.png";

import {Link} from "react-router-dom"

const logoStyle = {
  "width":"200px",
  "height":"75px"
}
function Navbar(){

 return (
  <section>
  <header className="shadow-sm">
    <div className="px-3 py-2 bg-success text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
            <img src={logo} alt="..." style={logoStyle}/> 
          </Link>

          <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <Link href="#home" className="nav-link text-white">
                <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use href="#home"/></svg>
                Home
              </Link>
            </li>
            <li>
              <Link href="#product" className="nav-link text-white">
                <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use href="#speedometer2"/></svg>
                Product
              </Link>
            </li>
            <li>
              <Link href="#footer" className="nav-link text-white">
                <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use href="#grid"/></svg>
                Contact
              </Link>
            </li>
            <li>
              <Link href="?#" className="nav-link text-white">
                <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use href="#people-circle"/></svg>
                Customers
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="px-3 py-2 border-bottom mb-3">
      <div className="container d-flex flex-wrap justify-content-center">
      <Link href="?#"  
    className={'side-bar-tggle text-secondary p-2'} 
    type="button" 
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasWithBothOptions" 
    aria-controls="offcanvasWithBothOptions">
        <i className="fa fa-bars" aria-hidden="true"></i>
        </Link>
        <div className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto">
        </div>

        <div className="text-end">
          <Link to="/login" className="btn btn-light text-dark me-2"><i className="fa fa-sign-out" aria-hidden="true"></i>  Login</Link>
        </div>
      </div>

    </div>
  </header>
  </section>
 );
}

export default Navbar;