import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-main.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury Italian marble interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/40 via-foreground/15 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1400px] mx-auto px-6 w-full">
          <div className="max-w-2xl pt-32">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-px bg-gold-light mb-8"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-[11px] tracking-[0.4em] uppercase text-primary-foreground/70 mb-6"
            >
              Luxury Architectural Surfaces
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-serif text-primary-foreground leading-[1.1] mb-6"
            >
              Where Surfaces
              <br />
              Become
              <br />
              <em className="font-display font-light">Statements.</em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-sm sm:text-base text-white leading-relaxed mb-10 max-w-lg"
            >
              Luxury tiles curated for architects, designers, and refined
              spaces. Each surface tells a story of craftsmanship and timeless
              elegance.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/products"
                className="btn-luxury bg-primary-foreground text-foreground hover:bg-primary-foreground/90"
              >
                Explore Collections
              </Link>
              <Link
                to="/inspiration"
                className="btn-luxury border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
              >
                View Inspiration
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase text-primary-foreground/40">
          Scroll
        </span>
        <div className="w-px h-8 bg-primary-foreground/20 relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-1/2 bg-primary-foreground/60"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
