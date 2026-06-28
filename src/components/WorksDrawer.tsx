import { ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, Globe, Smartphone, Monitor } from "lucide-react";

interface WorksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ProjectItem {
  title: string;
  category: string;
  tag: string;
  icon: ReactNode;
  desc: string;
  wireframe: ReactNode;
}

export default function WorksDrawer({ isOpen, onClose }: WorksDrawerProps) {
  const projects: ProjectItem[] = [
    {
      title: "Aura Identity",
      category: "BRANDING & DIRECTION",
      tag: "FINTECH",
      icon: <Globe className="w-4 h-4 text-white/80" />,
      desc: "Comprehensive typographic guidelines, procedural generated vectors, and premium branding sheets designed for decentralised finance.",
      wireframe: (
        <div className="w-full h-32 bg-zinc-950 border border-zinc-900 rounded-lg flex items-center justify-center p-4 relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
          {/* Wireframe geometric layout */}
          <div className="flex flex-col gap-2 w-full max-w-[120px] relative">
            <div className="h-4 w-2/3 bg-zinc-800 rounded animate-pulse" />
            <div className="h-2 w-full bg-zinc-900 rounded" />
            <div className="h-2 w-4/5 bg-zinc-900 rounded" />
            <div className="flex gap-1.5 mt-1">
              <span className="w-3 h-3 rounded-full bg-zinc-800" />
              <span className="w-3 h-3 rounded-full bg-zinc-800" />
              <span className="w-3 h-3 rounded-full bg-zinc-800" />
            </div>
          </div>
          <div className="absolute right-4 bottom-4 text-zinc-700 text-xs font-mono select-none">
            SHEET-01
          </div>
        </div>
      ),
    },
    {
      title: "Nebula Platform",
      category: "UX/UI ARCHITECTURE",
      tag: "SAAS SYSTEM",
      icon: <Monitor className="w-4 h-4 text-white/80" />,
      desc: "High density desktop systems configured for developers and data specialists. Engineered for responsive rendering and system diagnostics.",
      wireframe: (
        <div className="w-full h-32 bg-zinc-950 border border-zinc-900 rounded-lg flex items-center justify-center p-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
          <div className="grid grid-cols-3 gap-2 w-full">
            <div className="h-16 bg-zinc-900/60 rounded border border-zinc-800/40 p-1 flex flex-col justify-between">
              <div className="w-3 h-3 bg-zinc-800 rounded-full" />
              <div className="h-1.5 w-full bg-zinc-800/40 rounded" />
            </div>
            <div className="h-16 bg-zinc-900/60 rounded border border-zinc-800/40 p-1 flex flex-col justify-between">
              <div className="w-3 h-3 bg-zinc-800 rounded-full" />
              <div className="h-1.5 w-full bg-zinc-800/40 rounded" />
            </div>
            <div className="h-16 bg-zinc-900/60 rounded border border-zinc-800/40 p-1 flex flex-col justify-between">
              <div className="w-3 h-3 bg-zinc-800 rounded-full" />
              <div className="h-1.5 w-full bg-zinc-800/40 rounded" />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Veloce Hyperdrive",
      category: "INTERFACE CONCEPTION",
      tag: "AUTOMOTIVE",
      icon: <Smartphone className="w-4 h-4 text-white/80" />,
      desc: "Interactive cockpit dashboard and companion mobile control software developed for pure electric track-centric vehicles.",
      wireframe: (
        <div className="w-full h-32 bg-zinc-950 border border-zinc-900 rounded-lg flex items-center justify-center p-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
          <div className="relative w-16 h-16 rounded-full border-4 border-zinc-900 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border-2 border-dashed border-zinc-800 animate-spin" />
            <div className="absolute text-[8px] font-mono text-zinc-500">220 KM</div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="works-drawer" className="fixed inset-0 z-50 flex justify-end">
          
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full max-w-lg h-full bg-zinc-950 border-l border-zinc-900 p-6 md:p-8 flex flex-col gap-6 text-white shadow-2xl z-10 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-900">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                  Zenrixa Studio
                </span>
                <h3 className="text-xl font-bold tracking-tight mt-0.5">Selected Cases</h3>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-colors duration-200 cursor-pointer"
                aria-label="Close drawer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Project List */}
            <div className="flex flex-col gap-8 py-2">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="flex flex-col gap-4 border border-zinc-900 hover:border-zinc-800 p-4 rounded-xl bg-zinc-950 hover:bg-zinc-900/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-mono tracking-wider bg-zinc-900 text-zinc-400 px-2 py-1 rounded">
                      {project.tag}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500 tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                      {project.icon}
                    </div>
                    <div>
                      <h4 className="text-base font-bold tracking-tight flex items-center gap-1.5 hover:text-white transition-colors duration-200 cursor-pointer">
                        {project.title}
                        <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                      </h4>
                      <p className="text-xs text-zinc-400 leading-relaxed mt-1">
                        {project.desc}
                      </p>
                    </div>
                  </div>

                  {/* Wireframe Mockup rendering */}
                  {project.wireframe}
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-auto pt-6 border-t border-zinc-900 text-center">
              <span className="text-[10px] font-mono text-zinc-600">
                © 2026 Zenrixa Creative Agency. All rights reserved.
              </span>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
