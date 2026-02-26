import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import collectionMarble from "@/assets/collection-marble.jpg";
import collectionMetallic from "@/assets/collection-metallic.jpg";
import collectionWood from "@/assets/collection-wood.jpg";
import collectionLargeformat from "@/assets/collection-largeformat.jpg";
import tileMoroccan from "@/assets/tile-moroccan.jpg";
import tileOnyx from "@/assets/tile-onyx.jpg";

const collections = [
  { name: "Marble Series", subtitle: "Italian Elegance", image: collectionMarble },
  { name: "Metallic Series", subtitle: "Bold Statements", image: collectionMetallic },
  { name: "Moroccan Collection", subtitle: "Artisan Craft", image: tileMoroccan },
  { name: "Wooden Plank Series", subtitle: "Natural Warmth", image: collectionWood },
  { name: "Large Format Slabs", subtitle: "Grand Spaces", image: collectionLargeformat },
  { name: "Onyx Collection", subtitle: "Luminous Depth", image: tileOnyx },
];

const FeaturedCollections = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 420;
      scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-sand/40">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-14">
          <div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              className="h-px bg-gold mb-6"
            />
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-3">Curated</p>
            <h2 className="text-3xl lg:text-5xl font-serif text-foreground">Featured Collections</h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button onClick={() => scroll("left")} className="p-3 border border-border hover:border-foreground transition-colors duration-300">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={() => scroll("right")} className="p-3 border border-border hover:border-foreground transition-colors duration-300">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto px-6 lg:px-[max(1.5rem,calc((100vw-1400px)/2+1.5rem))] scrollbar-hide pb-4"
        style={{ scrollbarWidth: "none" }}
      >
        {collections.map((col, i) => (
          <motion.div
            key={col.name}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex-shrink-0 w-[340px] lg:w-[400px] group cursor-pointer"
          >
            <Link to="/products" className="block">
              <div className="img-zoom aspect-[4/3] mb-5">
                <img
                  src={col.image}
                  alt={col.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1">
                {col.subtitle}
              </p>
              <h3 className="text-lg font-serif text-foreground group-hover:text-gold transition-colors duration-500">
                {col.name}
              </h3>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCollections;
