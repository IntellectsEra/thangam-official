import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Package,
  Tag,
  ShoppingCart,
  Warehouse,
  MessageSquare,
  Bell,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/admin/dashboard" },
  { label: "Products", icon: Package, href: "/admin/products" },
  { label: "Categories", icon: Tag, href: "/admin/categories" },
  { label: "Orders", icon: ShoppingCart, href: "/admin/orders" },
  { label: "Inventory", icon: Warehouse, href: "/admin/inventory" },
  { label: "Enquiries", icon: MessageSquare, href: "/admin/enquiries" },
  { label: "Notifications", icon: Bell, href: "/admin/notifications" },
  { label: "Settings", icon: Settings, href: "/admin/settings" },
];

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const isAuth = sessionStorage.getItem("thangam_admin");
    if (!isAuth) navigate("/admin/login");
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("thangam_admin");
    navigate("/admin/login");
  };

  const currentNav = navItems.find((n) => n.href === location.pathname);

  return (
    <div className="min-h-screen bg-muted/30 flex">
      {/* Desktop Sidebar */}
      <aside
        className={`hidden lg:flex flex-col transition-all duration-300 ${sidebarOpen ? "w-64" : "w-[72px]"} bg-background border-r border-border flex-shrink-0`}
      >
        {/* Logo */}
        <div
          className={`h-16 flex items-center border-b border-border flex-shrink-0 ${sidebarOpen ? "px-6 justify-between" : "px-4 justify-center"}`}
        >
          {sidebarOpen && (
            <Link
              to="/"
              className="text-lg font-serif tracking-[0.3em] text-foreground"
            >
              Thangam
            </Link>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-6 overflow-y-auto">
          <ul className="space-y-0.5 px-3">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className={`flex items-center gap-3 px-3 py-2.5 text-sm transition-all duration-200 group relative ${
                      isActive
                        ? "bg-foreground text-background"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                    }`}
                    title={!sidebarOpen ? item.label : undefined}
                  >
                    <item.icon className="w-4 h-4 flex-shrink-0" />
                    {sidebarOpen && (
                      <span className="tracking-wide text-xs uppercase font-medium">
                        {item.label}
                      </span>
                    )}
                    {isActive && sidebarOpen && (
                      <ChevronRight className="w-3 h-3 ml-auto" />
                    )}
                    {!sidebarOpen && (
                      <span className="absolute left-full ml-3 bg-foreground text-background text-xs px-2 py-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                        {item.label}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Logout */}
        <div className="p-3 border-t border-border">
          <button
            onClick={handleLogout}
            className={`flex items-center gap-3 px-3 py-2.5 w-full text-sm text-muted-foreground hover:text-destructive transition-colors duration-200`}
            title={!sidebarOpen ? "Logout" : undefined}
          >
            <LogOut className="w-4 h-4 flex-shrink-0" />
            {sidebarOpen && (
              <span className="tracking-wide text-xs uppercase font-medium">
                Logout
              </span>
            )}
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {mobileSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-foreground/20 z-40 lg:hidden"
              onClick={() => setMobileSidebarOpen(false)}
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "tween", duration: 0.25 }}
              className="fixed left-0 top-0 bottom-0 w-64 bg-background border-r border-border z-50 lg:hidden flex flex-col"
            >
              <div className="h-16 flex items-center justify-between px-6 border-b border-border">
                <span className="text-lg font-serif tracking-[0.3em] text-foreground">
                  Thangam Ceramics
                </span>
                <button onClick={() => setMobileSidebarOpen(false)}>
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
              <nav className="flex-1 py-6 overflow-y-auto">
                <ul className="space-y-0.5 px-3">
                  {navItems.map((item) => {
                    const isActive = location.pathname === item.href;
                    return (
                      <li key={item.label}>
                        <Link
                          to={item.href}
                          onClick={() => setMobileSidebarOpen(false)}
                          className={`flex items-center gap-3 px-3 py-2.5 text-sm transition-all duration-200 ${
                            isActive
                              ? "bg-foreground text-background"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                          }`}
                        >
                          <item.icon className="w-4 h-4 flex-shrink-0" />
                          <span className="tracking-wide text-xs uppercase font-medium">
                            {item.label}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
              <div className="p-3 border-t border-border">
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 px-3 py-2.5 w-full text-sm text-muted-foreground hover:text-destructive transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="tracking-wide text-xs uppercase font-medium">
                    Logout
                  </span>
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="h-16 bg-background border-b border-border flex items-center justify-between px-6 flex-shrink-0">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden text-muted-foreground hover:text-foreground"
              onClick={() => setMobileSidebarOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                Admin Portal
              </p>
              <h2 className="text-sm font-serif text-foreground">
                {currentNav?.label || "Dashboard"}
              </h2>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/"
              target="_blank"
              className="text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors"
            >
              View Site →
            </Link>
            <div className="w-8 h-8 bg-foreground flex items-center justify-center">
              <span className="text-background text-xs font-medium">A</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
