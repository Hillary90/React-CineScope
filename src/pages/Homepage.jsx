import React from "react";
import Hero from "../components/Hero";
import CardList from "../components/CardList";
import Footer from "../components/Footer";
import requests from "../utility/Request";
import GerneList from "../components/GerneList.";





function Homepage() {
  return(
    <div className="p-4">
      <Hero />
      <GerneList />
      <CardList title="Trending this Week" fetchUrl={requests.requestTrending}/>
      <CardList title="Top Rated" fetchUrl={requests.requestTopRated} />
      <CardList title="Popular Movies" fetchUrl={requests.requestPopular} />
      <CardList title="UpComing" fetchUrl={requests.requestUpcoming} />
      <Footer/>
    </div>    

  );
}

export default Homepage;