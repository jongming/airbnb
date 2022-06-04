import React from "react";  
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card"
import Contact from "./components/Contact"
import Photo1 from "./images/cat1.png";
import Photo2 from "./images/cat2.png";
import Photo3 from "./images/cat3.png";
import Photo4 from "./images/cat4.png";

export default function App(){
  return(

    <div className="contacts">
      <Contact 
        img={Photo1}
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact 
        img={Photo2}
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contact 
          img={Photo3}
          name="Felix"
          phone="(212) 555-4567"
          email="thecat@hotmail.com"
      />
      <Contact 
          img={Photo4}
          name="Pumpkin"
          phone="(0800) CAT KING"
          email="pumpkin@scrimba.com"
      />






      {/* <Navbar></Navbar>
      <Hero></Hero>
      <Card></Card> */}
    </div>
  )
}