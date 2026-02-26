import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Heart, SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

const filterOptions = {
  Category: ["Floor Tiles", "Wall Tiles", "Imported Tiles"],
  Size: ["300×300 mm", "600×600 mm", "600×1200 mm", "800×800 mm", "1200×1800 mm", "800×2400 mm"],
  Color: ["White", "Beige", "Grey", "Brown", "Black", "Blue", "Gold"],
  Finish: ["Polished", "Matt", "High Gloss", "Wood Textured", "Glazed", "Book Match"],
  Type: ["Porcelain", "Ceramic", "Vitrified"],
};

const Products = () => {
  const [filters, setFilters] = useState<Record<string, string[]>>({});
  const [sortBy, setSortBy] = useState("name");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [expandedFilter, setExpandedFilter] = useState<string | null>("Category");

  const toggleFilter = (key: string, value: string) => {
    setFilters((prev) => {
      const current = prev[key] || [];
      const next = current.includes(value) ? current.filter((v) => v !== value) : [...current, value];
      return { ...prev, [key]: next };
    });
  };

  const activeFilterCount = Object.values(filters).flat().length;

  const filtered = useMemo(() => {
    let result = [...products];
    Object.entries(filters).forEach(([key, values]) => {
      if (values.length > 0) {
        const k = key.toLowerCase() as keyof typeof products[0];
        result = result.filter((p) => values.includes(String(p[k])));
      }
    });
    if (sortBy === "name") result.sort((a, b) => a.name.localeCompare(b.name));
    return result;
  }, [filters, sortBy]);

  const FilterPanel = () => (
    <div className="space-y-1">
      {Object.entries(filterOptions).map(([key, values]) => (
        <div key={key} className="border-b border-border/60">
          <button
            onClick={() => setExpandedFilter(expandedFilter === key ? null : key)}
            className="flex items-center justify-between w-full py-4 text-left"
          >
            <span className="text-[11px] tracking-[0.15em] uppercase text-foreground">{key}</span>
            <ChevronDown className={`w-3.5 h-3.5 text-muted-foreground transition-transform duration-300 ${expandedFilter === key ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {expandedFilter === key && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="pb-4 space-y-2">
                  {values.map((val) => {
                    const isActive = (filters[key] || []).includes(val);
                    return (
                      <button
                        key={val}
                        onClick={() => toggleFilter(key, val)}
                        className={`block w-full text-left text-xs py-1 transition-colors duration-200 ${
                          isActive ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span className={`w-3 h-3 border ${isActive ? "bg-foreground border-foreground" : "border-border"} transition-colors duration-200 flex items-center justify-center`}>
                            {isActive && <span className="text-primary-foreground text-[8px]">✓</span>}
                          </span>
                          {val}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-[140px] lg:pt-[170px]">
        {/* Breadcrumb */}
        <div className="max-w-[1400px] mx-auto px-6 py-6">
          <nav className="flex items-center gap-2 text-[10px] tracking-wider text-muted-foreground uppercase">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground">All Tiles</span>
          </nav>
        </div>

        {/* Page Header */}
        <div className="max-w-[1400px] mx-auto px-6 pb-10">
          <h1 className="text-3xl lg:text-5xl font-serif text-foreground mb-3">All Tiles</h1>
          <p className="text-sm text-muted-foreground">
            {filtered.length} products curated for extraordinary spaces
          </p>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 pb-24">
          <div className="flex gap-10">
            {/* Desktop Filters */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-[180px]">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xs tracking-[0.2em] uppercase text-foreground">Filters</h3>
                  {activeFilterCount > 0 && (
                    <button
                      onClick={() => setFilters({})}
                      className="text-[10px] text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Clear all
                    </button>
                  )}
                </div>
                <FilterPanel />
              </div>
            </aside>

            {/* Products */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-border/60">
                <button
                  className="lg:hidden flex items-center gap-2 text-xs tracking-wider uppercase text-foreground"
                  onClick={() => setMobileFilterOpen(true)}
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                  {activeFilterCount > 0 && (
                    <span className="w-5 h-5 flex items-center justify-center bg-foreground text-primary-foreground text-[9px]">
                      {activeFilterCount}
                    </span>
                  )}
                </button>
                <div className="flex items-center gap-3 ml-auto">
                  <span className="text-[10px] tracking-wider uppercase text-muted-foreground">Sort by</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="text-xs bg-transparent border-none text-foreground focus:outline-none cursor-pointer"
                  >
                    <option value="name">Name</option>
                    <option value="newest">Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                </div>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {filtered.map((product, i) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="group luxury-card"
                  >
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="relative img-zoom aspect-square bg-muted/30 mb-4">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" loading="lazy" />
                        <button
                          className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
                          onClick={(e) => e.preventDefault()}
                        >
                          <Heart className="w-4 h-4" />
                        </button>
                      </div>
                      <h3 className="text-sm font-medium text-foreground group-hover:text-gold transition-colors duration-300 mb-1">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-2 text-[10px] tracking-wider text-muted-foreground uppercase mb-1">
                        <span>{product.size}</span>
                        <span className="w-px h-2.5 bg-border" />
                        <span>{product.finish}</span>
                      </div>
                      <p className="text-sm text-foreground font-medium mt-2">{product.price}</p>
                    </Link>
                    <button className="w-full mt-3 btn-luxury-outline text-[10px] py-2.5">Request Quote</button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Filter Drawer */}
        <AnimatePresence>
          {mobileFilterOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-foreground/30 z-50"
                onClick={() => setMobileFilterOpen(false)}
              />
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed top-0 left-0 bottom-0 w-80 bg-background z-50 p-6 overflow-y-auto"
              >
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xs tracking-[0.2em] uppercase">Filters</h3>
                  <button onClick={() => setMobileFilterOpen(false)}>
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <FilterPanel />
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="w-full mt-8 btn-luxury-primary text-[10px] py-3"
                >
                  Show {filtered.length} Results
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
