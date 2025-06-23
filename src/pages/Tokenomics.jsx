import React from "react";
import { PieChart, TrendingUp, Lock, Users, Zap, Gift } from "lucide-react";
import BlockchainAnimation from '../components/BlockchainAnimation.jsx';

const Tokenomics = () => {
  const tokenDistribution = [
    { name: "Public Sale", percentage: 40, color: "bg-cyan-400", icon: Users },
    {
      name: "Liquidity Pool",
      percentage: 25,
      color: "bg-purple-400",
      icon: Zap,
    },
    {
      name: "Team & Advisors",
      percentage: 15,
      color: "bg-pink-400",
      icon: Lock,
    },
    {
      name: "Development",
      percentage: 10,
      color: "bg-green-400",
      icon: TrendingUp,
    },
    { name: "Marketing", percentage: 5, color: "bg-yellow-400", icon: Gift },
    { name: "Reserve", percentage: 5, color: "bg-orange-400", icon: PieChart },
  ];

  const tokenMetrics = [
    { label: "Total Supply", value: "1,000,000,000", suffix: "AMI" },
    { label: "Circulating Supply", value: "400,000,000", suffix: "AMI" },
    { label: "Market Cap", value: "$2,500,000", suffix: "" },
    { label: "Current Price", value: "$0.00625", suffix: "" },
  ];

  return (
    
     <div className="relative  overflow-hidden">
      <BlockchainAnimation />
          <div className="relative z-10">
    <div className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-400 drop-shadow-[0_2px_4px_rgba(255,215,0,0.3)]">
              Tokenomics
            </span>{" "}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Understand the economic model behind AmiCoin and how our token
            distribution ensures long-term sustainability
          </p>
        </div>

        {/* Token Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {tokenMetrics.map((metric, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/5 to-amber-500/5 backdrop-blur-sm border border-amber-400/20 rounded-2xl p-6 text-center hover:bg-amber-500/10 transition-all duration-300 hover:border-amber-400/30 hover:shadow-[0_4px_12px_rgba(245,158,11,0.15)]"
            >
              <h3 className="text-3xl font-bold mb-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300 drop-shadow-[0_2px_4px_rgba(255,215,0,0.3)]">
                  {metric.value}
                </span>
                <span className="text-lg text-gray-400 ml-1">
                  {metric.suffix}
                </span>
              </h3>
              <p className="text-gray-300">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Token Distribution */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 drop-shadow-[0_2px_4px_rgba(245,158,11,0.3)]">
              Token Distribution
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Pie Chart Representation */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <svg
                  className="w-full h-full transform -rotate-90"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="8"
                  />
                  {/* Dynamic pie chart segments would go here - simplified for demo */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeDasharray="100 251"
                    className="text-cyan-400"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <PieChart className="h-12 w-12 text-white mx-auto mb-2" />
                    <p className="text-white font-semibold">AMI Token</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Distribution List */}
            <div className="space-y-4">
              {tokenDistribution.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-lg ${item.color}`}>
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-white font-medium">{item.name}</span>
                  </div>
                  <span className="text-2xl font-bold text-cyan-400">
                    {item.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Utility & Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Zap className="h-8 w-8 text-cyan-400 mr-3 " />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-400 drop-shadow-[0_2px_4px_rgba(255,215,0,0.3)]">
                Token Utility
              </span>
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Governance voting rights for protocol decisions</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Staking rewards up to 12% APY</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Reduced transaction fees for holders</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Access to exclusive DeFi products</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Liquidity mining rewards</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Lock className="h-8 w-8 text-purple-400 mr-3 drop-shadow-[0_0_4px_rgba(192,132,252,0.6)]" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-400 drop-shadow-[0_2px_4px_rgba(255,215,0,0.3)]">
                Vesting Schedule
              </span>
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Team tokens locked for 12 months</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Linear vesting over 24 months after cliff</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Development funds released quarterly</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Marketing budget distributed monthly</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Reserve tokens held for emergencies</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Tokenomics;
