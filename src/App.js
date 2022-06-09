import React from "react";  
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card"
import data from "./components/data"

export default function App(){
  const elements = data.map(element => {
    return (<Card 
        key={element.id}
        {...element}
        // element = {element}
        // image={element.coverImg} 
        // title={element.title} 
        // location={element.location}
        // price={element.price} 
        // rating={element.stats.rating} 
        // reviewCount={element.stats.reviewCount} 
        // openSpots = {element.openSpots}
        />
        
    )
  })

  return(
    <div className="contacts">
      <Navbar></Navbar>
      <Hero></Hero>
      <section className="cards-list">
        {elements}
      </section>
      


    </div>
  )
}