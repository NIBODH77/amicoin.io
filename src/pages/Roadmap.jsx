import React from "react";
import { CheckCircle, Circle, Clock, Rocket, Target, Zap } from "lucide-react";
import { motion } from "framer-motion"; // Add this import at the top
import BlockchainAnimation from "../components/BlockchainAnimation.jsx";

const Roadmap = () => {
  const roadmapItems = [
    {
      quarter: "Q1 2024",
      title: "Foundation & Launch",
      status: "completed",
      items: [
        "Smart contract development and audit",
        "Community building and social media presence",
        "Initial token distribution",
        "Website and whitepaper release",
        "Team formation and advisory board",
      ],
    },
    {
      quarter: "Q2 2024",
      title: "Market Entry",
      status: "completed",
      items: [
        "DEX listings on major platforms",
        "Liquidity pool establishment",
        "Partnership announcements",
        "Mobile wallet integration",
        "First community governance proposal",
      ],
    },
    {
      quarter: "Q3 2024",
      title: "Ecosystem Expansion",
      status: "in-progress",
      items: [
        "Staking platform launch",
        "NFT marketplace integration",
        "Cross-chain bridge development",
        "Enterprise partnerships",
        "DeFi protocol integrations",
      ],
    },
    {
      quarter: "Q4 2024",
      title: "Advanced Features",
      status: "upcoming",
      items: [
        "Layer 2 scaling solution",
        "Advanced trading features",
        "Institutional investor onboarding",
        "Global marketing campaign",
        "Regulatory compliance framework",
      ],
    },
    {
      quarter: "Q1 2025",
      title: "Global Adoption",
      status: "upcoming",
      items: [
        "Major CEX listings",
        "Payment gateway integration",
        "International expansion",
        "Banking partnerships",
        "Real-world utility implementations",
      ],
    },
    {
      quarter: "Q2 2025",
      title: "Innovation & Beyond",
      status: "upcoming",
      items: [
        "AI-powered trading tools",
        "Metaverse integrations",
        "Green energy initiatives",
        "Educational platform launch",
        "Next-generation features",
      ],
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-8 w-8 text-green-400" />;
      case "in-progress":
        return <Clock className="h-8 w-8 text-yellow-400" />;
      case "upcoming":
        return <Circle className="h-8 w-8 text-gray-400" />;
      default:
        return <Circle className="h-8 w-8 text-gray-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "border-green-400 bg-green-400/10";
      case "in-progress":
        return "border-yellow-400 bg-yellow-400/10";
      case "upcoming":
        return "border-gray-400 bg-gray-400/10";
      default:
        return "border-gray-400 bg-gray-400/10";
    }
  };

  return (

     <div className="relative  overflow-hidden">
      <BlockchainAnimation />
          <div className="relative z-10"></div>
    <div className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="relative">
            <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-400 drop-shadow-[0_2px_4px_rgba(255,215,0,0.3)]">
              Roadmap
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-amber-400/30 to-purple-400/30 blur-xl rounded-full -z-10" />
          </span>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Follow our journey as we build the future of decentralized finance,
            milestone by milestone
          </p>
        </div>

        {/* Progress Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <CheckCircle className="h-12 w-12 text-green-400" />
            </div>
            <h3 className="text-3xl font-bold text-green-400 mb-2">2</h3>
            <p className="text-gray-300">Completed Phases</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <Clock className="h-12 w-12 text-yellow-400" />
            </div>
            <h3 className="text-3xl font-bold text-yellow-400 mb-2">1</h3>
            <p className="text-gray-300">In Progress</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <Rocket className="h-12 w-12 text-cyan-400" />
            </div>
            <h3 className="text-3xl font-bold text-cyan-400 mb-2">3</h3>
            <p className="text-gray-300">Upcoming</p>
          </div>
        </div>

        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400 transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10">
                  {getStatusIcon(item.status)}
                </div>

                {/* Content */}
                <div
                  className={`ml-16 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div
                    className={`bg-white/5 backdrop-blur-sm border-2 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 ${getStatusColor(
                      item.status
                    )}`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">
                        {item.title}
                      </h3>
                      <span className="text-sm font-semibold text-cyan-400 bg-cyan-400/20 px-3 py-1 rounded-full">
                        {item.quarter}
                      </span>
                    </div>

                    <ul className="space-y-3">
                      {item.items.map((taskItem, taskIndex) => (
                        <li
                          key={taskIndex}
                          className="flex items-start text-gray-300"
                        >
                          <span className="text-cyan-400 mr-3 mt-1">•</span>
                          <span>{taskItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 rounded-2xl p-12 mt-16 text-center">
          <Target className="h-16 w-16 text-cyan-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-400 drop-shadow-[0_2px_4px_rgba(255,215,0,0.3)]">
            Join Our Journey
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Be part of the AmiCoin revolution. Follow our progress, contribute
            to our community, and help shape the future of decentralized
            finance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center ">
            <button className="bg-transparent hover:bg-[#d4af37]/10 border border-[#d4af37] text-[#f3d779] font-semibold px-8 py-4 rounded-full transition-all transform hover:scale-105">
  Join Community
</button>

<button className="bg-transparent hover:bg-[#d4af37]/10 border border-[#d4af37] text-[#f3d779] font-semibold px-8 py-4 rounded-full transition-all transform hover:scale-105">
   Read Whitepaper
</button>
            
           
           
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Roadmap;
