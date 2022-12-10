import React from "react";
// import dash_illustration from "../assets/img/undraw_Data_trends_re_2cdy.png"
import Hero from "../component/Hero";
import Products from "../component/Products";
import Footer from "../component/layout/Footer"
// import { Link } from "react-router-dom";

const Welcome = () => {
    return(
        <section className="container-fluid p-0">
           <Hero />
           <Products />
           <Footer />
        </section>
    );
}

export default Welcome