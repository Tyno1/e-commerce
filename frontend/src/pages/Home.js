import React from "react";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Trending from "../components/Trending";
import CallToAction from "../components/CallToAction";

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <Features />
      <Trending />
      <CallToAction />
    </div>
  );
}
