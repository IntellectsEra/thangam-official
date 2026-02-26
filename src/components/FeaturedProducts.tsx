import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import { products } from "@/data/products";

const FeaturedProducts = () => {
  const featured = products.slice(0, 4);

  return (
    <section className="py-24 lg:py-32 bg-sand/30">
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
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-3">New Arrivals</p>
            <h2 className="text-3xl lg:text-5xl font-serif text-foreground">Featured Tiles</h2>
          </div>
          <Link
            to="/products"
            className="hidden md:inline-flex text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors luxury-link pb-0.5"
          >
            View All
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group luxury-card"
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative img-zoom aspect-square bg-muted/30 mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <button
                    className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-background"
                    onClick={(e) => { e.preventDefault(); }}
                  >
                    <Heart className="w-4 h-4 text-foreground" />
                  </button>
                  {!product.inStock && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-foreground text-primary-foreground text-[9px] tracking-[0.15em] uppercase">
                      Made to Order
                    </div>
                  )}
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-sm font-medium text-foreground group-hover:text-gold transition-colors duration-300">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 text-[10px] tracking-wider text-muted-foreground uppercase">
                    <span>{product.size}</span>
                    <span className="w-px h-2.5 bg-border" />
                    <span>{product.finish}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{product.type}</p>
                  <p className="text-sm font-medium text-foreground mt-2">{product.price}</p>
                </div>
              </Link>
              <button className="w-full mt-4 btn-luxury-outline text-[10px] py-2.5">
                Request Quote
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
