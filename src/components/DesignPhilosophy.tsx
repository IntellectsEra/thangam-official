import { motion } from "framer-motion";

const DesignPhilosophy = () => {
  return (
    <section className="py-28 lg:py-40">
      <div className="max-w-[900px] mx-auto px-6 text-center">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gold mx-auto mb-10"
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[10px] tracking-[0.4em] uppercase text-gold mb-8"
        >
          Our Philosophy
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-3xl sm:text-4xl lg:text-6xl font-display font-light text-foreground leading-[1.2] mb-8"
        >
          We don't just sell tiles.<br />
          <em className="text-gold">We curate architectural surfaces.</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-sm text-muted-foreground leading-relaxed max-w-lg mx-auto"
        >
          Every tile in our collection is hand-selected for its material integrity,
          design clarity, and ability to transform spaces into experiences.
          From Italian quarries to your living space — excellence, uncompromised.
        </motion.p>
      </div>
    </section>
  );
};

export default DesignPhilosophy;
