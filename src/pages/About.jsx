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


// import React from "react";
// import { Target, Eye, Heart, Users, Globe, Zap } from "lucide-react";
// import BlockchainAnimation from "../components/BlockchainAnimation.jsx";

// const About = () => {
//   return (
//     <div className="relative min-h-screen overflow-hidden">
//       <BlockchainAnimation />
//       <div className="bg-black text-white">
//         {/* Hero Section */}
//         <section className="pt-24 pb-16 px-4 relative z-10">
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

//               {/* Large Animated SVG */}
//               <div className="flex justify-center items-center">
//                 <svg
//                   width="500"
//                   height="400"
//                   viewBox="0 0 500 400"
//                   className="border border-[#d4af37]/30 rounded-lg"
//                 >
//                   {/* Background */}
//                   <rect width="500" height="400" fill="#0d1a17" />
                  
//                   {/* Animated Blockchain Blocks */}
//                   <g transform="translate(50, 50)">
//                     {/* Left Chain */}
//                     <g className="animate-float" style={{ animationDuration: "6s" }}>
//                       <rect x="0" y="0" width="60" height="60" rx="5" fill="#1a2e2a" stroke="#d4af37" strokeWidth="2" />
//                       <text x="30" y="35" fill="#d4af37" textAnchor="middle" fontSize="20" fontWeight="bold">A</text>
//                     </g>
//                     <g className="animate-float" style={{ animationDuration: "5s", animationDelay: "0.5s" }}>
//                       <rect x="0" y="80" width="60" height="60" rx="5" fill="#1a2e2a" stroke="#d4af37" strokeWidth="2" />
//                       <text x="30" y="115" fill="#d4af37" textAnchor="middle" fontSize="20" fontWeight="bold">M</text>
//                     </g>
//                     <g className="animate-float" style={{ animationDuration: "7s", animationDelay: "1s" }}>
//                       <rect x="0" y="160" width="60" height="60" rx="5" fill="#1a2e2a" stroke="#d4af37" strokeWidth="2" />
//                       <text x="30" y="195" fill="#d4af37" textAnchor="middle" fontSize="20" fontWeight="bold">I</text>
//                     </g>
                    
//                     {/* Right Chain */}
//                     <g className="animate-float" style={{ animationDuration: "6s", animationDelay: "0.3s" }}>
//                       <rect x="380" y="0" width="60" height="60" rx="5" fill="#1a2e2a" stroke="#f3d779" strokeWidth="2" />
//                       <text x="410" y="35" fill="#f3d779" textAnchor="middle" fontSize="20" fontWeight="bold">C</text>
//                     </g>
//                     <g className="animate-float" style={{ animationDuration: "5s", animationDelay: "0.8s" }}>
//                       <rect x="380" y="80" width="60" height="60" rx="5" fill="#1a2e2a" stroke="#f3d779" strokeWidth="2" />
//                       <text x="410" y="115" fill="#f3d779" textAnchor="middle" fontSize="20" fontWeight="bold">O</text>
//                     </g>
//                     <g className="animate-float" style={{ animationDuration: "7s", animationDelay: "1.3s" }}>
//                       <rect x="380" y="160" width="60" height="60" rx="5" fill="#1a2e2a" stroke="#f3d779" strokeWidth="2" />
//                       <text x="410" y="195" fill="#f3d779" textAnchor="middle" fontSize="20" fontWeight="bold">I</text>
//                     </g>
                    
//                     {/* Center Coin */}
//                     <g className="animate-pulse">
//                       <circle cx="250" cy="150" r="80" fill="url(#coinGradient)" stroke="#d4af37" strokeWidth="3" />
//                       <text x="250" y="150" fill="white" textAnchor="middle" fontSize="40" fontWeight="bold" dy="10">₳</text>
//                     </g>
                    
//                     {/* Connecting Lines */}
//                     <line x1="60" y1="30" x2="190" y2="150" stroke="#d4af37" strokeWidth="2" strokeDasharray="5,5" />
//                     <line x1="60" y1="110" x2="190" y2="150" stroke="#d4af37" strokeWidth="2" strokeDasharray="5,5" />
//                     <line x1="60" y1="190" x2="190" y2="150" stroke="#d4af37" strokeWidth="2" strokeDasharray="5,5" />
//                     <line x1="310" y1="150" x2="440" y2="30" stroke="#f3d779" strokeWidth="2" strokeDasharray="5,5" />
//                     <line x1="310" y1="150" x2="440" y2="110" stroke="#f3d779" strokeWidth="2" strokeDasharray="5,5" />
//                     <line x1="310" y1="150" x2="440" y2="190" stroke="#f3d779" strokeWidth="2" strokeDasharray="5,5" />
                    
