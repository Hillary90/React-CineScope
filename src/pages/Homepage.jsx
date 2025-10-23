import React from "react";
import Hero from "../components/Hero";
import CardList from "../components/CardList";
import Footer from "../components/Footer";



function Homepage() {
  return(
    <div className="p-4">
      <Hero />
      <CardList />
      <Footer/>
    </div>    

  );
}

export default Homepage;