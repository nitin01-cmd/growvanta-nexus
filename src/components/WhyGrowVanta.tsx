import { motion } from "framer-motion";
import { Target, Cpu, Layers, Eye, Flame } from "lucide-react";

const reasons = [
  { icon: <Target size={22} />, title: "ROI-Focused Execution" },
  { icon: <Cpu size={22} />, title: "Creative + Tech Hybrid Team" },
  { icon: <Layers size={22} />, title: "Scalable Systems" },
  { icon: <Eye size={22} />, title: "Transparent Reporting" },
  { icon: <Flame size={22} />, title: "Performance-First Mindset" },
];

const WhyGrowVanta = () => (
  <section id="why-us" className="py-24 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-medium uppercase tracking-wider">
          Why Choose Us
        </span>
        <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3">
          Why <span className="gradient-text">GrowVanta Media</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto mb-16">
        {reasons.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-2xl p-5 text-center glow-border-hover transition-all duration-300"
          >
            <div className="mx-auto w-12 h-12 rounded-xl gradient-bg flex items-center justify-center text-primary mb-3">
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
        <p className="text-xl md:text-2xl font-heading font-medium text-muted-foreground">
          We don't deliver campaigns.
        </p>
        <p className="text-xl md:text-2xl font-heading font-bold gradient-text mt-1">
          We build growth ecosystems.
        </p>
      </motion.div>
    </div>
  </section>
);

export default WhyGrowVanta;
