import { useState } from "react";
import { motion } from "motion/react";
import Header from "./components/Header";
import HeroContent from "./components/HeroContent";
import FintechCards from "./components/FintechCards";
import Partners from "./components/Partners";
import FooterBar from "./components/FooterBar";
import ContactModal from "./components/ContactModal";
import WorksDrawer from "./components/WorksDrawer";
import NavigationMenu from "./components/NavigationMenu";
import ProcessChips from "./components/ProcessChips";
import ScrollAnimationCanvas from "./components/ScrollAnimationCanvas";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isWorksOpen, setIsWorksOpen] = useState(false);

  return (
    <div 
      id="zenrixa-app-root" 
      className="relative bg-black text-white flex flex-col overflow-x-hidden font-sans selection:bg-white selection:text-black min-h-[1200vh]"
    >
      {/* 
        The background canvas is now fixed to the screen for the entire scroll length.
        It plays all 360 frames (120 from folder 1 + 240 from folder 2) seamlessly without any black screen gaps.
      */}
      <ScrollAnimationCanvas />

      {/* The Zenrixa Layout Content OVER the global canvas */}
      <div className="absolute top-0 left-0 w-full z-10 pointer-events-none flex flex-col min-h-full">
        <div className="pointer-events-auto flex flex-col w-full h-full">
          <Header 
            onMenuToggle={() => setIsMenuOpen(prev => !prev)} 
            isMenuOpen={isMenuOpen} 
          />
          
          {/* Hero Section */}
          <section 
            id="page-one-hero"
            className="flex flex-col justify-start py-28 md:py-48 px-6 md:px-12 max-w-7xl mx-auto w-full gap-24 md:gap-36"
          >
            <div className="w-full flex justify-center">
              <HeroContent 
                onChatOpen={() => setIsChatOpen(true)} 
                onWorksOpen={() => setIsWorksOpen(true)} 
              />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <FintechCards />
            </motion.div>
          </section>

          {/* Large gap to let the user scroll and watch the first animation */}
          <div className="h-[200vh] w-full" />

          {/* Partners Section floating smoothly over the animation */}
          <section className="px-6 md:px-12 max-w-7xl mx-auto w-full flex justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-2xl flex flex-col justify-center items-center gap-8 bg-black/40 backdrop-blur-md p-10 rounded-3xl border border-white/10 shadow-2xl pointer-events-auto"
            >
              <div className="text-zinc-400 font-mono text-sm tracking-widest uppercase mb-4">Trusted By Leaders</div>
              <Partners />
            </motion.div>
          </section>

          {/* Large gap to transition into the second animation frames */}
          <div className="h-[300vh] w-full" />

          {/* Process Chips / Workflow Section */}
          <section 
            id="page-two-workflow"
            className="flex flex-col justify-center py-28 md:py-48 px-6 md:px-12 max-w-7xl mx-auto w-full pointer-events-auto"
          >
            <ProcessChips />
          </section>

          {/* Push Footer to the very bottom of the 1200vh page */}
          <div className="flex-grow" />
        </div>
      </div>

      <div className="z-20 pointer-events-auto relative mt-auto">
        <FooterBar />
      </div>

      <NavigationMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        onChatOpen={() => setIsChatOpen(true)}
        onWorksOpen={() => setIsWorksOpen(true)}
      />

      <ContactModal 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
      />

      <WorksDrawer 
        isOpen={isWorksOpen} 
        onClose={() => setIsWorksOpen(false)} 
      />
    </div>
  );
}
