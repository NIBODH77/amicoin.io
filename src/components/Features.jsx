import React from 'react';
import { Shield, Zap, Globe, Lock, Users, TrendingUp, Sparkles } from 'lucide-react';


const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Built with advanced blockchain security protocols to ensure your investments stay safe.',
      iconColor: 'text-[#d4af37]',
      hoverIconColor: 'text-[#f3d779]',
      glowColor: 'hover:shadow-[0_0_25px_rgba(212,175,55,0.3)]'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Experience instant transactions with our optimized network infrastructure.',
      iconColor: 'text-[#f3d779]',
      hoverIconColor: 'text-[#d4af37]',
      glowColor: 'hover:shadow-[0_0_25px_rgba(243,215,121,0.3)]'
    },
    {
      icon: Globe,
      title: 'Global Access',
      description: 'Trade from anywhere in the world with our decentralized platform.',
      iconColor: 'text-[#d4af37]',
      hoverIconColor: 'text-[#f3d779]',
      glowColor: 'hover:shadow-[0_0_25px_rgba(212,175,55,0.3)]'
    },
    {
      icon: Lock,
      title: 'Private & Anonymous',
      description: 'Your privacy is protected with advanced cryptographic techniques.',
      iconColor: 'text-[#f3d779]',
      hoverIconColor: 'text-[#d4af37]',
      glowColor: 'hover:shadow-[0_0_25px_rgba(243,215,121,0.3)]'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Governed by the community, for the community. Your voice matters.',
      iconColor: 'text-[#d4af37]',
      hoverIconColor: 'text-[#f3d779]',
      glowColor: 'hover:shadow-[0_0_25px_rgba(212,175,55,0.3)]'
    },
    {
      icon: TrendingUp,
      title: 'High Yield Potential',
      description: 'Maximize your returns with our innovative staking and farming opportunities.',
      iconColor: 'text-[#f3d779]',
      hoverIconColor: 'text-[#d4af37]',
      glowColor: 'hover:shadow-[0_0_25px_rgba(243,215,121,0.3)]'
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-[#d4af37]/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-20 w-40 h-40 rounded-full bg-[#f3d779]/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#1a2e2a] border border-[#d4af37]/30 rounded-full px-4 py-2 mb-8 mx-auto backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-[#d4af37] animate-pulse" />
            <span className="text-sm text-white">Premium Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-[#d4af37] to-[#f3d779] bg-clip-text text-transparent">
              AmiCoin
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the unique features that make AmiCoin the perfect choice for your crypto journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`
                group relative overflow-hidden
                bg-[#1a2e2a]/40 backdrop-blur-lg
                border border-[#d4af37]/20
                rounded-2xl p-8
                transition-all duration-500
                hover:bg-[#1a2e2a]/60
                hover:border-[#f3d779]/40
                transform hover:-translate-y-2
                ${feature.glowColor}
                before:absolute before:inset-0
                before:bg-[radial-gradient(circle_at_center,_#d4af37_0%,_transparent_70%)]
                before:opacity-0 before:transition-opacity before:duration-500
                group-hover:before:opacity-10
              `}
            >
              <div
                className={`${feature.iconColor} mb-6 transition-all duration-500 group-hover:${feature.hoverIconColor} group-hover:scale-110`}
              >
                <feature.icon className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 transition-colors duration-500 group-hover:text-[#f3d779]">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed transition-colors duration-500 group-hover:text-gray-200">
                {feature.description}
              </p>
              
              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#f3d779]/30 transition-all duration-700 rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;