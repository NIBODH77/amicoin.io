import React from "react";
import Hero from "../components/Hero.jsx";
import Features from "../components/Features.jsx";
import BlockchainAnimation from "../components/BlockchainAnimation.jsx";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background animation layer */}
      <BlockchainAnimation />

      {/* Content over animation */}
      <div className="relative z-10">
        <Hero />
        <Features />
      </div>
    </div>
  );
};

export default Home;
  