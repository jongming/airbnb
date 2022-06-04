import React from "react";
import ReactDom from "react-dom"

export default function App() {
    const date = new Date()
    const hours = date.getHours()
    let timeofday

    if (hours < 12){
        timeofday = "morning"  
    } else if (hours >= 12 && hours <= 17){
        timeofday = "evening"
    }else{
        timeofday = "night"
    }


    return (
        <h1>Good {timeofday}!</h1>
    )
}

// ReactDom.render(<App/>, document.getElementById("root"))