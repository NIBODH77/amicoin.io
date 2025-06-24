// import React from "react";
// import { Target, Eye, Heart, Users, Globe, Zap } from "lucide-react";
// import BlockchainAnimation from "../components/BlockchainAnimation.jsx";

// // Using a relevant cryptocurrency/blockchain image from a free image service
// const aboutImage =
//   "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2232&auto=format&fit=crop";

// const About = () => {
//   return (
//     <div className="relative min-h-screen overflow-hidden">
//       <BlockchainAnimation />
//       <div className="bg-black text-white">
//         {/* Hero Section */}

//         <section className="pt-24 pb-16 px-4  relative z-10">
//           <div className="container mx-auto max-w-7xl">
//             <div className="grid md:grid-cols-2 gap-10 items-center">
//               {/* Text Content */}
//               <div>
//                 <h2 className="text-4xl font-bold text-[#d4af37] mb-6">
//                   About The Project
//                 </h2>
//                 <p className="text-gray-300 mb-4">
//                   Join the AMMYI ECO-System in order to take advantage of our
//                   innovative features!
//                 </p>
//                 <p className="text-gray-300 mb-4">
//                   Start Staking the AMMYI and get annually 24% & H/Y 10% APR
//                 </p>
//                 <p className="text-gray-300 mb-4">
//                   AMMYI Community introducing Oxygen generated plant NFTrees,
//                   connecting people from virtual world to reality.
//                 </p>
//                 <p className="text-gray-300 mb-6">
//                   AMMYI helps you create your online marketplace in under 1
//                   minute using AMMYI Coin as a payment method.
//                 </p>
//                 <div className="flex flex-wrap gap-4">
//                   <a
//                     href="\assets\AMI.pdf"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-[#1a2e2a] border border-[#d4af37]/50 text-[#f3d779] hover:bg-[#d4af37]/10 hover:border-[#f3d779]/70 hover:text-white px-6 py-3 rounded-lg transition-all duration-300"
//                   >
//                     WHITEPAPER
//                   </a>
//                   <a
//                     href="https://amicoin.io/buy.aspx"
//                     className="bg-gradient-to-r from-[#d4af37] to-[#f3d779] text-black hover:from-[#f3d779] hover:to-[#d4af37] px-6 py-3 rounded-lg font-medium transition-all duration-300"
//                   >
//                     Buy Tokens Now!
//                   </a>
//                 </div>
//               </div>

//               {/* Image */}
//               <div className="flex justify-center">
//                 <img
//                   src={aboutImage}
//                   alt="Blockchain technology"
//                   className="rounded-lg shadow-lg max-w-full h-auto border border-[#d4af37]/30 object-cover"
//                   style={{ height: "400px" }}
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Rest of the sections remain unchanged */}
//         {/* Global Marketplace */}
//         <section className="relative z-10 bg-[#1a2e2a]/90 py-16 px-4 border-t border-[#d4af37]/20">
//           <div className="container mx-auto max-w-5xl">
//             <h2 className="text-3xl text-center font-semibold text-[#d4af37] mb-8">
//               Global Marketplace Portal
//             </h2>
//             <div className="relative z-20 bg-[#1a2e2a] p-6 rounded-lg border border-[#d4af37]/20">
//               <p className="text-gray-300 mb-4">
//                 Creating your homepage is easy with AMMYI WEB. In just 2
//                 minutes, you can create your free website — no coding needed.
//                 Pick a design template and launch instantly. Includes guestbook,
//                 survey, counter, and more.
//               </p>
//               <p className="text-gray-300 mb-4">
//                 Your site is free and you can start right away.
//               </p>
//               <p className="text-gray-300">
//                 Easy to use, flexible, customizable — and packed with premium
//                 features.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Mission & Vision */}
//         <section className="pt-20 pb-10 px-4 relative z-10">
//           <div className="container mx-auto max-w-6xl">
//             <div className="text-center mb-12">
//               <h1 className="text-4xl md:text-5xl font-bold text-white">
//                 About
//                 <span className="bg-gradient-to-r from-[#d4af37] to-[#f3d779] bg-clip-text text-transparent ml-2">
//                   AmiCoin
//                 </span>
//               </h1>
//               <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-4">
//                 Building the future of decentralized finance with innovation,
//                 security, and community at our core.
//               </p>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//               <div className="relative z-20 bg-[#1a2e2a] border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#f3d779]/40 transition-colors duration-300">
//                 <div className="flex items-center mb-6">
//                   <Target className="h-8 w-8 text-[#d4af37] mr-4" />
//                   <h2 className="text-3xl font-bold text-white">Our Mission</h2>
//                 </div>
//                 <p className="text-gray-300 text-lg leading-relaxed">
//                   To democratize access to financial services through innovative
//                   blockchain technology, building an inclusive and transparent
//                   financial ecosystem.
//                 </p>
//               </div>

