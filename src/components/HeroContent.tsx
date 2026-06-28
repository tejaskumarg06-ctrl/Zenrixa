import { motion } from "motion/react";
import { Star, ArrowRight, Sparkles } from "lucide-react";

interface HeroContentProps {
  onChatOpen: () => void;
  onWorksOpen: () => void;
}

export default function HeroContent({ onChatOpen, onWorksOpen }: HeroContentProps) {
  return (
    <div id="zenrixa-hero-content" className="flex flex-col justify-center items-center text-center text-white select-none max-w-4xl mx-auto px-6">
      
      {/* Category Tag with vertical line */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center gap-3 mb-8"
      >
        <span className="w-[1.5px] h-4 bg-white rounded-full" />
        <span className="text-xs md:text-sm font-medium tracking-widest text-white uppercase">
          Creative Agency
        </span>
      </motion.div>

      {/* Main Elegant Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-white leading-[1.05] mb-12 max-w-3xl"
      >
        The future is closure than you think
      </motion.h1>

      {/* Rating Row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex items-center justify-center gap-2 mb-14 text-white/80 text-sm"
      >
        <div className="flex items-center gap-0.5 text-white">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-white stroke-white" />
          ))}
        </div>
        <span className="font-sans text-xs text-white/90 ml-1">
          3000+ Customers
        </span>
      </motion.div>

      {/* Action Buttons with increased luxurious distance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-wrap items-center justify-center gap-10 md:gap-16 mt-6"
      >
        {/* Chat With Us Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={onChatOpen}
          className="group flex items-center justify-between gap-4 pl-8 pr-3 py-3 rounded-full bg-white text-zinc-950 font-semibold text-sm transition-all duration-300 shadow-lg shadow-white/5 hover:shadow-white/10 cursor-pointer"
        >
          <span>Chat With Us</span>
          <div className="w-10 h-10 rounded-full bg-zinc-950 text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
            <ArrowRight className="w-5 h-5" />
          </div>
        </motion.button>

        {/* Our Works Button */}
        <motion.button
          whileHover={{ bg: "rgba(255, 255, 255, 0.08)", scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={onWorksOpen}
          className="px-8 py-4 rounded-full border border-white/30 text-white hover:border-white bg-zinc-950/20 text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer"
        >
          Our Works
        </motion.button>
      </motion.div>

    </div>
  );
}
