import React from "react";
import Airbnb_logo from "../images/airbnb_logo.png";

export default function Navbar(){
    return(
        <nav>
            <img src={Airbnb_logo} className="nav--logo" />
        </nav>
        
    )
}