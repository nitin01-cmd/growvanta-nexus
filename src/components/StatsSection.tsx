import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const StatsSection = () => (
  <section id="stats" className="py-24 relative">
    {/* Decorative line */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-primary/30" />

    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        <AnimatedCounter end={500} suffix="+" label="Campaigns Launched" />
        <AnimatedCounter end={3} suffix="x" label="Avg. ROI Growth" />
        <AnimatedCounter end={200} suffix="+" label="Brands Scaled" />
        <AnimatedCounter end={50} suffix="M+" label="Impressions Generated" />
      </div>
    </div>

    {/* Decorative line */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-primary/30 to-transparent" />
  </section>
);

export default StatsSection;
