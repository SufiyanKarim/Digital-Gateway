import React from "react";
import Hero from '../../components/hero/Hero'
import KeyFeatures from "../../components/KeyFeatures/KeyFeatures";
import ServicesOverview from "../../components/servicesOverview/ServicesOverview";
import Testimonials from "../../components/testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <KeyFeatures />
      <ServicesOverview />
      <Testimonials />
    </div>
  );
};

export default Home;
