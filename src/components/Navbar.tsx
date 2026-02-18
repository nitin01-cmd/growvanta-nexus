import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Stats", href: "#stats" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#cta" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-dark">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-heading font-bold gold-gradient-text tracking-wide">
          GrowMantra
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cta"
            className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold gold-glow-sm hover:opacity-90 transition-all duration-300"
          >
            Get Started
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden glass-dark overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-4">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a href="#cta" onClick={() => setOpen(false)}
                className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold text-center gold-glow-sm"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
