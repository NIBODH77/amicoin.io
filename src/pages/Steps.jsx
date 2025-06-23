import React, { useState, useEffect } from "react";
import {
  Wallet,
  Coins,
  ArrowRight,
  CheckCircle,
  BarChart2,
  Globe,
  UserCheck,
  ShoppingCart,
  ChevronDown,
  ChevronUp,
  Play,
  Download,
  Video,
} from "lucide-react";
import BlockchainAnimation from "../components/BlockchainAnimation.jsx";
import { motion, AnimatePresence } from "framer-motion";
import ReactPlayer from "react-player";

const Steps = () => {
  const [activeStep, setActiveStep] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const steps = [
    {
      icon: Wallet,
      title: "Create Wallet",
      description: "Download the AmmyCoin Wallet app or use our web wallet",
      duration: "1 min",
      videoUrl: "https://www.youtube.com/watch?v=wallet-tutorial",
      features: [
        "Biometric authentication",
        "Multi-chain support",
        "Hardware wallet integration",
      ],
    },
    {
      icon: Coins,
      title: "Buy AMMY Tokens",
      description: "Purchase through our DEX or partner exchanges",
      duration: "2-5 mins",
      videoUrl: "https://www.youtube.com/watch?v=buy-tutorial",
      features: [
        "50+ payment methods",
        "Instant fiat on-ramp",
        "Competitive rates",
      ],
    },
    {
      icon: ArrowRight,
      title: "Transfer to Wallet",
      description: "Send your AMMY tokens to your secure wallet",
      duration: "<1 min",
      videoUrl: "https://www.youtube.com/watch?v=transfer-tutorial",
      features: [
        "Near-instant transactions",
        "Low gas fees",
        "Cross-chain transfers",
      ],
    },
    {
      icon: CheckCircle,
      title: "Verify Identity",
      description:
        "Complete KYC for full platform access (optional for basic use)",
      duration: "5 mins",
      videoUrl: "https://www.youtube.com/watch?v=kyc-tutorial",
      features: [
        "AI-powered verification",
        "One-time process",
        "Privacy-focused",
      ],
    },
    {
      icon: BarChart2,
      title: "Start Staking",
      description: "Earn 24% APY by staking in our eco-friendly pools",
      duration: "2 mins",
      videoUrl: "https://www.youtube.com/watch?v=staking-tutorial",
      features: [
        "Auto-compounding",
        "Flexible unstaking",
        "Real-time analytics",
      ],
    },
    {
      icon: Globe,
      title: "Explore Ecosystem",
      description:
        "Use AMMY in our marketplace, DeFi protocols, and NFT platform",
      duration: "Ongoing",
      videoUrl: "https://www.youtube.com/watch?v=ecosystem-tutorial",
      features: [
        "500+ dApps",
        "Exclusive NFT collections",
        "Governance voting",
      ],
    },
  ];

  const walletInstructions = [
    {
      wallet: "Trust Wallet",
      steps: [
        "Navigate to Add Custom Token",
        "Select Network 'Smart Chain'",
        "Paste contract address:",
        "0x1eF72a1DF5e4d165F84fc43B20D56cAA7DaD46e1",
        "Click Enable",
      ],
    },
    {
      wallet: "Metamask",
      steps: [
        "Navigate to Setting > Network > Add Network",
        "Network Name: Smart Chain",
        "New RPC URL: https://bsc-dataseed.binance.org",
        "Chain ID: 56",
        "Currency Symbol: BNB",
        "Block explorer: https://bscscan.com",
        "Save and add token with same contract address",
      ],
    },
  ];

  const toggleStep = (index) => {
    setActiveStep(activeStep === index ? null : index);
  };

  return (
    <div className="relative bg-black min-h-screen overflow-hidden">
      <BlockchainAnimation />
      <div className="relative z-10">
        {/* Floating Navigation (appears on scroll) */}
        {isScrolled && (
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 bg-[#0a0a0a]/90 backdrop-blur-md z-50 shadow-lg"
          >
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-[#d4af37] rounded-full flex items-center justify-center">
                  <Wallet className="h-4 w-4 text-black" />
                </div>
                <span className="font-bold text-lg">AMMYI Setup</span>
              </div>
              <div className="flex space-x-4">
                <button className="text-sm bg-[#d4af37] hover:bg-[#f3d779] text-black font-medium py-1 px-4 rounded-full transition-all">
                  Buy Now
                </button>
                <button className="text-sm border border-[#d4af37] hover:bg-[#d4af37]/10 text-[#f3d779] font-medium py-1 px-4 rounded-full transition-all">
                  Support
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* 3D Animated Header */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-32 pb-20 px-4 text-center"
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{
              background: "linear-gradient(45deg, #d4af37, #f3d779, #d4af37)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              backgroundSize: "200% auto",
              animation: "shine 3s linear infinite",
            }}
          >
            How to Use AMMYI
          </motion.h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The most comprehensive guide with interactive tutorials and
            real-time assistance
          </p>

          {/* Progress Indicator */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-[#d4af37]">Setup Progress</span>
              <span className="text-sm text-gray-400">
                {Math.round(progress)}% Complete
              </span>
            </div>
            <div className="h-2 bg-[#1a2e2a] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#d4af37] to-[#f3d779]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        </motion.section>

        {/* Interactive Wallet Setup */}
        <section className="py-8 md:py-16 px-4">
          <div className="container mx-auto">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {walletInstructions.map((wallet, index) => (
                <div
                  key={index}
                  className="bg-[#1a2e2a]/80 p-4 sm:p-6 md:p-8 rounded-lg md:rounded-2xl border border-[#d4af37]/20 hover:border-[#f3d779]/40 transition-all shadow-lg"
                >
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#d4af37] mb-3 sm:mb-5 md:mb-6 flex items-center">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-[#d4af37]/20 rounded-md md:rounded-lg flex items-center justify-center mr-2 sm:mr-3 md:mr-4">
                      {index === 0 ? (
                        <svg
                          viewBox="0 0 32 32"
                          className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        >
                          <path
                            d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0z"
                            fill="#3375BB"
                          />
                          <path
                            d="M19.755 7.912l-3.755 2.138-3.755-2.138L12 8.036l3.755 2.138 3.755-2.138-1.755-1.124z"
                            fill="#FFF"
                          />
                          <path
                            d="M12 8.036v15.928l3.755 2.138V10.174L12 8.036z"
                            fill="#FFF"
                          />
                          <path
                            d="M19.755 8.036v15.928L16 26.102V10.174l3.755-2.138z"
                            fill="#FFF"
                          />
                        </svg>
                      ) : (
                        <img
                          src="https://cryptologos.cc/logos/metamask-mmt-logo.png"
                          alt="Metamask"
                          className="h-4 w-auto sm:h-5 md:h-6 object-contain"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                              "https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg";
                          }}
                        />
                      )}
                    </div>
                    Add In {wallet.wallet}
                  </h3>

                  <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                    {wallet.steps.map((step, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 mt-0.5 mr-2 sm:mr-3">
                          <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[#d4af37] rounded-full flex items-center justify-center">
                            <span className="text-[9px] sm:text-xs font-bold text-black">
                              {i + 1}
                            </span>
                          </div>
                        </div>
                        {step.includes("0x") ? (
                          <div className="w-full">
                            <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-1">
                              {step.split(":")[0]}:
                            </p>
                            <div className="relative mr-5">
                              <div className="bg-[#0a0a0a] p-2 rounded flex items-center justify-between overflow-hidden border border-[#2d2d2d]">
                                <code className="text-xs sm:text-sm text-[#f3d779] truncate pr-2">
                                  {step.split(":")[1] || step}
                                </code>
                                <button
                                  className="shrink-0 text-xs sm:text-sm px-2 py-1 bg-[#d4af37]/10 hover:bg-[#d4af37]/20 text-[#d4af37] hover:text-[#f3d779] rounded transition-all"
                                  onClick={() => {
                                    navigator.clipboard.writeText(
                                      step.split(":")[1] || step
                                    );
                                    // Add toast notification here if needed
                                  }}
                                >
                                  Copy
                                </button>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <p className="text-xs sm:text-sm md:text-base text-gray-300">
                            {step}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>

                  <button className="mt-4 sm:mt-5 md:mt-6 w-full bg-[#d4af37]/10 hover:bg-[#d4af37]/20 border border-[#d4af37]/30 text-xs sm:text-sm text-[#f3d779] py-1.5 sm:py-2 px-3 sm:px-4 rounded-md md:rounded-lg flex items-center justify-center transition-all">
                    <Play className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    Watch {wallet.wallet} Tutorial
                  </button>
                </div>
              ))}
            </motion.div>

            {/* Buy & Stake Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 md:mb-20">
              <motion.div
                className="bg-[#1a2e2a]/80 p-4 sm:p-6 rounded-xl border border-[#d4af37]/20 hover:border-[#f3d779]/40 transition-all shadow-lg"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#d4af37] mb-3 md:mb-4 flex items-center">
                  <ShoppingCart className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3" />
                  Buy & Sale AMMYI
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-4 md:mb-6">
                  You can buy AMMYI through multiple exchanges or directly via
                  our platform with 50+ payment methods.
                </p>
                <a
                  href="https://amicoin.io/buy.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs sm:text-sm md:text-base text-[#d4af37] hover:text-[#f3d779] transition-all"
                >
                  Buy Now <ArrowRight className="h-3 w-3 md:h-4 md:w-4 ml-1" />
                </a>
              </motion.div>

              <motion.div
                className="bg-[#1a2e2a]/80 p-4 sm:p-6 rounded-xl border border-[#d4af37]/20 hover:border-[#f3d779]/40 transition-all shadow-lg"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#d4af37] mb-3 md:mb-4 flex items-center">
                  <BarChart2 className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3" />
                  Stake AMMYI
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-4 md:mb-6">
                  Earn up to 24% APY by staking in our eco-friendly pools with
                  flexible unstaking options.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-gray-400">
                    Current APY:
                  </span>
                  <span className="text-sm sm:text-base md:text-lg font-bold text-[#f3d779]">
                    24%
                  </span>
                </div>
              </motion.div>

              <motion.div
                className="bg-[#1a2e2a]/80 p-4 sm:p-6 rounded-xl border border-[#d4af37]/20 hover:border-[#f3d779]/40 transition-all shadow-lg col-span-1 sm:col-span-2 lg:col-span-1"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#d4af37] mb-3 md:mb-4 flex items-center">
                  <Video className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3" />
                  NFT Marketplace
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-4 md:mb-6">
                  Explore 100+ exclusive AMMYI NFT collections with special
                  staking rewards.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 bg-[#d4af37]/10 text-[#f3d779] rounded-full">
                    Coming Soon
                  </span>
                  <span className="text-xs px-2 py-1 bg-[#d4af37]/10 text-[#f3d779] rounded-full">
                    Eco NFTs
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Interactive Step-by-Step Guide */}
        <section className="py-16 px-4 bg-[#0a0a0a]/80">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Get Started in{" "}
                <span className="text-[#d4af37]">6 Easy Steps</span>
              </motion.h2>
              <motion.p
                className="text-xl text-gray-300 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Our interactive guide adapts to your progress in real-time
              </motion.p>
            </div>

            <div className="relative">
              {/* Animated Timeline */}
              <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-[#d4af37] via-[#f3d779] to-[#d4af37] transform -translate-x-1/2"></div>

              <div className="space-y-12">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={`relative ${
                      index % 2 === 0 ? "md:pr-20" : "md:pl-20"
                    }`}
                  >
                    <div
                      className={`relative bg-[#1a2e2a] p-8 rounded-2xl border border-[#d4af37]/20 hover:border-[#f3d779]/40 transition-all shadow-xl cursor-pointer ${
                        activeStep === index ? "ring-2 ring-[#f3d779]" : ""
                      }`}
                      onClick={() => toggleStep(index)}
                    >
                      {/* Step Number with Glow Effect */}
                      <div className="absolute -top-4 -left-4 bg-[#d4af37] text-black font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-glow">
                        {index + 1}
                      </div>

                      <div className="flex items-start justify-between">
                        <div className="flex items-start">
                          <div className="bg-[#d4af37]/20 p-3 rounded-lg mr-4">
                            <step.icon className="h-6 w-6 text-[#f3d779]" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-semibold text-white">
                              {step.title}
                            </h3>
                            <span className="text-sm text-[#f3d779]">
                              {step.duration}
                            </span>
                          </div>
                        </div>
                        <button className="text-[#d4af37]">
                          {activeStep === index ? (
                            <ChevronUp />
                          ) : (
                            <ChevronDown />
                          )}
                        </button>
                      </div>

                      <AnimatePresence>
                        {activeStep === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-6 pt-6 border-t border-[#d4af37]/20">
                              <p className="text-gray-300 mb-6">
                                {step.description}
                              </p>

                              <div className="mb-6">
                                <h4 className="text-lg font-medium text-[#f3d779] mb-3">
                                  Key Features:
                                </h4>
                                <ul className="space-y-2">
                                  {step.features.map((feature, i) => (
                                    <li key={i} className="flex items-start">
                                      <div className="flex-shrink-0 mt-1 mr-3 text-[#d4af37]">
                                        <CheckCircle className="h-4 w-4" />
                                      </div>
                                      <span className="text-gray-300">
                                        {feature}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div className="bg-[#0a0a0a] rounded-lg overflow-hidden">
                                <div className="aspect-w-16 aspect-h-9">
                                  <ReactPlayer
                                    url={step.videoUrl}
                                    width="100%"
                                    height="100%"
                                    playing={
                                      isVideoPlaying && activeStep === index
                                    }
                                    controls={true}
                                    light={true}
                                  />
                                </div>
                              </div>

                              <div className="mt-6 flex flex-wrap gap-3">
                                <button
                                  className="bg-[#d4af37] hover:bg-[#f3d779] text-black font-medium py-2 px-6 rounded-full transition-all flex items-center"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setIsVideoPlaying(true);
                                  }}
                                >
                                  <Play className="h-4 w-4 mr-2" />
                                  Watch Tutorial
                                </button>
                                <button className="bg-transparent hover:bg-[#d4af37]/10 border border-[#d4af37] text-[#f3d779] font-medium py-2 px-6 rounded-full transition-all flex items-center">
                                  <Download className="h-4 w-4 mr-2" />
                                  Download Guide
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Completion Section */}
            <motion.div
              className="mt-20 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center bg-[#1a2e2a] border border-[#d4af37]/30 rounded-full px-6 py-3 mb-8 shadow-lg">
                <UserCheck className="h-5 w-5 text-[#d4af37] mr-2" />
                <span className="text-white">
                  Over 500,000 users successfully onboarded
                </span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Ready to Begin Your Journey?
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#d4af37] to-[#f3d779] hover:from-[#f3d779] hover:to-[#d4af37] text-black font-bold py-3 px-8 rounded-full transition-all shadow-lg flex items-center"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Wallet
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent hover:bg-[#d4af37]/10 border-2 border-[#d4af37] text-[#f3d779] font-bold py-3 px-8 rounded-full transition-all shadow-lg flex items-center"
                >
                  <Video className="h-5 w-5 mr-2" />
                  Full Video Guide
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Steps;
