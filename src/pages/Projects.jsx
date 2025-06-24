import React from 'react';
import { Cpu, Leaf, ShoppingCart, Banknote, Cctv, Users } from 'lucide-react';
import BlockchainAnimation from '../components/BlockchainAnimation.jsx';

const LogoImage = ({ src, alt, height, className }) => {
  const [imgSrc, setImgSrc] = React.useState(src);
  const [attempts, setAttempts] = React.useState(0);

  const fallbackLogos = [
    src,
    src.replace('.png', '.svg'),
    `https://cryptologos.cc/logos/${alt.toLowerCase().replace(/\s+/g, '-')}-logo.png`,
    `https://logo.clearbit.com/${alt.split(' ')[0].toLowerCase()}.com`,
    'https://via.placeholder.com/150/1a2e2a/efc673?text=' + alt.charAt(0)
  ];

  const handleError = () => {
    if (attempts < fallbackLogos.length - 1) {
      setAttempts(attempts + 1);
      setImgSrc(fallbackLogos[attempts + 1]);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      style={{ height }}
      className={className}
      onError={handleError}
      loading="lazy"
    />
  );
};

const Projects = () => {
  const advantages = [
    {
      title: "Blockchain Technology",
      description: "Secure decentralized transactions using advanced blockchain",
      logos: ["https://cryptologos.cc/logos/ethereum-eth-logo.png"],
      height: "60px"
    },
    {
      title: "Advanced DeFi Staking",
      description: "Earn up to 24% APY with our smart contract pools",
      logos: ["https://cryptologos.cc/logos/lido-dao-ldo-logo.png"],
      height: "60px"
    },
    {
      title: "Multicurrency Buy Option",
      description: "Purchase with 50+ supported currencies",
      logos: ["https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png"],
      height: "60px"
    },
    {
      title: "Marketplace of Future",
      description: "NFT and digital asset trading platform",
      logos: ["https://opensea.io/static/images/logos/opensea-logo.png"],
      height: "60px"
    },
    {
      title: "Audited From BlockAudit",
      description: "Security verified by top blockchain auditors",
      logos: ["https://assets.website-files.com/5f973c970bea5548ad4287ef/5f973c970bea5588b8428a0f_certik-logo.svg"],
      height: "60px",
      action: {
        text: "Download Audit",
        link: "https://www.amicoin.io/Doc/AMMYI_Audit.pdf"
      }
    },
    {
      title: "Use AMMYI Worldwide",
      description: "Global payment acceptance network",
      logos: ["https://cryptologos.cc/logos/ripple-xrp-logo.png"],
      height: "60px"
    }
  ];

  const ecosystemProjects = [
    {
      icon: Cpu,
      title: "AmmyChain",
      description: "High-performance L1 blockchain with zero gas fees",
      status: "Comming Soon",
      logos: ["https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png"]
    },
    {
      icon: Leaf,
      title: "EcoStake",
      description: "Carbon-negative staking with tree-planting rewards",
      status: "Beta",
      logos: ["https://cryptologos.cc/logos/polkadot-new-dot-logo.png"]
    },
    {
      icon: ShoppingCart,
      title: "AmmyPay",
      description: "Merchant gateway with instant conversion",
      status: "Comming Soon",
      logos: ["https://assets.coingecko.com/coins/images/4128/large/solana.png"]
    },
    {
      icon: Banknote,
      title: "AmmyFi",
      description: "Decentralized lending/borrowing protocol",
      status: "Comming Soon",
      logos: ["https://assets.coingecko.com/coins/images/12645/large/AAVE.png"]
    },
    {
      icon: Users,
      title: "AmmyDAO",
      description: "Community governance platform",
      status: "Comming Soon",
      logos: ["https://assets.coingecko.com/coins/images/12504/large/uniswap-uni.png"]
    },
    {
      icon: Cctv,
      title: "AmmyGuard",
      description: "Blockchain security auditing service",
      status: "Comming Soon",
      logos: ["https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png"]
    }
  ];

  return (
    <div className="relative min-h-screen bg-black overflow-hidden ">
      <BlockchainAnimation />
      <div className="relative  overflow-hidden  ">
        
      </div>
      
      <div className="relative z-10">
        {/* Advantages Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">   
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl mt-20 font-bold text-[#d4af37]">
                Advantages of the Project
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((advantage, index) => (
                <div 
                  key={`adv-${index}`}
                  className="bg-[#1a2e2a]/80 p-6 rounded-xl border border-[#d4af37]/20 hover:border-[#f3d779]/40 transition-all"
                >
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="mb-4 h-20 flex items-center">
                      <LogoImage 
                        src={advantage.logos[0]} 
                        alt={advantage.title}
                        height={advantage.height}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 flex-grow">
                      {advantage.description}
                    </p>
                    {advantage.action && (
                      <a
                        href={advantage.action.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm bg-[#d4af37] hover:bg-[#f3d779] text-black py-2 px-4 rounded-full transition-all"
                      >
                        {advantage.action.text}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ecosystem Section */}
        <section className="py-16 px-4 bg-[#0a0a0a]/80">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                AmmyCoin <span className="text-[#d4af37]">Ecosystem</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our comprehensive suite of blockchain solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ecosystemProjects.map((project, index) => (
                <ProjectCard key={`eco-${index}`} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="   z-10 py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-gradient-to-r from-[#d4af37]/60 to-[#f3d779]/30 p-8 md:p-10 rounded-2xl border border-[#d4af37]/20 text-center">
              <h3 className=" text-2xl md:text-3xl font-bold text-[#d4af37] mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-300 mb-6 max-w-xl mx-auto">
                Join thousands of users in the AmmyCoin ecosystem today
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-[#d4af37] hover:bg-[#f3d779] text-black font-medium py-2 px-6 rounded-full transition-all">
                  Buy AMMYI Tokens
                </button>
                <button className="bg-transparent hover:bg-[#d4af37]/10 border border-[#d4af37] text-[#f3d779] font-medium py-2 px-6 rounded-full transition-all">
                  Developer Docs
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-[#1a2e2a]/80 p-6 rounded-xl border border-[#d4af37]/20 hover:border-[#f3d779]/40 transition-all h-full flex flex-col">
      <div className="flex items-start mb-4">
        <div className="flex-shrink-0 bg-[#d4af37] p-2 rounded-lg mr-3">
          <project.icon className="h-5 w-5 text-black" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <span className="text-xs bg-[#d4af37] text-black px-2 py-1 rounded-full">
            {project.status}
          </span>
        </div>
      </div>
      
      <div className="my-4 flex justify-center">
        {project.logos && (
          <LogoImage 
            src={project.logos[0]} 
            alt={project.title}
            height="60px"
            className="h-16 w-16 object-contain"
          />
        )}
      </div>
      
      <p className="text-gray-300 text-sm mb-4 flex-grow">
        {project.description}
      </p>
    </div>
  );
};

export default Projects;