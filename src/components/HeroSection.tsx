import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HeroScene from "./HeroScene";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroScene />

      {/* Overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40 z-[1]" />

      <div className="container relative z-10 mx-auto px-6 pt-24 pb-16">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-5 py-2 rounded-full text-xs font-semibold tracking-[0.2em] uppercase gold-border text-primary mb-10 gold-glow-sm">
              Digital Growth Empire
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-8xl font-heading font-bold leading-[0.95] mb-8 tracking-tight"
          >
            We Build. We Market.
            <br />
            <span className="gold-gradient-text">We Scale.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-light"
          >
            GrowMantra crafts digital empires through content, technology, and performance marketing that dominates markets.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <a
              href="#cta"
              className="group flex items-center gap-3 px-10 py-5 rounded-xl bg-primary text-primary-foreground font-semibold text-base gold-glow hover:opacity-90 transition-all duration-300 animate-pulse-gold"
            >
              Start Your Empire
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="flex items-center gap-3 px-10 py-5 rounded-xl gold-border text-foreground font-semibold text-base gold-border-hover transition-all duration-300"
            >
              View Services
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-[2]" />
    </section>
  );
};

export default HeroSection;
