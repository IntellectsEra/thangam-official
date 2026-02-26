import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Thangam Ceramics transformed our vision into reality. The marble selection is unparalleled — truly world-class.",
    author: "Ar. Priya Mehta",
    role: "Principal Architect, Studio Forma",
  },
  {
    quote:
      "The quality of their imported collection rivals anything we've sourced from Italy directly.",
    author: "Vikram Shah",
    role: "Interior Designer, VSA Design",
  },
  {
    quote:
      "Working with Thangam Ceramics feels like collaborating with artisans, not salespeople. Exceptional taste and service.",
    author: "Anjali Kapoor",
    role: "Creative Director, AK Interiors",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            className="h-px bg-gold mx-auto mb-6"
          />
          <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-3">
            Voices
          </p>
          <h2 className="text-3xl lg:text-4xl font-serif text-foreground">
            What Our Partners Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <p className="text-lg lg:text-xl font-display font-light text-foreground leading-relaxed mb-8 italic">
                "{t.quote}"
              </p>
              <div className="w-8 h-px bg-gold mx-auto mb-4" />
              <p className="text-xs font-medium tracking-wider text-foreground">
                {t.author}
              </p>
              <p className="text-[10px] text-muted-foreground mt-1">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
