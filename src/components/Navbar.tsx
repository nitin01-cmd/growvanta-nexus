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
          GrowVanta
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
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setOpen(false)}
            />

            {/* Left Menu (40%) */}
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 bottom-0 w-[45%] bg-gradient-to-r from-black via-black/90 to-black/70 z-40 pt-24 px-8 overflow-y-auto border-r border-primary/10"
            >
              <div className="space-y-10">
                <div>
                  <p className="text-xs uppercase tracking-widest text-primary/60 mb-6" style={{ fontFamily: "Cinzel, serif" }}>Navigation</p>
                  <div className="space-y-6">
                    {links.map((l, i) => (
                      <motion.a
                        key={l.href}
                        href={l.href}
                        onClick={() => setOpen(false)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="block text-xl font-light text-white/90 hover:text-primary transition-colors duration-300"
                        style={{ fontFamily: "Cinzel, serif" }}
                      >
                        {l.label}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Menu (40%) */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-[45%] bg-gradient-to-l from-black via-black/90 to-black/70 z-40 pt-24 px-8 flex flex-col overflow-y-auto border-l border-primary/10"
            >
              <div className="space-y-12 flex-1">
                <div>
                  <p className="text-xs uppercase tracking-widest text-primary/60 mb-6" style={{ fontFamily: "Cinzel, serif" }}>Get Started</p>
                  <motion.a
                    href="#cta"
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="block w-full px-6 py-3 rounded-lg border-2 border-primary text-primary font-semibold text-center hover:shadow-[0_8px_30px_rgba(212,175,55,0.3)] transition-all duration-300"
                    style={{ fontFamily: "Cinzel, serif" }}
                  >
                    Free Strategy Call
                  </motion.a>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-primary/60 mb-4" style={{ fontFamily: "Cinzel, serif" }}>About</p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-4 text-sm text-white/70"
                  >
                    <p>Transforming digital presence into measurable growth.</p>
                    <p className="text-primary/80 font-semibold">Available 24/7</p>
                  </motion.div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pb-8 text-xs text-white/40 border-t border-white/10 pt-8"
              >
                <p>© 2026 GrowVanta</p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