//               <div className="relative z-20 bg-[#1a2e2a] border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#f3d779]/40 transition-colors duration-300">
//                 <div className="flex items-center mb-6">
//                   <Eye className="h-8 w-8 text-[#f3d779] mr-4" />
//                   <h2 className="text-3xl font-bold text-white">Our Vision</h2>
//                 </div>
//                 <p className="text-gray-300 text-lg leading-relaxed">
//                   To be the world's most trusted decentralized cryptocurrency,
//                   empowering people to manage their financial future securely
//                   and transparently.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Core Values */}
//         <section className="py-20 px-4 relative z-10">
//           <div className="container mx-auto max-w-6xl">
//             <h2 className="text-4xl font-bold text-center text-white mb-12">
//               Our Core Values
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {/* Value: Transparency */}
//               <div className="text-center group relative z-20">
//                 <div className="bg-gradient-to-r from-[#d4af37] to-[#f3d779] rounded-full p-4 w-20 h-20 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
//                   <Heart className="h-12 w-12 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-[#f3d779] transition-colors duration-300">
//                   Transparency
//                 </h3>
//                 <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
//                   Complete openness in all operations, building trust and
//                   accountability.
//                 </p>
//               </div>

//               {/* Value: Community */}
//               <div className="text-center group relative z-20">
//                 <div className="bg-gradient-to-r from-[#d4af37] to-[#f3d779] rounded-full p-4 w-20 h-20 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
//                   <Users className="h-12 w-12 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-[#f3d779] transition-colors duration-300">
//                   Community
//                 </h3>
//                 <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
//                   Decisions made together, with a people-first approach.
//                 </p>
//               </div>

//               {/* Value: Innovation */}
//               <div className="text-center group relative z-20">
//                 <div className="bg-gradient-to-r from-[#d4af37] to-[#f3d779] rounded-full p-4 w-20 h-20 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
//                   <Zap className="h-12 w-12 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-[#f3d779] transition-colors duration-300">
//                   Innovation
//                 </h3>
//                 <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
//                   Always pushing the boundaries of blockchain and DeFi.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Our Story */}
//         <section className="pb-24 px-4 relative z-10">
//           <div className="container mx-auto max-w-5xl">
//             <div className="relative z-20 bg-[#1a2e2a] border border-[#d4af37]/20 rounded-2xl p-12 hover:border-[#f3d779]/40 transition-colors duration-300">
//               <div className="text-center mb-12">
//                 <Globe className="h-16 w-16 text-[#d4af37] mx-auto mb-6" />
//                 <h2 className="text-4xl font-bold text-white mb-6">
//                   Our Story
//                 </h2>
//               </div>
//               <div>
//                 <p className="text-gray-300 text-lg leading-relaxed mb-6">
//                   AmiCoin was created with a simple vision: to provide a truly
//                   user-centric cryptocurrency. Backed by experts in blockchain,
//                   finance, and tech, it aims to make DeFi accessible to
//                   everyone.
//                 </p>
//                 <p className="text-gray-300 text-lg leading-relaxed mb-6">
//                   In early 2024, we launched AmiCoin to empower users — not just
//                   investors — with an eco-conscious, fast, and secure blockchain
//                   experience.
//                 </p>
//                 <p className="text-gray-300 text-lg leading-relaxed">
//                   Today, AmiCoin stands for financial independence,
//                   community-driven innovation, and a global movement toward
//                   inclusive finance.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";
import { Target, Eye, Heart, Users, Globe, Zap } from "lucide-react";
import BlockchainAnimation from "../components/BlockchainAnimation.jsx";

