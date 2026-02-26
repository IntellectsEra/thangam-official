import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import spaceBathroom from "@/assets/space-bathroom.jpg";
import spaceKitchen from "@/assets/space-kitchen.jpg";
import spaceLiving from "@/assets/space-living.jpg";
import spaceOutdoor from "@/assets/space-outdoor.jpg";
import spaceCommercial from "@/assets/space-commercial.jpg";

const spaces = [
  { name: "Bathroom", image: spaceBathroom, span: "md:col-span-1 md:row-span-2" },
  { name: "Kitchen", image: spaceKitchen, span: "md:col-span-1" },
  { name: "Living Room", image: spaceLiving, span: "md:col-span-1" },
  { name: "Outdoor", image: spaceOutdoor, span: "md:col-span-1 md:row-span-2" },
  { name: "Commercial", image: spaceCommercial, span: "md:col-span-1" },
];

const TilesBySpace = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-px bg-gold mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[10px] tracking-[0.3em] uppercase text-gold mb-3"
          >
            Explore by Space
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-3xl lg:text-5xl font-serif text-foreground"
          >
            Tiles for Every Room
          </motion.h2>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[280px]">
          {spaces.map((space, i) => (
            <motion.div
              key={space.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${space.span} relative group img-zoom cursor-pointer`}
            >
              <Link to={`/products?category=${space.name.toLowerCase()}`} className="block w-full h-full">
                <img
                  src={space.image}
                  alt={`${space.name} tiles`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-primary-foreground/60 mb-1">
                    Explore
                  </p>
                  <h3 className="text-xl lg:text-2xl font-serif text-primary-foreground">
                    {space.name}
                  </h3>
                  <div className="mt-3 w-0 group-hover:w-10 h-px bg-gold-light transition-all duration-700" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TilesBySpace;
