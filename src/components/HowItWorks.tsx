import { motion } from "framer-motion";
import { Lightbulb, Film, Rocket, TrendingUp } from "lucide-react";

const steps = [
  { icon: <Lightbulb size={22} />, title: "Strategy", desc: "Deep dive into goals" },
  { icon: <Film size={22} />, title: "Production", desc: "Create high-impact assets" },
  { icon: <Rocket size={22} />, title: "Launch", desc: "Deploy across channels" },
  { icon: <TrendingUp size={22} />, title: "Scale", desc: "Data-driven growth" },
];

const HowItWorks = () => (
  <section id="process" className="py-28 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">
          Our Process
        </span>
        <h2 className="text-3xl md:text-6xl font-heading font-bold mt-4">
          How It <span className="gold-gradient-text">Works</span>
        </h2>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        {/* Gold connector */}
        <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center relative"
            >
              <div className="mx-auto w-14 h-14 rounded-2xl luxury-gradient gold-border flex items-center justify-center text-primary mb-5 relative z-10">
                {step.icon}
              </div>
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
