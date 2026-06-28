import { motion } from "motion/react";

interface ChipItem {
  id: number;
  label: string;
}

export default function ProcessChips() {
  const chips: ChipItem[] = [
    { id: 1, label: "Market research" },
    { id: 2, label: "Product design" },
    { id: 3, label: "Beta launch" },
    { id: 4, label: "User needs analysis" },
    { id: 5, label: "System development" },
    { id: 6, label: "User feedback" },
    { id: 7, label: "System deployment" },
    { id: 8, label: "Performance optimization" },
  ];

  // Defining staggered container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 18,
      },
    },
  };

  return (
    <div id="process-chips-section" className="w-full py-16 md:py-28 select-none flex flex-col justify-center items-center">
      <div className="flex flex-col items-center gap-4 mb-16 text-center max-w-2xl px-6">
        <span className="text-[11px] font-sans tracking-[0.25em] text-white/40 uppercase">
          Workflow Architecture
        </span>
        <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">
          Our End-to-End Delivery System
        </h2>
        <p className="text-sm text-white/50 font-light max-w-md leading-relaxed mt-2">
          An organized, automated process designed to ensure absolute precision, zero fluff, and unmatched development velocity.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col gap-4 max-w-4xl mx-auto items-center justify-center"
      >
        {/* Row 1 */}
        <div className="flex flex-wrap gap-3 justify-center w-full">
          {chips.slice(0, 3).map((chip) => (
            <motion.div
              key={chip.id}
              variants={itemVariants}
              whileHover={{ scale: 1.03, borderColor: "rgba(255, 255, 255, 0.4)" }}
              className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-zinc-950/40 backdrop-blur-md shadow-lg transition-all duration-300"
            >
              <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              <span className="text-xs font-sans text-white/90 font-light tracking-wide">
                {chip.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap gap-3 justify-center w-full md:pl-8">
          {chips.slice(3, 6).map((chip) => (
            <motion.div
              key={chip.id}
              variants={itemVariants}
              whileHover={{ scale: 1.03, borderColor: "rgba(255, 255, 255, 0.4)" }}
              className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-zinc-950/40 backdrop-blur-md shadow-lg transition-all duration-300"
            >
              <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              <span className="text-xs font-sans text-white/90 font-light tracking-wide">
                {chip.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Row 3 */}
        <div className="flex flex-wrap gap-3 justify-center w-full md:pl-16">
          {chips.slice(6, 8).map((chip) => (
            <motion.div
              key={chip.id}
              variants={itemVariants}
              whileHover={{ scale: 1.03, borderColor: "rgba(255, 255, 255, 0.4)" }}
              className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-zinc-950/40 backdrop-blur-md shadow-lg transition-all duration-300"
            >
              <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              <span className="text-xs font-sans text-white/90 font-light tracking-wide">
                {chip.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
