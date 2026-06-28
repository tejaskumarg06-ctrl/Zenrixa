import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Clock, Menu, X, ChevronDown, Check } from "lucide-react";

interface HeaderProps {
  onMenuToggle: () => void;
  isMenuOpen: boolean;
}

export default function Header({ onMenuToggle, isMenuOpen }: HeaderProps) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timeMode, setTimeMode] = useState<"warsaw" | "local">("warsaw");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const getFormattedTime = () => {
    try {
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };

      if (timeMode === "warsaw") {
        options.timeZone = "Europe/Warsaw";
      }

      const timeStr = currentTime.toLocaleTimeString("en-US", options);
      
      const dateOptions: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "short",
        year: "numeric",
      };
      if (timeMode === "warsaw") {
        dateOptions.timeZone = "Europe/Warsaw";
      }
      const dateStr = currentTime.toLocaleDateString("en-US", dateOptions);

      return { timeStr, dateStr };
    } catch (e) {
      // Fallback
      return {
        timeStr: currentTime.toLocaleTimeString(),
        dateStr: currentTime.toLocaleDateString(),
      };
    }
  };

  const { timeStr, dateStr } = getFormattedTime();

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Product", href: "#", hasDropdown: true },
    { name: "About", href: "#" },
    { name: "Brands", href: "#" },
    { name: "Carrers", href: "#" }, // Matching image spelling "Carrers"
    { name: "Partners", href: "#" },
  ];

  return (
    <header id="zenrixa-header" className="relative z-50 w-full px-6 py-6 md:px-12 flex items-center justify-between text-white select-none">
      {/* Brand Logo */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 cursor-pointer group"
      >
        <div className="relative w-6 h-6 flex flex-wrap gap-[3px] rotate-45 group-hover:rotate-180 transition-transform duration-700">
          <span className="w-2.5 h-2.5 bg-white rounded-[2px]" />
          <span className="w-2.5 h-2.5 bg-white/60 rounded-[2px]" />
          <span className="w-2.5 h-2.5 bg-white/40 rounded-[2px]" />
          <span className="w-2.5 h-2.5 bg-white/20 rounded-[2px]" />
        </div>
        <span className="font-sans font-bold text-xl tracking-tight text-white">
          Zenrixa
        </span>
      </motion.div>

      {/* Desktop Navigation Menu */}
      <nav className="hidden md:flex items-center gap-8 text-sm">
        {navLinks.map((link) => (
          <div
            key={link.name}
            className="relative py-2 px-1 cursor-pointer"
            onMouseEnter={() => setHoveredLink(link.name)}
            onMouseLeave={() => setHoveredLink(null)}
            onClick={() => setActiveLink(link.name)}
          >
            <span className="flex items-center gap-1 text-white/85 hover:text-white transition-colors duration-200">
              {link.name}
              {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
            </span>
            
            {/* Active Link Diamond Indicator */}
            {activeLink === link.name && (
              <motion.div
                layoutId="nav-active-dot"
                className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rotate-45 rounded-[1px]"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}

            {/* Hover subtle line */}
            {hoveredLink === link.name && activeLink !== link.name && (
              <motion.div
                layoutId="nav-hover-line"
                className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-1 h-1 bg-white/30 rotate-45 rounded-[1px]"
                transition={{ duration: 0.2 }}
              />
            )}
          </div>
        ))}
      </nav>

      {/* Right Side Widgets (Menu Toggle) */}
      <div className="flex items-center gap-4">
        {/* Menu Toggle Pill Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onMenuToggle}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800/80 bg-zinc-900/40 hover:bg-zinc-900/90 text-xs font-semibold tracking-wider text-white transition-all duration-300 uppercase cursor-pointer"
        >
          {isMenuOpen ? (
            <>
              <X className="w-4 h-4 text-white" />
              <span>Close</span>
            </>
          ) : (
            <>
              <Menu className="w-4 h-4 text-white" />
              <span>Menu</span>
            </>
          )}
        </motion.button>
      </div>
    </header>
  );
}
