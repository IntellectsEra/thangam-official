import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import spaceBathroom from "@/assets/space-bathroom.jpg";
import spaceKitchen from "@/assets/space-kitchen.jpg";
import spaceLiving from "@/assets/space-living.jpg";
import spaceOutdoor from "@/assets/space-outdoor.jpg";
import spaceCommercial from "@/assets/space-commercial.jpg";
import heroMain from "@/assets/hero-main.jpg";

const images = [
  { src: heroMain, space: "Living Room", style: "Classic", title: "Grand Marble Living" },
  { src: spaceBathroom, space: "Bathroom", style: "Modern", title: "Serene Bath Retreat" },
  { src: spaceKitchen, space: "Kitchen", style: "Contemporary", title: "Culinary Elegance" },
  { src: spaceLiving, space: "Living Room", style: "Luxury", title: "Warm Sophistication" },
  { src: spaceOutdoor, space: "Outdoor", style: "Mediterranean", title: "Terrace Dreams" },
  { src: spaceCommercial, space: "Commercial", style: "Grand", title: "Lobby Magnificence" },
];

const filters = ["All", "Living Room", "Bathroom", "Kitchen", "Outdoor", "Commercial"];

const Inspiration = () => {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? images : images.filter((img) => img.space === active);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-[140px] lg:pt-[170px]">
        <div className="max-w-[1400px] mx-auto px-6 py-10">
          <h1 className="text-3xl lg:text-5xl font-serif text-foreground mb-3">Inspiration Gallery</h1>
          <p className="text-sm text-muted-foreground mb-12">
            Discover how our tiles transform spaces into architectural statements.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2 text-[10px] tracking-[0.15em] uppercase border transition-all duration-300 ${
                  active === f
                    ? "bg-foreground text-primary-foreground border-foreground"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
            {filtered.map((img, i) => (
              <motion.div
                key={img.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="break-inside-avoid group img-zoom cursor-pointer relative"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/60">{img.space} · {img.style}</p>
                  <h3 className="text-lg font-serif text-primary-foreground">{img.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Inspiration;
