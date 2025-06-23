import React from "react";
import {
  Shield,
  Zap,
  Globe as LucideGlobe,
  Lock,
  Users,
  TrendingUp,
} from "lucide-react";
import BlockchainAnimation from "../components/BlockchainAnimation.jsx";

const FeatureBlock = ({
  title,
  desc,
  buttons = [],
  imageUrl,
  align = "left",
}) => {
  return (
    <div className="relative  overflow-hidden">
      <BlockchainAnimation />
      <div className="flex flex-col md:flex-row items-center mb-20 gap-6 md:gap-0 relative z-10">
        {/* Left Content (always shown on mobile, conditionally on desktop) */}
        <div
          className={`md:w-1/2 ${
            align === "left"
              ? "order-1 md:pr-10"
              : "order-1 md:order-2 md:pl-10"
          }`}
        >
          <div className="flex flex-col items-center md:items-start relative z-10">
            <h3 className="text-yellow-400 text-xl md:text-2xl font-semibold mb-4 text-center md:text-left">
              {title}
            </h3>
            <p className="text-gray-300 text-sm md:text-base mb-6 text-center md:text-left">
              {desc}
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {buttons.map((btnText, idx) => (
                <button
                  key={idx}
                  className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 px-6 rounded-full text-sm md:text-base transition"
                >
                  {btnText}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Center Dot */}
        <div className="flex-shrink-0 w-6 h-6 bg-yellow-500 rounded-full border-4 border-black mx-4 z-10" />

        {/* Right Image (always shown on mobile, conditionally on desktop) */}
        <div
          className={`md:w-1/2 flex justify-center ${
            align === "left"
              ? "order-3 md:pl-10"
              : "order-3 md:order-1 md:pr-10"
          }`}
        >
          <img
            src={imageUrl}
            alt={title}
            className="h-32 w-32 md:h-48 md:w-48 object-contain transition-all hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  const gridFeatures = [
    {
      icon: Shield,
      title: "Military-Grade Security",
      description: "Quantum-resistant encryption and multi-signature wallets",
      color: "text-[#d4af37]",
    },
    {
      icon: Zap,
      title: "Instant Transactions",
      description: "Near-zero latency with our proprietary consensus algorithm",
      color: "text-[#f3d779]",
    },
    {
      icon: LucideGlobe,
      title: "Global Payments",
      description: "Borderless transactions with minimal fees (<0.1%)",
      color: "text-[#d4af37]",
    },
    {
      icon: Lock,
      title: "Regulatory Compliance",
      description: "Fully compliant with FATF travel rule and KYC/AML",
      color: "text-[#f3d779]",
    },
    {
      icon: Users,
      title: "DAO Governance",
      description: "Community-driven protocol upgrades and decisions",
      color: "text-[#d4af37]",
    },
    {
      icon: TrendingUp,
      title: "High-Yield Staking",
      description: "Earn up to 24% APY through our sustainable staking pools",
      color: "text-[#f3d779]",
    },
  ];

  return (
    <div className=" relative z-20 py-16 md:py-24 px-4 mt-10">
      {/* Title */}
      <h2 className="text-center relative z-[100] text-yellow-400 text-3xl md:text-5xl font-bold mb-12 md:mb-20">
        AMMYI Features
      </h2>

      {/* Timeline Section */}
      <div className="relative max-w-6xl mx-auto mb-20 md:mb-32 relative z-10">
        <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-yellow-500 transform -translate-x-1/2 z-0 hidden md:block" />
        <div className="relative z-10 space-y-16 md:space-y-24">
          <FeatureBlock
            title="Stake"
            desc="Unique Defi smart contract platform for multily AMMYI.
get annually 24% and H/Y 10% APR from 400 million supply is locked for Staking rewards"
            buttons={["CLIK TO START"]}
            imageUrl="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
            align="left"
          />
          <FeatureBlock
            title="Buy AMMYI"
            desc="Exchange between all popular currencies with a couple of clicks. Instant buy from multiple pair."
            buttons={["ETH/AMMYI", "INR AMMYI", "MULTIPLE"]}
            imageUrl="https://cdn-icons-png.flaticon.com/512/2920/2920277.png"
            align="right"
          />

          <FeatureBlock
            title="NFTrees"
            desc="Connecting peoples from virtual world to Real World, from real Plant NFT's
Plant a oxygen generated tree, upload the image, get listed & earn AMMYI as listing reward, also sale your Image as a NFT."
            buttons={["LAUNCHING SOON"]}
            imageUrl="https://cdn-icons-png.flaticon.com/512/427/427735.png"
            align="left"
          />
          <FeatureBlock
            title="AMMYI Web"
            desc="Create your webstore website in 2 minuts, select templete, choose design and go. accept AMMYI as payment for your goods."
            button="COMING 2025"
            imageUrl="https://cdn-icons-png.flaticon.com/512/891/891462.png"
            align="right"
          />
        </div>
      </div>

      {/* Icon Grid Features */}
      <div className="container mx-auto px-4 mb-16 md:mb-24 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
            Why Choose <span className="text-[#d4af37]">AmmyCoin?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge technology designed for mass adoption
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
          {gridFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-[#1a2e2a]/90 p-6 md:p-8 rounded-xl md:rounded-2xl border border-[#d4af37]/20 hover:border-[#f3d779]/40 transition-all"
            >
              <div className={`${feature.color} mb-4 md:mb-6`}>
                <feature.icon className="h-10 w-10 md:h-12 md:w-12" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Stats */}
      <div className="mt-12 md:mt-20 text-center relative z-10">
        <h3 className="text-2xl md:text-3xl font-bold text-[#d4af37] mb-6">
          Technical Specifications
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-gray-300 max-w-5xl mx-auto">
          <div className="p-4">
            <p className="text-xl md:text-2xl font-bold text-white">0.1s</p>
            <p className="text-xs md:text-sm">Block Time</p>
          </div>
          <div className="p-4">
            <p className="text-xl md:text-2xl font-bold text-white">$0.001</p>
            <p className="text-xs md:text-sm">Avg. Fee</p>
          </div>
          <div className="p-4">
            <p className="text-xl md:text-2xl font-bold text-white">10M+</p>
            <p className="text-xs md:text-sm">Active Wallets</p>
          </div>
          <div className="p-4">
            <p className="text-xl md:text-2xl font-bold text-white">24/7</p>
            <p className="text-xs md:text-sm">Uptime</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
