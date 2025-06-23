import React from 'react';
import { ArrowRight, Sparkles, TrendingUp } from 'lucide-react';

const Hero = () => {
  const stats = [
    {
      value: "$2.5M+",
      label: "Market Cap",
      color: "text-[#FFD700]"
    },
    {
      value: "10K+",
      label: "Holders",
      color: "text-[#FFEE58]"
    },
    {
      value: "24/7",
      label: "Trading",
      color: "text-[#FFD700]"
    }
  ];

  return (
    <section className="pt-32 pb-20 px-4 min-h-screen">
      <div className="container mx-auto text-center">
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-[#FFD700] rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-[#FFEE58] rounded-full animate-ping"></div>
          <div className="absolute top-60 left-1/3 w-1.5 h-1.5 bg-[#FFA500] rounded-full animate-pulse"></div>
        </div>

        <div className="relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-[#1a2e2a] border border-[#FFD700]/30 rounded-full px-4 py-2 mb-8 mx-auto">
            <Sparkles className="h-4 w-4 text-[#FFD700]" />
            <span className="text-sm text-white">New DeFi Protocol Launched</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            The Future of
            <span className="block bg-gradient-to-r from-[#FFD700] to-[#FFEE58] bg-clip-text text-transparent">
              Decentralized Finance
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join the revolution with AmiCoin - a next-generation cryptocurrency designed for 
            the modern world. Secure, fast, and built for everyone.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group bg-gradient-to-r from-[#FFD700] to-[#FFEE58] text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-[#FFEE58] hover:to-[#FFD700] transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
              <span>Buy AmiCoin Now</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="border-2 border-[#FFD700]/50 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#1a2e2a]/50 hover:border-[#FFEE58] transition-all duration-300 flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-[#FFD700]" />
              <span>View Chart</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-[#1a2e2a]/70 backdrop-blur-sm border border-[#FFD700]/30 rounded-2xl p-6 hover:bg-[#1a2e2a]/90 hover:border-[#FFEE58] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#FFD700]/10"
              >
                <h3 className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Market Listings Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-[#e5e7eb]">Listed On</h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
              {/* CoinMarketCap */}
              <div className="w-[160px]">
                <div className="bg-[#1a2e2a]/60 backdrop-blur-md border border-[#FFD700]/30 rounded-xl p-4 transition-all duration-300 hover:bg-[#1a2e2a]/80 hover:border-[#FFEE58] hover:shadow-lg hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] transform hover:-translate-y-2 hover:scale-105 h-full">
                  <div className="flex flex-col items-center h-full">
                    <div className="mb-4 flex items-center justify-center h-12">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="20" fill="#3861FB"/>
                        <path d="M27.39 21.951c-.353.22-.77.248-1.087.072-.403-.224-.624-.748-.624-1.478v-2.182c0-1.053-.423-1.803-1.13-2.005-1.198-.344-2.1 1.1-2.438 1.642l-2.113 3.376V17.25c-.024-.949-.337-1.517-.93-1.688-.394-.113-.982-.068-1.553.794l-4.735 7.49A8.132 8.132 0 0 1 11.818 20c0-4.512 3.67-8.182 8.18-8.182s8.18 3.67 8.18 8.182l.002.022v.022c.042.874-.245 1.57-.79 1.908zm2.606-1.95v-.046C29.97 14.461 25.495 10 19.997 10 14.484 10 10 14.486 10 20s4.485 10 9.998 10c2.53 0 4.944-.947 6.797-2.667A.908.908 0 1 0 25.56 26a8.152 8.152 0 0 1-5.561 2.182 8.16 8.16 0 0 1-6.087-2.723l4.27-6.755v3.114c0 1.496.588 1.98 1.082 2.12.494.142 1.249.045 2.042-1.223l2.348-3.75c.075-.122.145-.226.208-.316v1.896c0 1.398.568 2.516 1.56 3.067.892.497 2.015.452 2.93-.117 1.11-.69 1.707-1.962 1.645-3.495z" fill="#fff"/>
                      </svg>
                    </div>
                    <h3 className="text-gray-300 text-sm font-medium mb-4">Coinmarketcap</h3>
                    <a 
                      href="https://coinmarketcap.com/currencies/ammyi-coin/" 
                      className="mt-auto bg-gradient-to-r from-[#FFD700] to-[#FFEE58] text-black px-4 py-2 rounded-full text-xs font-medium hover:from-[#FFEE58] hover:to-[#FFD700] transition-all duration-300 inline-block"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Click here
                    </a>
                  </div>
                </div>
              </div>

              {/* CoinGecko */}
              <div className="w-[160px]">
                <div className="bg-[#1a2e2a]/60 backdrop-blur-md border border-[#FFD700]/30 rounded-xl p-4 transition-all duration-300 hover:bg-[#1a2e2a]/80 hover:border-[#FFEE58] hover:shadow-lg hover:shadow-[0_0_20px_rgba(255,238,88,0.3)] transform hover:-translate-y-2 hover:scale-105 h-full">
                  <div className="flex flex-col items-center h-full">
                    <div className="mb-4 flex items-center justify-center h-12">
                      <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  
    <circle cx="100" cy="100" r="60" fill="#8CC63F" />
    
    <path d="M100,40 Q140,60 100,80 Q60,60 100,40 Z" fill="#6AA030" />
   
    <circle cx="140" cy="90" r="15" fill="#8CC63F" />

    <circle cx="145" cy="85" r="3" fill="black" />

    <rect x="60" y="120" width="10" height="20" rx="5" fill="#8CC63F" />
    <rect x="130" y="120" width="10" height="20" rx="5" fill="#8CC63F" />
   
    <path d="M40,100 Q30,90 40,80" stroke="#6AA030" stroke-width="5" fill="none" />
</svg>
                    </div>
                    <h3 className="text-gray-300 text-sm font-medium mb-4">Coingecko</h3>
                    <a 
                      href="https://www.coingecko.com/en/coins/ammyi-coin/inr" 
                      className="mt-auto bg-gradient-to-r from-[#FFD700] to-[#FFEE58] text-black px-4 py-2 rounded-full text-xs font-medium hover:from-[#FFEE58] hover:to-[#FFD700] transition-all duration-300 inline-block"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Click here
                    </a>
                  </div>
                </div>
              </div>

              {/* Vindax */}
              <div className="w-[160px]">
                <div className="bg-[#1a2e2a]/60 backdrop-blur-md border border-[#FFD700]/30 rounded-xl p-4 transition-all duration-300 hover:bg-[#1a2e2a]/80 hover:border-[#FFEE58] hover:shadow-lg hover:shadow-[0_0_20px_rgba(255,238,88,0.3)] transform hover:-translate-y-2 hover:scale-105 h-full">
                  <div className="flex flex-col items-center h-full">
                    <div className="mb-4 flex items-center justify-center h-12">
                      
                    </div>
                    <h3 className="text-gray-300 text-sm font-medium mb-4">Vindax</h3>
                    <a 
                      href="https://vindax.com/exchange-base.html?symbol=AMI_ETH" 
                      className="mt-auto bg-gradient-to-r from-[#FFD700] to-[#FFEE58] text-black px-4 py-2 rounded-full text-xs font-medium hover:from-[#FFEE58] hover:to-[#FFD700] transition-all duration-300 inline-block"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>

              {/* Koinbazar */}
              <div className="w-[160px]">
                <div className="bg-[#1a2e2a]/60 backdrop-blur-md border border-[#FFD700]/30 rounded-xl p-4 transition-all duration-300 hover:bg-[#1a2e2a]/80 hover:border-[#FFEE58] hover:shadow-lg hover:shadow-[0_0_20px_rgba(255,99,71,0.3)] transform hover:-translate-y-2 hover:scale-105 h-full">
                  <div className="flex flex-col items-center h-full">
                    <div className="mb-4 flex items-center justify-center h-12">
                     
                    </div>
                    <h3 className="text-gray-300 text-sm font-medium mb-4">Koinbazar</h3>
                    <a 
                      href="https://www.koinbazar.com/trade/AMI-INR" 
                      className="mt-auto bg-gradient-to-r from-[#FFD700] to-[#FFEE58] text-black px-4 py-2 rounded-full text-xs font-medium hover:from-[#FFEE58] hover:to-[#FFD700] transition-all duration-300 inline-block"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>

              {/* BscScan */}
              <div className="w-[160px]">
                <div className="bg-[#1a2e2a]/60 backdrop-blur-md border border-[#FFD700]/30 rounded-xl p-4 transition-all duration-300 hover:bg-[#1a2e2a]/80 hover:border-[#FFEE58] hover:shadow-lg hover:shadow-[0_0_20px_rgba(0,209,255,0.3)] transform hover:-translate-y-2 hover:scale-105 h-full">
                  <div className="flex flex-col items-center h-full">
                    <div className="mb-4 flex items-center justify-center h-12">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="20" fill="#F0B90B"/>
                        <path d="M12.5 20L20 12.5L27.5 20L20 27.5L12.5 20Z" fill="#fff"/>
                        <path d="M15 20L20 15L25 20L20 25L15 20Z" fill="#F0B90B"/>
                      </svg>
                    </div>
                    <h3 className="text-gray-300 text-sm font-medium mb-4">BscScan</h3>
                    <a 
                      href="https://bscscan.com/token/0x1ef72a1df5e4d165f84fc43b20d56caa7dad46e1" 
                      className="mt-auto bg-gradient-to-r from-[#FFD700] to-[#FFEE58] text-black px-4 py-2 rounded-full text-xs font-medium hover:from-[#FFEE58] hover:to-[#FFD700] transition-all duration-300 inline-block"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Click here
                    </a>
                  </div>
                </div>
              </div>

              {/* Blockspot */}
              <div className="w-[160px]">
                <div className="bg-[#1a2e2a]/60 backdrop-blur-md border border-[#FFD700]/30 rounded-xl p-4 transition-all duration-300 hover:bg-[#1a2e2a]/80 hover:border-[#FFEE58] hover:shadow-lg hover:shadow-[0_0_20px_rgba(156,39,176,0.3)] transform hover:-translate-y-2 hover:scale-105 h-full">
                  <div className="flex flex-col items-center h-full">
                    <div className="mb-4 flex items-center justify-center h-12">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="20" fill="#9C27B0"/>
                        <path d="M20 10C14.477 10 10 14.477 10 20C10 25.523 14.477 30 20 30C25.523 30 30 25.523 30 20C30 14.477 25.523 10 20 10ZM20 25C17.239 25 15 22.761 15 20C15 17.239 17.239 15 20 15C22.761 15 25 17.239 25 20C25 22.761 22.761 25 20 25Z" fill="#fff"/>
                        <path d="M20 17.5C18.621 17.5 17.5 18.621 17.5 20C17.5 21.379 18.621 22.5 20 22.5C21.379 22.5 22.5 21.379 22.5 20C22.5 18.621 21.379 17.5 20 17.5Z" fill="#9C27B0"/>
                      </svg>
                    </div>
                    <h3 className="text-gray-300 text-sm font-medium mb-4">Blockspot</h3>
                    <a 
                      href="https://blockspot.io/coin/ammyi-coin/" 
                      className="mt-auto bg-gradient-to-r from-[#FFD700] to-[#FFEE58] text-black px-4 py-2 rounded-full text-xs font-medium hover:from-[#FFEE58] hover:to-[#FFD700] transition-all duration-300 inline-block"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Click here
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;