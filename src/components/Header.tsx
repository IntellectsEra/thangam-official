import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Search, Heart, User, Phone, Menu, X, ChevronDown } from "lucide-react";
import { navigationData, NavCategory } from "@/data/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../public/logo.webp";

const Header = () => {
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const handleMouseEnter = useCallback((label: string) => {
    setActiveMega(label);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActiveMega(null);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      {/* Top Bar */}
      <div className="block lg:hidden border-b border-border/60">
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between h-10">
          <div className="flex items-center gap-2 text-xs tracking-wider text-muted-foreground">
            <Phone className="w-3 h-3" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-1.5 text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors duration-300">
              <Heart className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Wishlist</span>
            </button>
            <button className="flex items-center gap-1.5 text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors duration-300">
              <User className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Sign In</span>
            </button>
            <button className="flex items-center gap-1.5 text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors duration-300">
              <Search className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Search</span>
            </button>
          </div>
        </div>
      </div>

      <div className="hidden  lg:block border-b border-border/40">
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between lg:justify-center relative">
          <div className="w-full grid grid-cols-3 items-end">
            <article className="flex justify-start pb-6">
              <div className="flex items-center gap-2 text-xs tracking-wider text-muted-foreground">
                <Phone className="w-3 h-3" />
                <span>+91 98765 43210</span>
              </div>
            </article>

            <article className="flex justify-center py-2">
              <img src={Logo} alt="logo" className="w-26 h-22" />
            </article>

            <article className="flex justify-end pb-6">
              <div className="flex items-center gap-6">
                <button className="flex items-center gap-1.5 text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors duration-300">
                  <Heart className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Wishlist</span>
                </button>
                <button className="flex items-center gap-1.5 text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors duration-300">
                  <User className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Sign In</span>
                </button>
                <button className="flex items-center gap-1.5 text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors duration-300">
                  <Search className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Search</span>
                </button>
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* Logo */}
      <div className="block lg:hidden border-b border-border/40">
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between h-16 lg:justify-center relative">
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="logo" className="w-16 h-12" />
          </Link>
          <button
            className="lg:hidden absolute right-6"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav
        className="hidden lg:block border-b border-border/40"
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-[1400px] mx-auto px-6">
          <ul className="flex items-center justify-center gap-0">
            {navigationData.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.megaMenu
                    ? handleMouseEnter(item.label)
                    : setActiveMega(null)
                }
              >
                <Link
                  to={item.href}
                  className="block px-4 py-4 text-[11px] tracking-[0.18em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 whitespace-nowrap"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mega Menu Panel */}
        <AnimatePresence>
          {activeMega && (
            <MegaMenuPanel
              category={navigationData.find((n) => n.label === activeMega)!}
              onMouseLeave={handleMouseLeave}
            />
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-b border-border bg-background overflow-hidden max-h-[70vh] overflow-y-auto"
          >
            <div className="py-4">
              {navigationData.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between px-6">
                    <Link
                      to={item.href}
                      className="block py-3 text-xs tracking-[0.15em] uppercase text-foreground"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.megaMenu && (
                      <button
                        onClick={() =>
                          setMobileExpanded(
                            mobileExpanded === item.label ? null : item.label,
                          )
                        }
                        className="p-2"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                        />
                      </button>
                    )}
                  </div>
                  <AnimatePresence>
                    {mobileExpanded === item.label && item.megaMenu && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-muted/30 px-6"
                      >
                        {item.megaMenu.sections.map((section) => (
                          <div key={section.title} className="py-3">
                            <p className="text-[10px] tracking-[0.2em] uppercase text-gold mb-2">
                              {section.title}
                            </p>
                            {section.items.map((sub) => (
                              <Link
                                key={sub}
                                to={item.href}
                                className="block py-1.5 text-xs text-muted-foreground hover:text-foreground"
                                onClick={() => setMobileOpen(false)}
                              >
                                {sub}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const MegaMenuPanel = ({
  category,
  onMouseLeave,
}: {
  category: NavCategory;
  onMouseLeave: () => void;
}) => {
  if (!category.megaMenu) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="absolute left-0 right-0 bg-background border-b border-border shadow-lg shadow-foreground/[0.03]"
      onMouseLeave={onMouseLeave}
    >
      <div className="max-w-[1400px] mx-auto px-8 py-10">
        <div className="flex gap-12">
          {/* Left CTA */}
          <div className="flex-shrink-0 w-48">
            <Link to={category.href} className="block group">
              <p className="text-xs tracking-[0.2em] uppercase text-gold mb-2">
                Explore
              </p>
              <h3 className="text-lg font-serif text-foreground group-hover:text-gold transition-colors duration-300">
                View All {category.label}
              </h3>
              <div className="mt-3 w-8 h-px bg-gold group-hover:w-12 transition-all duration-500" />
            </Link>
          </div>

          {/* Separator */}
          <div className="w-px bg-border" />

          {/* Columns */}
          <div className="flex-1 grid grid-cols-5 gap-8">
            {category.megaMenu.sections.map((section) => (
              <div key={section.title}>
                <h4 className="text-[10px] tracking-[0.2em] uppercase text-gold mb-4 font-medium">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item}>
                      <Link
                        to={category.href}
                        className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300 leading-relaxed"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
