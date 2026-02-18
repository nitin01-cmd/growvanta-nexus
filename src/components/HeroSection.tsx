import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HeroScene from "./HeroScene";
import Iridescence from "./Iridescence";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#04050a] text-white">
      {/* Iridescence animated background layer */}
      <div className="absolute inset-0 z-[5] opacity-20 mix-blend-screen pointer-events-none">
        <Iridescence
          color={[0.85, 0.72, 0.42]}
          speed={0.4}
          amplitude={0.12}
          mouseReact={true}
        />
      </div>

      <HeroScene />

      {/* subtle dark overlay to ensure text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent z-[1]" />

      <div className="container relative z-10 mx-auto px-6 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-yellow-300/80 mb-8" style={{ fontFamily: 'Cinzel, serif' }}>
              Digital Growth Core
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            We Build. We Market.
            <br />
            <span className="text-yellow-300">We Scale.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto mb-10 font-light"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Digital systems engineered for measurable growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#cta"
              className="group flex items-center gap-3 px-8 py-3 rounded-md border-2 border-yellow-300 text-yellow-300 font-semibold text-base hover:shadow-[0_8px_30px_rgba(212,175,55,0.12)] transition-all duration-300"
            >
              Get Free Strategy Call
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#work"
              className="flex items-center gap-3 px-8 py-3 rounded-md border border-white/20 text-white/80 font-semibold text-base bg-transparent hover:bg-white/3 transition-all duration-300"
            >
              View Our Work
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-[2]" />
    </section>
  );
};

export default HeroSection;
