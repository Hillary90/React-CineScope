import React from "react";
import Hero from "../components/Hero";
import CardList from "../components/CardList";
import Footer from "../components/Footer";



function Homepage() {
  return(
    <div className="p-4">
      <Hero />
      <CardList title="Now Playing" category={"now_playing"}/>
      <CardList title="Top Rated" category={"top_rated"} />
      <CardList title="Popular" category={"popular"} />
      <CardList title="UPcoming" category={"upcoming"} />

      <Footer/>
    </div>    

  );
}

export default Homepage;