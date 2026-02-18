import { motion } from "framer-motion";
import {
  Video,
  Bot,
  Users,
  BarChart3,
  Globe,
  Smartphone,
  Zap,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

interface Service {
  icon: React.ReactNode;
  title: string;
  hook: string;
  features: string[];
  highlight?: string;
}

const services: Service[] = [
  {
    icon: <Video size={26} />,
    title: "UGC Creator Video",
    hook: "Authentic content that converts viewers into buyers.",
    features: [
      "Scripted & trend-based UGC",
      "Product demo videos",
      "Performance ad creatives",
      "Hook-focused short-form reels",
      "Platform-optimized content",
    ],
  },
  {
    icon: <Bot size={26} />,
    title: "AI Model Video",
    hook: "Hyper-realistic AI-powered video at scale.",
    features: [
      "AI avatar spokesperson videos",
      "Multilingual marketing videos",
      "AI product explainers",
      "Automated ad variations",
      "Voice cloning options",
    ],
    highlight: "Reduce costs by up to 70%",
  },
  {
    icon: <Users size={26} />,
    title: "Influencer Marketing",
    hook: "Strategic collaborations that amplify brand reach.",
    features: [
      "Niche influencer matching",
      "Campaign strategy & execution",
      "Micro & macro influencer networks",
      "Performance tracking dashboards",
      "Affiliate influencer campaigns",
    ],
  },
  {
    icon: <BarChart3 size={26} />,
    title: "Social Media Marketing",
    hook: "Data-driven content and ads built for growth.",
    features: [
      "Content strategy & planning",
      "Paid ads management",
      "Organic growth systems",
      "Funnel optimization",
      "Lead generation campaigns",
    ],
    highlight: "Traffic → Leads → Revenue",
  },
  {
    icon: <Globe size={26} />,
    title: "Web Development",
    hook: "High-converting websites built for business growth.",
    features: [
      "Business websites & landing pages",
      "E-commerce platforms",
      "Custom dashboards",
      "Speed & SEO optimization",
      "Conversion rate optimization",
    ],
  },
  {
    icon: <Smartphone size={26} />,
    title: "App Development",
    hook: "Scalable mobile apps built for user retention.",
    features: [
      "Startup MVPs",
      "Booking & service apps",
      "SaaS platforms",
      "Android & iOS builds",
      "Retention-focused UX",
    ],
  },
];

const ServicesSection = () => {
  const [active, setActive] = useState<number | null>(null);
  const toggle = (i: number) => setActive(active === i ? null : i);

  return (
    <section id="services" className="py-28 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-6xl font-heading font-bold mt-4">
            Services That{" "}
            <span className="gold-gradient-text">Dominate</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div
                onClick={() => toggle(i)}
                className={`cursor-pointer rounded-2xl p-7 glass-gold gold-border-hover transition-all duration-500 group ${
                  active === i ? "gold-glow-sm" : ""
                }`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="p-3 rounded-xl luxury-gradient text-primary">
                    {s.icon}
                  </div>
                  <motion.div
                    animate={{ rotate: active === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.div>
                </div>

                <h3 className="text-lg font-heading font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.hook}</p>

                <AnimatePresence>
                  {active === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-5 mt-5 border-t border-border">
                        <ul className="space-y-2.5 mb-4">
                          {s.features.map((f, j) => (
                            <li key={j} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                              <Zap size={11} className="text-primary flex-shrink-0" />
                              {f}
                            </li>
                          ))}
                        </ul>

                        {s.highlight && (
                          <div className="px-4 py-3 rounded-lg luxury-gradient gold-border">
                            <p className="text-sm font-semibold text-primary">{s.highlight}</p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
