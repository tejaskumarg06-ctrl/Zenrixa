import { ReactNode } from "react";
import { motion } from "motion/react";

interface PartnerBrand {
  name: string;
  logoIcon: ReactNode;
}

export default function Partners() {
  const brands: PartnerBrand[] = [
    {
      name: "zantic",
      logoIcon: (
        <span className="w-2.5 h-2.5 bg-white rounded-sm rotate-45 mr-1.5 shrink-0" />
      ),
    },
    {
      name: "BookStore",
      logoIcon: (
        <span className="w-3 h-2 bg-transparent border-t-2 border-b-2 border-white mr-1.5 shrink-0" />
      ),
    },
    {
      name: "Wager",
      logoIcon: (
        <span className="w-2 h-3 bg-white mr-1.5 rounded-[1px] shrink-0" />
      ),
    },
    {
      name: "Crono",
      logoIcon: (
        <span className="w-2.5 h-2.5 bg-transparent border-2 border-white rounded-full mr-1.5 shrink-0" />
      ),
    },
    {
      name: "Mercury",
      logoIcon: (
        <span className="w-3 h-1.5 bg-white/70 rounded-full mr-1.5 shrink-0" />
      ),
    },
  ];

  return (
    <div id="partners-section" className="flex flex-col items-center justify-center gap-6 select-none w-full">
      <div className="flex items-center gap-3">
        <span className="h-[1px] w-8 bg-zinc-800" />
        <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
          Our Partners
        </span>
        <span className="h-[1px] w-8 bg-zinc-800" />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
        {brands.map((brand, index) => (
          <motion.div
            key={brand.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.08 }}
            whileHover={{ y: -2, opacity: 1 }}
            className="flex items-center text-zinc-400 hover:text-white font-sans text-sm font-semibold tracking-tight transition-all duration-300 cursor-pointer"
          >
            {brand.logoIcon}
            <span>{brand.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
