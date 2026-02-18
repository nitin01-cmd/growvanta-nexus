import { motion } from "framer-motion";
import { Target, Cpu, Layers, Eye, Flame } from "lucide-react";

const reasons = [
  { icon: <Target size={22} />, title: "ROI-Focused Execution" },
  { icon: <Cpu size={22} />, title: "Creative + Tech Hybrid" },
  { icon: <Layers size={22} />, title: "Scalable Systems" },
  { icon: <Eye size={22} />, title: "Transparent Reporting" },
  { icon: <Flame size={22} />, title: "Performance-First" },
];

const WhyGrowMantra = () => (
  <section className="py-28 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">
          Why Us
        </span>
        <h2 className="text-3xl md:text-6xl font-heading font-bold mt-4">
          Why <span className="gold-gradient-text">GrowMantra</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto mb-20">
        {reasons.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-gold rounded-2xl p-6 text-center gold-border-hover transition-all duration-500"
          >
            <div className="mx-auto w-12 h-12 rounded-xl luxury-gradient flex items-center justify-center text-primary mb-4">
              {r.icon}
            </div>
            <h3 className="font-heading font-semibold text-sm">{r.title}</h3>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto"
      >
        <p className="text-xl md:text-2xl font-heading text-muted-foreground">
          We don't deliver campaigns.
        </p>
        <p className="text-xl md:text-3xl font-heading font-bold gold-gradient-text mt-2">
          We build growth empires.
        </p>
      </motion.div>
    </div>
  </section>
);

export default WhyGrowMantra;
