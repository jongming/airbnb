import React from "react";
import Photo from "../images/katie-zaferes.png"
import Star from '../images/star.png'

export default function Card() {
    return (
        <div className="card">
            <img src={Photo} className="card--photo"></img>
            <div className="card--stats">
                <img src={Star} className="card--star"></img>
                <span>5.0</span>
                <span className="gray">(6)</span>
                <span className="gray">USA</span>
            </div>
            <p>
                Lessons with Katie Zaferes
            </p>
            <p>
                <span className="bold">From $136</span>
                / person
            </p>

        </div>

    )

}