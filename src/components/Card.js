import React from "react";
import Photo from "../images/katie-zaferes.png"
import Star from '../images/star.png'

export default function Card(props) {
    return (
        <div className="card">
            <img src={Photo} className="card--photo"></img>
            <div className="card--stats">
                <img src={Star} className="card--star"></img>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount})</span>
                <span className="gray">{props.country}</span>
            </div>
            <p>
                {props.title}
            </p>
            <p>
                <span className="bold">From ${props.price}</span>
                / person
            </p>

        </div>

    )

}