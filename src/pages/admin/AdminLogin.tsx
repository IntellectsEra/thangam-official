import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

const ADMIN_EMAIL = "admin@thangam.com";
const ADMIN_PASSWORD = "thangam@admin2026";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      sessionStorage.setItem("thangam_admin", "true");
      navigate("/admin/dashboard");
    } else {
      setError("Invalid credentials. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left: branding panel */}
      <div className="hidden lg:flex flex-col justify-between w-[45%] bg-foreground px-16 py-12">
        <div>
          <h1 className="text-3xl font-serif tracking-[0.4em] text-background">
            Thangam Ceramics
          </h1>
          <p
            className="text-xs tracking-[0.25em] uppercase mt-1"
            style={{ color: "hsl(var(--gold-light))" }}
          >
            Admin Portal
          </p>
        </div>
        <div>
          <p className="text-4xl font-display italic leading-snug text-background/80">
            "Curating architectural
            <br />
            surfaces since 2005."
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xs tracking-wider text-background/40">
            © 2026 Thangam Ceramics Luxury Tiles
          </p>
          <p className="text-xs tracking-wider text-background/40">
            Secure Admin Access
          </p>
        </div>
      </div>

      {/* Right: login form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-md"
        >
          <div className="mb-10">
            <div className="lg:hidden mb-8">
              <h1 className="text-2xl font-serif tracking-[0.4em] text-foreground">
                Thangam Ceramics
              </h1>
            </div>
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-3">
              Welcome back
            </p>
            <h2 className="text-3xl font-serif text-foreground">
              Sign in to Admin
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Manage your products, orders, and analytics.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@thangam.com"
                  required
                  className="w-full pl-11 pr-4 py-3.5 bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground/40 transition-colors duration-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  required
                  className="w-full pl-11 pr-12 py-3.5 bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground/40 transition-colors duration-300"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-destructive bg-destructive/5 border border-destructive/20 px-4 py-2.5"
              >
                {error}
              </motion.p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-foreground text-background text-xs tracking-[0.25em] uppercase font-medium hover:bg-foreground/90 transition-colors duration-300 disabled:opacity-60 mt-2"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground text-center">
              Demo credentials:{" "}
              <span className="text-foreground font-medium">
                admin@thangam.com
              </span>{" "}
              /{" "}
              <span className="text-foreground font-medium">
                thangam@admin2026
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminLogin;
