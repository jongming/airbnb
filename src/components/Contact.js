import React from "react";

import Phone_icon from "../images/phone-icon.png";
import Email_icon from "../images/email-icon.png";


export default function Contact(props){

    return (
        <div className="contact-card">
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={Phone_icon} className="contac-card--phone-icon" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={Email_icon} className="contact-card--email-icon" />
                <p>{props.email}</p>
            </div>
        </div>
    )

}