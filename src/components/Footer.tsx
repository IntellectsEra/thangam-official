import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import Logo from "../../public/logo-light.webp";

const footerLinks = {
  "Quick Links": [
    "All Tiles",
    "Floor Tiles",
    "Wall Tiles",
    "Bathroom Tiles",
    "Kitchen Tiles",
    "Outdoor Tiles",
  ],
  Collections: [
    "Marble Series",
    "Wooden Plank",
    "Metallic Series",
    "Moroccan",
    "Large Format Slabs",
    "Imported Tiles",
  ],
  Resources: [
    "Inspiration Gallery",
    "Design Consultation",
    "Download Catalogue",
    "Blog",
    "FAQs",
    "Careers",
  ],
  Support: [
    "Contact Us",
    "Store Locator",
    "Shipping Policy",
    "Return Policy",
    "Privacy Policy",
    "Terms & Conditions",
  ],
};

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Newsletter */}
      <div className="border-b border-primary-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-xl font-serif mb-1">Stay Inspired</h3>
            <p className="text-primary-foreground/50 text-sm">
              Receive curated design stories and new arrivals.
            </p>
          </div>
          <div className="flex w-full md:w-auto max-w-md">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-primary-foreground/20 px-5 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-primary-foreground/40 transition-colors"
            />
            <button className="px-6 py-3 bg-primary-foreground text-foreground text-xs tracking-[0.2em] uppercase hover:bg-primary-foreground/90 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-6 lg:mb-0">
            {/* <h2 className="text-2xl font-serif tracking-[0.3em] mb-4">Thangam Ceramics Ceramics</h2> */}
            <article className="flex pb-4">
              <img src={Logo} alt="logo" className="w-26 h-22" />
            </article>
            <p className="text-primary-foreground/40 text-sm leading-relaxed mb-6">
              Luxury tiles curated for architects, designers, and refined
              spaces.
            </p>
            <div className="space-y-3 text-xs text-primary-foreground/50">
              <div className="flex items-center gap-2">
                <Phone className="w-3 h-3" />
                <span>+91 73393 61125</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3 h-3" />
                <span>Thangam Ceramicsceramicsofficial@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3 h-3" />
                <span>
                  1/5A , Mahia Industrial Estate, Uranganpatti, Madurai - 625020
                </span>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/60 mb-5">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/products"
                      className="text-xs text-primary-foreground/40 hover:text-primary-foreground transition-colors duration-300"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] tracking-wider text-primary-foreground/30">
            © 2026 Thangam Ceramics Ceramics. All rights reserved.
          </p>
          <p className="text-[10px] tracking-wider text-primary-foreground/30">
            Crafted with precision for architectural excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
