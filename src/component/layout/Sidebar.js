import React from "react";
import {MdEditNotifications, MdAccountBalance} from "react-icons/md"
import {GrTransaction} from "react-icons/gr"
import {
  Link
} from "react-router-dom";

const iconConfig ={
  color:""
}
function Sidebar(){

    return (
        <section>
          <div className="offcanvas offcanvas-start side-bar" data-bs-scroll="true" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title h5 text-center w-100 fw-bold py-3" id="offcanvasWithBothOptionsLabel">9PSB WAAS PORTAL </h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <div className="row">
              <div className="offset-1 col-10">
    <hr />
    <ul className="nav nav-pills  flex-column mb-auto">
      <li className="nav-item mb-2">
        <Link to="/" className="nav-link active" aria-current="page">
        <i className="fa fa-house"></i>  Home
        </Link>
      <hr />

      </li>
      <li className="nav-item mb-2">
        <Link to="/account" className="nav-link link-dark">
        <MdAccountBalance 
          css={iconConfig}
          size={20}
         /> Account
        </Link>
      </li>
      <li className="nav-item mb-2">
        <Link to="/transaction" className="nav-link link-dark">
        <GrTransaction
          css={iconConfig}
          size={20}
        /> Transaction
        </Link>
      </li>
      <li className="nav-item mb-2">
        <Link to="/notification" className="nav-link link-dark">
        <MdEditNotifications
          css={iconConfig}
          size={20}
        /> Notification
        </Link>
      </li>
      <li className="nav-item">
      <hr/>

        <Link to="/logout" className="nav-link link-dark">
        <i className="fa fa-sign-out" aria-hidden="true"></i>  Logout
        </Link>
      </li>
    </ul>
    
        </div>
    </div>
    </div>
  </div>
</section>
       
        
    );
}

export default Sidebar;