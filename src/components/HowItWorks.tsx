import { motion } from "framer-motion";
import { Lightbulb, Film, Rocket, TrendingUp } from "lucide-react";

const steps = [
  { icon: <Lightbulb size={24} />, title: "Strategy", desc: "Deep dive into your goals and market" },
  { icon: <Film size={24} />, title: "Production", desc: "Create high-impact content & systems" },
  { icon: <Rocket size={24} />, title: "Launch", desc: "Deploy campaigns across channels" },
  { icon: <TrendingUp size={24} />, title: "Optimize & Scale", desc: "Data-driven iteration for growth" },
];

const HowItWorks = () => (
  <section id="process" className="py-24 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-medium uppercase tracking-wider">
          Our Process
        </span>
        <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3">
          How It <span className="gradient-text">Works</span>
        </h2>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        {/* Connector line */}
        <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center relative"
            >
              <div className="mx-auto w-14 h-14 rounded-2xl gradient-bg border border-primary/20 flex items-center justify-center text-primary mb-4 relative z-10 bg-card">
                {step.icon}
              </div>
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary/10 animate-pulse-glow" />
              <h3 className="font-heading font-semibold text-base mb-1">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
