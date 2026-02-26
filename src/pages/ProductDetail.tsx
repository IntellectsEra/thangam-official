import { useParams, Link } from "react-router-dom";
import { Heart, Download, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-[200px] text-center">
          <h1 className="text-2xl font-serif">Product not found</h1>
          <Link to="/products" className="text-sm text-gold mt-4 inline-block">Browse all tiles</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  const specs = [
    { label: "SKU", value: product.sku },
    { label: "Size", value: product.size },
    { label: "Material", value: product.material },
    { label: "Finish", value: product.finish },
    { label: "Type", value: product.type },
    { label: "Color", value: product.color },
    { label: "Application", value: product.application },
    { label: "Availability", value: product.inStock ? "In Stock" : "Made to Order" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-[140px] lg:pt-[170px]">
        {/* Breadcrumb */}
        <div className="max-w-[1400px] mx-auto px-6 py-6">
          <nav className="flex items-center gap-2 text-[10px] tracking-wider text-muted-foreground uppercase">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/products" className="hover:text-foreground transition-colors">All Tiles</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>

        {/* Product Section */}
        <div className="max-w-[1400px] mx-auto px-6 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-square bg-muted/20 sticky top-[180px]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="py-4"
            >
              <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-3">{product.category}</p>
              <h1 className="text-3xl lg:text-4xl font-serif text-foreground mb-2">{product.name}</h1>
              <p className="text-sm text-muted-foreground mb-6">SKU: {product.sku}</p>
              
              <div className="w-12 h-px bg-gold mb-8" />

              <p className="text-2xl font-serif text-foreground mb-8">{product.price}</p>

              {/* Quick Specs */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="py-3 border-b border-border/60">
                  <p className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-1">Size</p>
                  <p className="text-sm text-foreground">{product.size}</p>
                </div>
                <div className="py-3 border-b border-border/60">
                  <p className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-1">Finish</p>
                  <p className="text-sm text-foreground">{product.finish}</p>
                </div>
                <div className="py-3 border-b border-border/60">
                  <p className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-1">Material</p>
                  <p className="text-sm text-foreground">{product.material}</p>
                </div>
                <div className="py-3 border-b border-border/60">
                  <p className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-1">Status</p>
                  <p className={`text-sm ${product.inStock ? "text-foreground" : "text-gold"}`}>
                    {product.inStock ? "In Stock" : "Made to Order"}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <button className="flex-1 btn-luxury-primary py-3.5">Request Quote</button>
                <button className="btn-luxury-outline py-3.5 px-6">
                  <Heart className="w-4 h-4" />
                </button>
              </div>

              {/* Full Specs */}
              <div className="border-t border-border/60 pt-10">
                <h3 className="text-xs tracking-[0.2em] uppercase text-foreground mb-6">Specifications</h3>
                <div className="space-y-0">
                  {specs.map((spec) => (
                    <div key={spec.label} className="flex justify-between py-3 border-b border-border/40">
                      <span className="text-xs text-muted-foreground">{spec.label}</span>
                      <span className="text-xs text-foreground">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Download */}
              <button className="flex items-center gap-2 mt-8 text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors">
                <Download className="w-4 h-4" />
                Download Brochure
              </button>
            </motion.div>
          </div>

          {/* Related */}
          <div className="mt-24 pt-16 border-t border-border/40">
            <h2 className="text-2xl font-serif text-foreground mb-10">You May Also Like</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group luxury-card">
                  <div className="img-zoom aspect-square bg-muted/30 mb-3">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground group-hover:text-gold transition-colors">{p.name}</h3>
                  <p className="text-[10px] text-muted-foreground mt-1">{p.size} · {p.finish}</p>
                  <p className="text-sm text-foreground mt-1">{p.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
