import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Features from "./pages/Features.jsx";
import Projects from "./pages/Projects.jsx";
import Steps from "./pages/Steps.jsx";
import Tokenomics from "./pages/Tokenomics.jsx";
import Roadmap from "./pages/Roadmap.jsx";
// import BlockchainAnimation from '../components/BlockchainAnimation';
function App() {
  return (
    <div className="relative">
      {/* Background animation layer */}
      {/* <BlockchainAnimation /> */}
      {/* Content over animation */}
      <div className="min-h-screen bg-black ">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/steps" element={<Steps />} />
          <Route path="/tokenomics" element={<Tokenomics />} />
          <Route path="/roadmap" element={<Roadmap />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