//                     {/* Animated Nodes */}
//                     {[120, 180, 220, 280, 320].map((y, i) => (
//                       <circle key={i} cx={250} cy={y} r="5" fill="#d4af37" className="animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
//                     ))}
//                   </g>
                  
//                   {/* Gradient Definition */}
//                   <defs>
//                     <linearGradient id="coinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                       <stop offset="0%" stopColor="#1a2e2a" />
//                       <stop offset="100%" stopColor="#0d1a17" />
//                     </linearGradient>
//                   </defs>
                  
//                   {/* Text at Bottom */}
//                   <text x="250" y="350" fill="#d4af37" textAnchor="middle" fontSize="24" fontWeight="bold">AMMYI BLOCKCHAIN ECOSYSTEM</text>
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </section>

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

//       {/* Add CSS for animations */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-10px);
//           }
//         }
//         .animate-float {
//           animation: float infinite ease-in-out;
//         }
//         @keyframes pulse {
//           0%, 100% {
//             opacity: 1;
//           }
//           50% {
//             opacity: 0.5;
//           }
//         }
//         .animate-pulse {
//           animation: pulse 2s infinite;
//         }
//       `}</style>
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
                    href="src/assests/AMI.pdf"
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

              {/* Enhanced Colorful Glassy SVG */}
              <div className="flex justify-center items-center">
                <svg
                  width="500"
                  height="400"
                  viewBox="0 0 500 400"
                  className="rounded-lg backdrop-blur-sm"
                  style={{ background: 'rgba(13, 26, 23, 0.7)' }}
                >
                  {/* Glassy Background */}
                  <defs>
                    <filter id="glassEffect" x="0" y="0" width="100%" height="100%">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
                      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.15 0" result="glass" />
                      <feComposite in="SourceGraphic" in2="glass" operator="over" />
                    </filter>
                    
                    {/* Glow Effects */}
                    <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
                      <feGaussianBlur stdDeviation="5" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                    
                    {/* Gradient Definitions */}
                    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#d4af37" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#f3d779" stopOpacity="0.9" />
                    </linearGradient>
                    
                    <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3a7bd5" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#00d2ff" stopOpacity="0.9" />
                    </linearGradient>
                    
                    <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8E2DE2" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#4A00E0" stopOpacity="0.9" />
                    </linearGradient>
                    
                    <radialGradient id="coinShine" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
                      <stop offset="0%" stopColor="white" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  
                  {/* Background Blur */}
                  <rect width="500" height="400" fill="url(#blueGradient)" opacity="0.1" filter="url(#glassEffect)" rx="10" />
                  
                  {/* Animated Blockchain Network */}
                  <g transform="translate(50, 50)">
                    {/* Left Chain - Gold Blocks */}
                    <g className="animate-float" style={{ animationDuration: "6s" }}>
                      <rect x="0" y="0" width="60" height="60" rx="8" fill="url(#goldGradient)" filter="url(#glow)" stroke="rgba(212, 175, 55, 0.5)" strokeWidth="1.5" />
                      <text x="30" y="35" fill="white" textAnchor="middle" fontSize="20" fontWeight="bold" filter="url(#glow)">A</text>
                      <rect x="5" y="5" width="50" height="50" rx="5" fill="url(#coinShine)" opacity="0.3" />
                    </g>
                    
                    <g className="animate-float" style={{ animationDuration: "5s", animationDelay: "0.5s" }}>
                      <rect x="0" y="80" width="60" height="60" rx="8" fill="url(#goldGradient)" filter="url(#glow)" stroke="rgba(212, 175, 55, 0.5)" strokeWidth="1.5" />
                      <text x="30" y="115" fill="white" textAnchor="middle" fontSize="20" fontWeight="bold" filter="url(#glow)">M</text>
                      <rect x="5" y="85" width="50" height="50" rx="5" fill="url(#coinShine)" opacity="0.3" />
                    </g>
                    
                    <g className="animate-float" style={{ animationDuration: "7s", animationDelay: "1s" }}>
                      <rect x="0" y="160" width="60" height="60" rx="8" fill="url(#goldGradient)" filter="url(#glow)" stroke="rgba(212, 175, 55, 0.5)" strokeWidth="1.5" />
                      <text x="30" y="195" fill="white" textAnchor="middle" fontSize="20" fontWeight="bold" filter="url(#glow)">I</text>
                      <rect x="5" y="165" width="50" height="50" rx="5" fill="url(#coinShine)" opacity="0.3" />
                    </g>
                    
                    {/* Right Chain - Purple Blocks */}
                    <g className="animate-float" style={{ animationDuration: "6s", animationDelay: "0.3s" }}>
                      <rect x="380" y="0" width="60" height="60" rx="8" fill="url(#purpleGradient)" filter="url(#glow)" stroke="rgba(142, 45, 226, 0.5)" strokeWidth="1.5" />
                      <text x="410" y="35" fill="white" textAnchor="middle" fontSize="20" fontWeight="bold" filter="url(#glow)">C</text>
                      <rect x="385" y="5" width="50" height="50" rx="5" fill="url(#coinShine)" opacity="0.3" />
                    </g>
                    
                    <g className="animate-float" style={{ animationDuration: "5s", animationDelay: "0.8s" }}>
                      <rect x="380" y="80" width="60" height="60" rx="8" fill="url(#purpleGradient)" filter="url(#glow)" stroke="rgba(142, 45, 226, 0.5)" strokeWidth="1.5" />
                      <text x="410" y="115" fill="white" textAnchor="middle" fontSize="20" fontWeight="bold" filter="url(#glow)">O</text>
                      <rect x="385" y="85" width="50" height="50" rx="5" fill="url(#coinShine)" opacity="0.3" />
                    </g>
                    
                    <g className="animate-float" style={{ animationDuration: "7s", animationDelay: "1.3s" }}>
                      <rect x="380" y="160" width="60" height="60" rx="8" fill="url(#purpleGradient)" filter="url(#glow)" stroke="rgba(142, 45, 226, 0.5)" strokeWidth="1.5" />
                      <text x="410" y="195" fill="white" textAnchor="middle" fontSize="20" fontWeight="bold" filter="url(#glow)">I</text>
                      <rect x="385" y="165" width="50" height="50" rx="5" fill="url(#coinShine)" opacity="0.3" />
                    </g>
                    
                    {/* Center Coin - Glassy Effect */}
                    <g className="animate-pulse">
                      <circle cx="250" cy="150" r="80" fill="url(#goldGradient)" filter="url(#glassEffect)" stroke="rgba(212, 175, 55, 0.7)" strokeWidth="3" />
                      <circle cx="250" cy="150" r="70" fill="transparent" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeDasharray="5,5" />
                      <text x="250" y="150" fill="white" textAnchor="middle" fontSize="60" fontWeight="bold" dy="10" filter="url(#glow)">₳</text>
                      <circle cx="250" cy="150" r="80" fill="url(#coinShine)" opacity="0.2" />
                    </g>
                    
                    {/* Colorful Connecting Lines */}
                    <path d="M60,30 Q125,90 190,150" stroke="url(#goldGradient)" strokeWidth="2" fill="none" strokeDasharray="5,3" opacity="0.8" />
                    <path d="M60,110 Q125,120 190,150" stroke="url(#goldGradient)" strokeWidth="2" fill="none" strokeDasharray="5,3" opacity="0.8" />
                    <path d="M60,190 Q125,180 190,150" stroke="url(#goldGradient)" strokeWidth="2" fill="none" strokeDasharray="5,3" opacity="0.8" />
                    
                    <path d="M310,150 Q375,90 440,30" stroke="url(#purpleGradient)" strokeWidth="2" fill="none" strokeDasharray="5,3" opacity="0.8" />
                    <path d="M310,150 Q375,120 440,110" stroke="url(#purpleGradient)" strokeWidth="2" fill="none" strokeDasharray="5,3" opacity="0.8" />
                    <path d="M310,150 Q375,180 440,190" stroke="url(#purpleGradient)" strokeWidth="2" fill="none" strokeDasharray="5,3" opacity="0.8" />
                    
                    {/* Animated Nodes */}
                    {[120, 180, 220, 280, 320].map((y, i) => (
                      <circle key={i} cx={250} cy={y} r="7" fill={`hsl(${i * 72}, 80%, 60%)`} filter="url(#glow)" className="animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                    ))}
                    
                    {/* Floating Particles */}
                    {[...Array(20)].map((_, i) => {
                      const x = Math.random() * 400 + 50;
                      const y = Math.random() * 300 + 50;
                      const size = Math.random() * 3 + 1;
                      const delay = Math.random() * 5;
                      const duration = 5 + Math.random() * 10;
                      return (
                        <circle
                          key={`particle-${i}`}
                          cx={x}
                          cy={y}
                          r={size}
                          fill="white"
                          opacity="0.7"
                          className="animate-float"
                          style={{
                            animationDuration: `${duration}s`,
                            animationDelay: `${delay}s`
                          }}
                        />
                      );
                    })}
                  </g>
                  
                  {/* Text at Bottom with Glow */}
                  <text x="250" y="350" fill="white" textAnchor="middle" fontSize="24" fontWeight="bold" filter="url(#glow)">
                    <tspan fill="url(#goldGradient)">AMMYI</tspan>
                    <tspan dx="5" fill="white">BLOCKCHAIN</tspan>
                    <tspan dx="5" fill="url(#purpleGradient)">ECOSYSTEM</tspan>
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Rest of the sections remain the same */}
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

      {/* Enhanced CSS for animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-float {
          animation: float infinite ease-in-out;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.05);
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