import { motion } from "motion/react";
import { MapPin, Award } from "lucide-react";

export default function FooterBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 py-4 px-6 md:px-12 border-t border-zinc-900 bg-black text-xs font-mono text-zinc-500 uppercase tracking-widest select-none"
    >
      {/* Experience Indicator */}
      <div className="flex items-center gap-2">
        <Award className="w-3.5 h-3.5 text-zinc-400" />
        <span className="font-semibold text-zinc-300">10+ Years Exp</span>
      </div>

      {/* Location Indicator */}
      <div className="flex items-center gap-2">
        <MapPin className="w-3.5 h-3.5 text-white/70" />
        <span className="text-zinc-400">Based in Warsaw</span>
      </div>
    </motion.div>
  );
}
