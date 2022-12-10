
import React from "react";
import dash_illustration from "../assets/img/undraw_financial_data_re_p0fl.svg"


function Hero(){
    return(
        <section className="hero-section container" id="home">
             <div className="row mt-5">
                <div className="col-md-6 d-flex align-items-end ">
                    <div className="p-5 mb-5">
                    <h1 className="display-6 fw-bold text-success">Welcome to 9psb</h1>
                    <h4 className="h4 mb-4">wallet as a service portal</h4>
                    <p className="text-default mb-5">
                        lorem random generated character should display here regardles of 
                        we can even read the jagonse they white here thanks for given your
                        time pls make comment on the ui design or font size!!
                     </p>
                     <div className="d-flex">
                        <button className="btn btn-success btn-lg w-25 call-to-action call-to-action login" style={{"marginRight":"2px", "borderRadius":"0"}}>
                            Login &nbsp;&nbsp;
                            <span className="fa fa-arrow-right"></span>
                        </button>
                        <button className="btn btn-outline-secondary btn-lg w-25 call-to-action document" style={{"marginLeft":"2px", "borderRadius":"0"}}>
                            Document
                        </button>
                     </div>
                     </div>
                     
                </div>
                <div className="col-md-6 bg-default">
                    <div className="d-flex justify-content-center p-5">
                        <img src={dash_illustration} alt="..." width={'500px'} height={'450px'} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;