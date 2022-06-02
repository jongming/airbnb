import React from "react";  
import Photo_frame from "../images/pic_frames.png"

export default function Hero(){
    return (
        <section className="hero">
            <img src={Photo_frame} className="hero--photo_frame" ></img>
            <h1 className="hero--header">Online Experience</h1>
            <p className="hero--text">
                Join unique interactive activities led by one-of-a-kind host-all without leaving home.
            </p>
        </section>
    )
}
