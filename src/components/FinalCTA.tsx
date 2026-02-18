import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

const FinalCTA = () => (
  <section id="cta" className="py-24 relative overflow-hidden">
    {/* Glowing bg */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

    <div className="container relative z-10 mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
          Ready to Build Your{" "}
          <span className="gradient-text">Growth Engine?</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-10">
          Let's craft a custom strategy that drives real results for your brand.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg glow-blue hover:opacity-90 transition-all"
        >
          <Rocket size={20} />
          Book Your Free Growth Call
        </a>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
