import React from "react";
import {MdFacebook} from "react-icons/md";
import {AiFillTwitterCircle, AiOutlineWhatsApp, AiFillInstagram, AiFillLinkedin} from "react-icons/ai";
import {IconContext} from "react-icons";
import {Link} from "react-router-dom";
import logo from "../../assets/img/Retina-logo-.png";
import "../../assets/custome.css"

function Footer(){

    return(
        <section className="footer-section container-fluid bg-success" id="footer">
            <div className="container footer-container">
                <div className="row">
                    <div className="col-md-3">
                        <h4 className="display-6 text-white">
                            <img src={logo} alt="..." />
                        </h4>
                    </div>
                    <div className="col-md-3 p-5">
                        <h4 className="display-6 text-white" style={{"fontSize":"1.3rem"}}>Menu</h4>
                        <ul className="footer-link">
                            <li className=""><Link className="text-white">About</Link></li>
                            <li className=""><Link className="text-white">Contact</Link></li>
                            <li className=""><Link className="text-white">item 3</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3 p-5">
                        <h4 className="display-6 text-white" style={{"fontSize":"1.3rem"}}>Products</h4>
                        <ul className="footer-link">
                            <li className="text-white">Pay attitude</li>
                            <li className="text-white">Waas</li>
                            <li  className="text-white">Banks 9ja</li>
                            <li className="text-white"></li>  
                        </ul>
                    </div>
                    <div className="col-md-3 p-5">
                        <div className="mb-5">
                        <h4 className="display-6 text-white" style={{"fontSize":"1.3rem"}}>Head office</h4>
                            <p className="text-white">16, Adeola Odeku Street, Victoria Island, Lagos. Nigeria.</p>
                        </div>
                        <h4 className="display-6 text-white" style={{"fontSize":"1.3rem"}}>follow us</h4>
                        <div className="d-inline-flex justify-content-between">
                        <IconContext.Provider
                                    value={{ color: '#e2e3e3', size: '2rem' }}>
                            <Link><MdFacebook /></Link>
                        </IconContext.Provider>
                        <IconContext.Provider
                                    value={{ color: '#e2e3e3', size: '2rem' }}>
                            <Link><AiFillTwitterCircle /> </Link>
                        </IconContext.Provider>
                        <IconContext.Provider
                                    value={{ color: '#e2e3e3', size: '2rem' }}>
                            <Link><AiOutlineWhatsApp /></Link>
                        </IconContext.Provider>
                        <IconContext.Provider
                                    value={{ color: '#e2e3e3', size: '2rem' }}>
                            <Link><AiFillInstagram /></Link>
                        </IconContext.Provider>
                        <IconContext.Provider
                                    value={{ color: '#e2e3e3', size: '2rem' }}>
                            <Link><AiFillLinkedin /></Link>
                        </IconContext.Provider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;