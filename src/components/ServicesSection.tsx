import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Video,
  Bot,
  Users,
  BarChart3,
  Globe,
  Smartphone,
  TrendingUp,
  Zap,
  Target,
  ChevronDown,
} from "lucide-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  hook: string;
  features: string[];
  highlight?: string;
  metrics: { label: string; value: string }[];
}

const services: Service[] = [
  {
    icon: <Video size={28} />,
    title: "UGC Creator Video",
    hook: "Authentic content that converts viewers into buyers.",
    features: [
      "Scripted & trend-based UGC",
      "Product demo videos",
      "Performance ad creatives",
      "Hook-focused short-form reels",
      "Platform-optimized content (Instagram, TikTok, YouTube Shorts)",
    ],
    metrics: [
      { label: "CTR Increase", value: "+340%" },
      { label: "Engagement Boost", value: "5.2x" },
    ],
  },
  {
    icon: <Bot size={28} />,
    title: "AI Model Video",
    hook: "Hyper-realistic AI-powered video production at scale.",
    features: [
      "AI avatar spokesperson videos",
      "Multilingual marketing videos",
      "AI product explainers",
      "Automated ad variations",
      "Voice cloning options",
    ],
    highlight: "Reduce production cost by up to 70%",
    metrics: [
      { label: "Cost Reduction", value: "70%" },
      { label: "Production Speed", value: "10x" },
    ],
  },
  {
    icon: <Users size={28} />,
    title: "Influencer Marketing",
    hook: "Strategic collaborations that amplify brand reach.",
    features: [
      "Niche influencer matching",
      "Campaign strategy & execution",
      "Micro & macro influencer networks",
      "Performance tracking dashboards",
      "Affiliate influencer campaigns",
    ],
    metrics: [
      { label: "Avg. Engagement Rate", value: "8.4%" },
      { label: "Campaign Growth", value: "+250%" },
    ],
  },
  {
    icon: <BarChart3 size={28} />,
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
    metrics: [
      { label: "Lead Growth", value: "+420%" },
      { label: "ROAS", value: "5.8x" },
    ],
  },
  {
    icon: <Globe size={28} />,
    title: "Web Development",
    hook: "High-converting websites built for business growth.",
    features: [
      "Business websites",
      "Landing pages",
      "E-commerce platforms",
      "Custom dashboards",
      "Speed & SEO optimization",
    ],
    metrics: [
      { label: "Page Speed Score", value: "98/100" },
      { label: "Conversion Uplift", value: "+180%" },
    ],
  },
  {
    icon: <Smartphone size={28} />,
    title: "App Development",
    hook: "Scalable mobile apps built for user retention.",
    features: [
      "Startup MVPs",
      "Booking systems",
      "Service apps",
      "SaaS platforms",
      "Android & iOS builds",
    ],
    metrics: [
      { label: "User Retention", value: "78%" },
      { label: "App Store Rating", value: "4.8★" },
    ],
  },
];

const ServicesSection = () => {
  const [active, setActive] = useState<number | null>(null);

  const toggle = (i: number) => setActive(active === i ? null : i);

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3">
            Services Built for{" "}
            <span className="gradient-text">Growth</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div
                onClick={() => toggle(i)}
                className={`cursor-pointer rounded-2xl p-6 glass glow-border-hover transition-all duration-300 ${
                  active === i ? "border-primary/50 glow-blue" : ""
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl gradient-bg text-primary">
                    {s.icon}
                  </div>
                  <motion.div
                    animate={{ rotate: active === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={20} className="text-muted-foreground" />
                  </motion.div>
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground">{s.hook}</p>

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
                        <ul className="space-y-2 mb-5">
                          {s.features.map((f, j) => (
                            <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Zap size={12} className="text-primary flex-shrink-0" />
                              {f}
                            </li>
                          ))}
                        </ul>

                        {s.highlight && (
                          <div className="mb-5 px-4 py-2.5 rounded-lg gradient-bg border border-primary/20">
                            <p className="text-sm font-medium text-primary flex items-center gap-2">
                              <Target size={14} />
                              {s.highlight}
                            </p>
                          </div>
                        )}

                        <div className="grid grid-cols-2 gap-3">
                          {s.metrics.map((m, j) => (
                            <div
                              key={j}
                              className="rounded-lg bg-background/50 p-3 text-center"
                            >
                              <div className="text-xl font-heading font-bold gradient-text">
                                {m.value}
                              </div>
                              <div className="text-xs text-muted-foreground mt-1">
                                {m.label}
                              </div>
                            </div>
                          ))}
                        </div>
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
