import React from "react";
import Hero from "../components/Hero";
import CardList from "../components/CardList";



function Homepage() {
  return(
    <div className="p-4">
      <Hero />
      <CardList />
    </div>    

  );
}

export default Homepage;