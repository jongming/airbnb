import React from "react";

export default function Contact(props){

    return (
        <div className="contact-card">
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src="/images/phone-icon.png" className="contac-card--phone-icon" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src="/images/email-icon.png" className="contact-card--email-icon" />
                <p>{props.email}</p>
            </div>
        </div>
    )

}