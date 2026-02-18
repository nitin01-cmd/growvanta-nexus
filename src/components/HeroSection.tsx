import { motion } from "framer-motion";
import { Rocket, FolderOpen } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Digital growth technology"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      </div>

      <div className="container relative z-10 mx-auto px-6 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase border border-primary/30 text-primary mb-8 glow-border">
              Digital Growth Agency
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold leading-tight mb-6"
          >
            We Create. We Influence.{" "}
            <span className="gradient-text">We Scale.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            GrowVanta Media builds digital growth systems through content, technology, and performance marketing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#cta"
              className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-base glow-blue hover:opacity-90 transition-all"
            >
              <Rocket size={18} />
              Book Strategy Call
            </a>
            <a
              href="#services"
              className="flex items-center gap-2 px-8 py-4 rounded-xl border border-border text-foreground font-semibold text-base hover:border-primary/50 transition-colors"
            >
              <FolderOpen size={18} />
              Explore Services
            </a>
          </motion.div>
        </div>

        {/* Floating stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {[
            { value: "500+", label: "Campaigns Launched" },
            { value: "3x", label: "Avg. ROI Growth" },
            { value: "200+", label: "Brands Scaled" },
            { value: "50M+", label: "Impressions Generated" },
          ].map((stat, i) => (
            <div
              key={i}
              className="glass rounded-xl p-4 text-center glow-border-hover transition-all duration-300"
            >
              <div className="text-2xl font-heading font-bold gradient-text">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
