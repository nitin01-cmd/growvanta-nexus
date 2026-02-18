import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => (
  <section id="cta" className="py-32 relative overflow-hidden">
    {/* Glow effects */}
    <div className="absolute inset-0 luxury-gradient" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/5 blur-[100px]" />
    <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-primary/3 blur-[80px]" />

    <div className="container relative z-10 mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-7xl font-heading font-bold mb-8 leading-tight">
          Ready to Build Your{" "}
          <span className="gold-gradient-text">Empire?</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-12 font-light">
          Let's craft a strategy that dominates your market and drives real results.
        </p>
        <a
          href="#"
          className="group inline-flex items-center gap-3 px-12 py-5 rounded-xl bg-primary text-primary-foreground font-semibold text-lg gold-glow-intense hover:opacity-90 transition-all duration-300"
        >
          Book Your Free Growth Call
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
