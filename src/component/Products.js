import React from "react";
import { IconContext } from "react-icons";
import { BsFillPhoneFill } from 'react-icons/bs';
import { GiVirtualMarker } from 'react-icons/gi';
import { FcMoneyTransfer } from 'react-icons/fc';
// BsWallet2 AiOutlineWallet FaWallet FcMoneyTransfer MdPayments 
function Products(){
    return(
        <section className="product-section mt-5" id="product">
            <div className="row justify-content-center">
                <div className="col-md-3">
                    <div className="card product-card shadow-sm">
                        <div className="d-inline-flex align-items-center justify-content-between p-4">
                            <div className="card-icon">
                                <IconContext.Provider
                                    value={{ color: '#e2e3e3', size: '4rem' }}>
                                    <BsFillPhoneFill />
                                </IconContext.Provider>
                            </div>
                            <h4 className="title h5">USSD Service</h4>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card product-card shadow-sm">
                        <div className=" d-inline-flex align-items-center justify-content-between p-4">
                            <div className="card-icon">
                                <IconContext.Provider
                                        value={{ color: '#e2e3e3', size: '4rem' }}>
                                    <GiVirtualMarker />
                                </IconContext.Provider>
                            </div>
                            <h4 className="title h5">WAAS Service</h4>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card product-card shadow-sm">
                        <div className=" d-inline-flex align-items-center justify-content-between p-4">
                            <div className="card-icon">
                                <IconContext.Provider
                                    value={{ color: '#e2e3e3', size: '4rem' }}>
                                    <FcMoneyTransfer />
                                </IconContext.Provider>
                            </div>
                            <h4 className="title h5">E Payment</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Products;