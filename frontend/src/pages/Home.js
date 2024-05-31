import React from "react";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Trending from "../components/Trending";
import CallToAction from "../components/CallToAction";
import AppDownload from "../components/AppDownload";
import Testimonials from "../components/Testimonials";
import FrequentlyAsked from "../components/FrequentlyAsked";

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <Features />
      <Trending />
      <Testimonials />
      <FrequentlyAsked />
      <CallToAction />
      <AppDownload />
    </div>
  );
}
