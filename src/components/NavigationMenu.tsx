import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight, Github, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

interface NavigationMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onChatOpen: () => void;
  onWorksOpen: () => void;
}

export default function NavigationMenu({ isOpen, onClose, onChatOpen, onWorksOpen }: NavigationMenuProps) {
  const menuItems = [
    { name: "Home", sub: "Go to start", action: onClose },
    { name: "Services", sub: "What we do", action: onClose },
    { name: "Our Showcase", sub: "View our masterpieces", action: () => { onClose(); onWorksOpen(); } },
    { name: "Career Openings", sub: "Join our talent pool", action: onClose },
    { name: "Let's Talk", sub: "Direct consultation", action: () => { onClose(); onChatOpen(); } },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="full-nav-menu" className="fixed inset-0 z-50 overflow-hidden flex flex-col md:flex-row">
          {/* Backdrop Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/95 backdrop-blur-xl z-0"
            onClick={onClose}
          />

          {/* Left panel: Info & Socials (hidden on mobile, beautiful layout on desktop) */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200, delay: 0.1 }}
            className="relative z-10 w-full md:w-1/3 bg-zinc-950/60 p-8 md:p-12 border-b md:border-b-0 md:border-r border-zinc-900 flex flex-col justify-between"
          >
            {/* Header branding */}
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 flex flex-wrap gap-[2px] rotate-45">
                <span className="w-2 h-2 bg-white rounded-[1px]" />
                <span className="w-2 h-2 bg-white/60 rounded-[1px]" />
                <span className="w-2 h-2 bg-white/40 rounded-[1px]" />
                <span className="w-2 h-2 bg-white/20 rounded-[1px]" />
              </div>
              <span className="font-sans font-bold text-lg tracking-tight text-white">
                Zenrixa
              </span>
            </div>

            {/* Info contacts */}
            <div className="flex flex-col gap-6 my-8">
              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Office Location</span>
                <p className="text-zinc-200 text-sm mt-1 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-white/70" />
                  Warsaw, Poland
                </p>
              </div>

              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">General Enquiries</span>
                <a href="mailto:hello@zenrixa.com" className="text-zinc-200 hover:text-white text-sm mt-1 flex items-center gap-2 transition-colors duration-200">
                  <Mail className="w-4 h-4 text-zinc-400" />
                  hello@zenrixa.com
                </a>
              </div>

              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Call Us</span>
                <p className="text-zinc-200 text-sm mt-1 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-zinc-400" />
                  +48 22 555 0100
                </p>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-all duration-200">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-all duration-200">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-all duration-200">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-all duration-200">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right panel: Large Navigation Links */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative z-10 w-full md:w-2/3 h-full p-8 md:p-16 flex flex-col justify-between"
          >
            {/* Top Close button row */}
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-all duration-200 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav links */}
            <div className="flex flex-col gap-6 md:gap-8 my-auto">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.08 }}
                  className="group flex items-center justify-between border-b border-zinc-900/60 pb-4 md:pb-6 cursor-pointer"
                  onClick={item.action}
                >
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase">
                      {item.sub}
                    </span>
                    <span className="text-2xl md:text-4xl font-bold tracking-tight text-white group-hover:text-white/80 transition-colors duration-200">
                      {item.name}
                    </span>
                  </div>
                  <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-600 group-hover:text-white group-hover:border-white group-hover:bg-white/5 transition-all duration-300">
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <div className="text-left text-[10px] font-mono text-zinc-600 mt-8">
              © 2026 ZENRIXA STUDIO — THE STANDARD OF ZERO LIMITS.
            </div>
          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
}
