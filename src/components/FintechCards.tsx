import { motion } from "motion/react";
import { Shield, UserCheck, TrendingUp, Layers, Globe, Cpu, Lock, Zap } from "lucide-react";

export default function FintechCards() {
  const leftCards = [
    {
      id: "secure-system",
      title: "Advanced secure system",
      description: "Advanced protection to keep transactions safe and reliable.",
      icon: <Shield className="w-5 h-5 text-black" />,
      delay: 0.1,
    },
    {
      id: "insights",
      title: "Intelligent insights",
      description: "Real-time analytics and dynamic modeling for smarter choices.",
      icon: <TrendingUp className="w-5 h-5 text-black" />,
      delay: 0.2,
    },
    {
      id: "global-safety",
      title: "Global latency safety",
      description: "Secure connection to any global financial system with low latency.",
      icon: <Globe className="w-5 h-5 text-black" />,
      delay: 0.3,
    },
    {
      id: "assets-vault",
      title: "Encrypted assets vault",
      description: "Enterprise HSM-backed encryption protecting your funds.",
      icon: <Lock className="w-5 h-5 text-black" />,
      delay: 0.4,
    },
  ];

  const rightCards = [
    {
      id: "user-access",
      title: "Seamless user access",
      description: "Seamless experience for managing finances anytime, anywhere.",
      icon: <UserCheck className="w-5 h-5 text-black" />,
      delay: 0.15,
    },
    {
      id: "modular",
      title: "Modular framework",
      description: "Fully customizable components built to scale with your system.",
      icon: <Layers className="w-5 h-5 text-black" />,
      delay: 0.25,
    },
    {
      id: "compliance",
      title: "Automated compliance",
      description: "Real-time regulatory tracking and fully automated system audits.",
      icon: <Cpu className="w-5 h-5 text-black" />,
      delay: 0.35,
    },
    {
      id: "risk-model",
      title: "Predictive risk model",
      description: "Deep quantitative projections helping you make proactive decisions.",
      icon: <Zap className="w-5 h-5 text-black" />,
      delay: 0.45,
    },
  ];

  return (
    <div id="fintech-cards-wrapper" className="w-full select-none font-sans mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full items-start">
        {/* Left Hand Side Column (4 cards) */}
        <div className="flex flex-col gap-8 md:gap-12 w-full">
          {leftCards.map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: card.delay, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, borderColor: "rgba(255, 255, 255, 0.6)" }}
              className="relative w-full rounded-[28px] border border-white/10 bg-zinc-950/40 backdrop-blur-xl p-8 shadow-[0_32px_64px_-20px_rgba(0,0,0,0.95)] transition-all duration-500 flex flex-col justify-between min-h-[190px]"
            >
              <div>
                {/* Circular Icon Container */}
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 shadow-md shadow-white/20">
                  {card.icon}
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-xl md:text-2xl font-normal text-white tracking-tight leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-sm text-white font-light leading-relaxed opacity-70">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Hand Side Column (4 cards) */}
        <div className="flex flex-col gap-8 md:gap-12 w-full md:mt-24">
          {rightCards.map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: card.delay, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, borderColor: "rgba(255, 255, 255, 0.6)" }}
              className="relative w-full rounded-[28px] border border-white/10 bg-zinc-950/40 backdrop-blur-xl p-8 shadow-[0_32px_64px_-20px_rgba(0,0,0,0.95)] transition-all duration-500 flex flex-col justify-between min-h-[190px]"
            >
              <div>
                {/* Circular Icon Container */}
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 shadow-md shadow-white/20">
                  {card.icon}
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-xl md:text-2xl font-normal text-white tracking-tight leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-sm text-white font-light leading-relaxed opacity-70">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