const About = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <BlockchainAnimation />
      <div className="bg-black text-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 relative z-10">
          <div className="container mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Text Content */}
              <div>
                <h2 className="text-4xl font-bold text-[#d4af37] mb-6">
                  About The Project
                </h2>
                <p className="text-gray-300 mb-4">
                  Join the AMMYI ECO-System in order to take advantage of our
                  innovative features!
                </p>
                <p className="text-gray-300 mb-4">
                  Start Staking the AMMYI and get annually 24% & H/Y 10% APR
                </p>
                <p className="text-gray-300 mb-4">
                  AMMYI Community introducing Oxygen generated plant NFTrees,
                  connecting people from virtual world to reality.
                </p>
                <p className="text-gray-300 mb-6">
                  AMMYI helps you create your online marketplace in under 1
                  minute using AMMYI Coin as a payment method.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="\assets\AMI.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1a2e2a] border border-[#d4af37]/50 text-[#f3d779] hover:bg-[#d4af37]/10 hover:border-[#f3d779]/70 hover:text-white px-6 py-3 rounded-lg transition-all duration-300"
                  >
                    WHITEPAPER
                  </a>
                  <a
                    href="https://amicoin.io/buy.aspx"
                    className="bg-gradient-to-r from-[#d4af37] to-[#f3d779] text-black hover:from-[#f3d779] hover:to-[#d4af37] px-6 py-3 rounded-lg font-medium transition-all duration-300"
                  >
                    Buy Tokens Now!
                  </a>
                </div>
              </div>

              {/* Large Animated SVG */}
              <div className="flex justify-center items-center">
                <svg
                  width="500"
                  height="400"
                  viewBox="0 0 500 400"
                  className="border border-[#d4af37]/30 rounded-lg"
                >
                  {/* Background */}
                  <rect width="500" height="400" fill="#0d1a17" />

                  {/* Blockchain Blocks */}
                  <g transform="translate(50, 50)">
                    {/* Left Chain */}
                    <g>
                      <rect
                        x="0"
                        y="50"
                        width="60"
                        height="60"
                        rx="5"
                        fill="#1a2e2a"
                        stroke="#d4af37"
                        strokeWidth="2"
                      />
                      <text
                        x="30"
                        y="85"
                        fill="#d4af37"
                        textAnchor="middle"
                        fontSize="20"
                        fontWeight="bold"
                      >
                        A
                      </text>
                    </g>
                    <g>
                      <rect
                        x="0"
                        y="130"
                        width="60"
                        height="60"
                        rx="5"
                        fill="#1a2e2a"
                        stroke="#d4af37"
                        strokeWidth="2"
                      />
                      <text
                        x="30"
                        y="165"
                        fill="#d4af37"
                        textAnchor="middle"
                        fontSize="20"
                        fontWeight="bold"
                      >
                        M
                      </text>
                    </g>
                    <g>
                      <rect
                        x="0"
                        y="210"
                        width="60"
                        height="60"
                        rx="5"
                        fill="#1a2e2a"
                        stroke="#d4af37"
                        strokeWidth="2"
                      />
                      <text
                        x="30"
                        y="245"
                        fill="#d4af37"
                        textAnchor="middle"
                        fontSize="20"
                        fontWeight="bold"
                      >
                        I
                      </text>
                    </g>

                    {/* Right Chain */}
                    <g>
                      <rect
                        x="380"
                        y="50"
                        width="60"
                        height="60"
                        rx="5"
                        fill="#1a2e2a"
                        stroke="#f3d779"
                        strokeWidth="2"
                      />
                      <text
                        x="410"
                        y="85"
                        fill="#f3d779"
                        textAnchor="middle"
                        fontSize="20"
                        fontWeight="bold"
                      >
                        C
                      </text>
                    </g>
                    <g>
                      <rect
                        x="380"
                        y="130"
                        width="60"
                        height="60"
                        rx="5"
                        fill="#1a2e2a"
                        stroke="#f3d779"
                        strokeWidth="2"
                      />
                      <text
                        x="410"
                        y="165"
                        fill="#f3d779"
                        textAnchor="middle"
                        fontSize="20"
                        fontWeight="bold"
                      >
                        O
                      </text>
                    </g>
                    <g>
                      <rect
                        x="380"
                        y="210"
                        width="60"
                        height="60"
                        rx="5"
                        fill="#1a2e2a"
                        stroke="#f3d779"
                        strokeWidth="2"
                      />
                      <text
                        x="410"
                        y="245"
                        fill="#f3d779"
                        textAnchor="middle"
                        fontSize="20"
                        fontWeight="bold"
                      >
                        I
                      </text>
                    </g>

                    {/* Center Coin */}
                    <g>
                      <circle
                        cx="220"
                        cy="150"
                        r="80"
                        fill="url(#coinGradient)"
                        stroke="#d4af37"
                        strokeWidth="3"
                      />
                      <text
                        x="220"
                        y="150"
                        fill="white"
                        textAnchor="middle"
                        fontSize="40"
                        fontWeight="bold"
                        dy="10"
                      >
                        ₳
                      </text>
                    </g>

                    {/* Connecting Lines */}
                    {/* Left chain connections */}
                    <line
                      x1="60"
                      y1="80"
                      x2="140"
                      y2="150"
                      stroke="#d4af37"
                      strokeWidth="2"
                    />
                    <line
                      x1="60"
                      y1="160"
                      x2="140"
                      y2="150"
                      stroke="#d4af37"
                      strokeWidth="2"
                    />
                    <line
                      x1="60"
                      y1="240"
                      x2="140"
                      y2="150"
                      stroke="#d4af37"
                      strokeWidth="2"
                    />

                    {/* Right chain connections */}
                    <line
                      x1="300"
                      y1="150"
                      x2="380"
                      y2="80"
                      stroke="#f3d779"
                      strokeWidth="2"
                    />
                    <line
                      x1="300"
                      y1="150"
                      x2="380"
                      y2="160"
                      stroke="#f3d779"
                      strokeWidth="2"
                    />
                    <line
                      x1="300"
                      y1="150"
                      x2="380"
                      y2="240"
                      stroke="#f3d779"
                      strokeWidth="2"
                    />

                    {/* Nodes on connecting lines */}
                    <circle cx="140" cy="150" r="5" fill="#d4af37" />
                    <circle cx="160" cy="150" r="5" fill="#d4af37" />
                    <circle cx="180" cy="150" r="5" fill="#d4af37" />
                    <circle cx="200" cy="150" r="5" fill="#d4af37" />
                    <circle cx="240" cy="150" r="5" fill="#f3d779" />
                    <circle cx="260" cy="150" r="5" fill="#f3d779" />
                    <circle cx="280" cy="150" r="5" fill="#f3d779" />
                    <circle cx="300" cy="150" r="5" fill="#f3d779" />
                  </g>

                  {/* Gradient Definition */}
                  <defs>
                    <linearGradient
                      id="coinGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#1a2e2a" />
                      <stop offset="100%" stopColor="#0d1a17" />
                    </linearGradient>
                  </defs>

                  {/* Text at Bottom */}
                  <text
                    x="250"
                    y="350"
                    fill="#d4af37"
                    textAnchor="middle"
                    fontSize="24"
                    fontWeight="bold"
                  >
                    AMMYI BLOCKCHAIN ECOSYSTEM
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Global Marketplace */}
        <section className="relative z-10 bg-[#1a2e2a]/90 py-16 px-4 border-t border-[#d4af37]/20">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl text-center font-semibold text-[#d4af37] mb-8">
              Global Marketplace Portal
            </h2>
            <div className="relative z-20 bg-[#1a2e2a] p-6 rounded-lg border border-[#d4af37]/20">
              <p className="text-gray-300 mb-4">
                Creating your homepage is easy with AMMYI WEB. In just 2
                minutes, you can create your free website — no coding needed.
                Pick a design template and launch instantly. Includes guestbook,
                survey, counter, and more.
              </p>
              <p className="text-gray-300 mb-4">
                Your site is free and you can start right away.
              </p>
              <p className="text-gray-300">
                Easy to use, flexible, customizable — and packed with premium
                features.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="pt-20 pb-10 px-4 relative z-10">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                About
                <span className="bg-gradient-to-r from-[#d4af37] to-[#f3d779] bg-clip-text text-transparent ml-2">
                  AmiCoin
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-4">
                Building the future of decentralized finance with innovation,
                security, and community at our core.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="relative z-20 bg-[#1a2e2a] border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#f3d779]/40 transition-colors duration-300">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-[#d4af37] mr-4" />
                  <h2 className="text-3xl font-bold text-white">Our Mission</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To democratize access to financial services through innovative
                  blockchain technology, building an inclusive and transparent
                  financial ecosystem.
                </p>
              </div>

              <div className="relative z-20 bg-[#1a2e2a] border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#f3d779]/40 transition-colors duration-300">
                <div className="flex items-center mb-6">
                  <Eye className="h-8 w-8 text-[#f3d779] mr-4" />
                  <h2 className="text-3xl font-bold text-white">Our Vision</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To be the world's most trusted decentralized cryptocurrency,
                  empowering people to manage their financial future securely
                  and transparently.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 px-4 relative z-10">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center text-white mb-12">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Value: Transparency */}
              <div className="text-center group relative z-20">
                <div className="bg-gradient-to-r from-[#d4af37] to-[#f3d779] rounded-full p-4 w-20 h-20 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-[#f3d779] transition-colors duration-300">
                  Transparency
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  Complete openness in all operations, building trust and
                  accountability.
                </p>
              </div>

              {/* Value: Community */}
              <div className="text-center group relative z-20">
                <div className="bg-gradient-to-r from-[#d4af37] to-[#f3d779] rounded-full p-4 w-20 h-20 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-[#f3d779] transition-colors duration-300">
                  Community
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  Decisions made together, with a people-first approach.
                </p>
              </div>

              {/* Value: Innovation */}
              <div className="text-center group relative z-20">
                <div className="bg-gradient-to-r from-[#d4af37] to-[#f3d779] rounded-full p-4 w-20 h-20 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-[#f3d779] transition-colors duration-300">
                  Innovation
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  Always pushing the boundaries of blockchain and DeFi.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="pb-24 px-4 relative z-10">
          <div className="container mx-auto max-w-5xl">
            <div className="relative z-20 bg-[#1a2e2a] border border-[#d4af37]/20 rounded-2xl p-12 hover:border-[#f3d779]/40 transition-colors duration-300">
              <div className="text-center mb-12">
                <Globe className="h-16 w-16 text-[#d4af37] mx-auto mb-6" />
                <h2 className="text-4xl font-bold text-white mb-6">
                  Our Story
                </h2>
              </div>
              <div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  AmiCoin was created with a simple vision: to provide a truly
                  user-centric cryptocurrency. Backed by experts in blockchain,
                  finance, and tech, it aims to make DeFi accessible to
                  everyone.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  In early 2024, we launched AmiCoin to empower users — not just
                  investors — with an eco-conscious, fast, and secure blockchain
                  experience.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Today, AmiCoin stands for financial independence,
                  community-driven innovation, and a global movement toward
                  inclusive finance.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Add CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float infinite ease-in-out;
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default About;
