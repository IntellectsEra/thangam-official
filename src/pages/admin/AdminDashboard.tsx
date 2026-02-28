import { motion } from "framer-motion";
import {
  TrendingUp, ShoppingCart, Package, AlertTriangle, Star,
  ArrowUpRight, ArrowDownRight, Users, Eye
} from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";
import { products } from "@/data/products";

const statCards = [
  {
    label: "Today's Sales",
    value: "₹2,84,500",
    sub: "+12.4% from yesterday",
    up: true,
    icon: TrendingUp,
    accent: "gold",
  },
  {
    label: "Monthly Sales",
    value: "₹48,32,000",
    sub: "+8.1% from last month",
    up: true,
    icon: TrendingUp,
    accent: "gold",
  },
  {
    label: "Total Orders",
    value: "1,284",
    sub: "34 new today",
    up: true,
    icon: ShoppingCart,
    accent: "primary",
  },
  {
    label: "Total Products",
    value: products.length.toString(),
    sub: "Across all categories",
    up: true,
    icon: Package,
    accent: "primary",
  },
  {
    label: "Low Stock Alerts",
    value: "7",
    sub: "Requires attention",
    up: false,
    icon: AlertTriangle,
    accent: "destructive",
  },
  {
    label: "Site Visitors",
    value: "12,480",
    sub: "This month",
    up: true,
    icon: Eye,
    accent: "primary",
  },
];

const recentOrders = [
  { id: "#PRA-1084", customer: "Arjun Mehta", product: "Calacatta Bianco", amount: "₹84,000", status: "Confirmed", date: "Today, 10:22 AM" },
  { id: "#PRA-1083", customer: "Priya Sharma", product: "Miele Onyx", amount: "₹1,36,000", status: "Processing", date: "Today, 09:15 AM" },
  { id: "#PRA-1082", customer: "Ravi Constructions", product: "Statuario Supremo", amount: "₹3,75,000", status: "Shipped", date: "Yesterday" },
  { id: "#PRA-1081", customer: "Nisha Patel", product: "Nero Marquina", amount: "₹58,500", status: "Delivered", date: "Yesterday" },
  { id: "#PRA-1080", customer: "Aditya Designs", product: "Venezia Terrazzo", amount: "₹1,05,000", status: "Confirmed", date: "2 days ago" },
];

const bestSelling = [
  { name: "Calacatta Bianco", category: "Floor Tiles", sold: 284, revenue: "₹11,92,800" },
  { name: "Miele Onyx", category: "Imported Tiles", sold: 198, revenue: "₹13,46,400" },
  { name: "Nero Marquina", category: "Floor Tiles", sold: 176, revenue: "₹6,86,400" },
  { name: "Venezia Terrazzo", category: "Wall Tiles", sold: 154, revenue: "₹5,39,000" },
  { name: "Fez Artisan", category: "Wall Tiles", sold: 142, revenue: "₹3,12,400" },
];

const lowStockItems = [
  { name: "Statuario Supremo", sku: "STA-SUP-1224", stock: 8, threshold: 20 },
  { name: "Miele Onyx", sku: "MIE-ONX-0824", stock: 12, threshold: 25 },
  { name: "Fez Artisan", sku: "FEZ-ART-0303", stock: 15, threshold: 30 },
];

const statusColors: Record<string, string> = {
  Confirmed: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Processing: "bg-amber-50 text-amber-700 border-amber-200",
  Shipped: "bg-blue-50 text-blue-700 border-blue-200",
  Delivered: "bg-stone-100 text-stone-600 border-stone-200",
};

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Page header */}
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-gold mb-1">Overview</p>
          <h1 className="text-2xl font-serif text-foreground">Dashboard</h1>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
          {statCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="bg-background border border-border p-5 col-span-1"
            >
              <div className="flex items-start justify-between mb-3">
                <p className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground leading-tight">{card.label}</p>
                <card.icon className={`w-4 h-4 flex-shrink-0 ${card.accent === "destructive" ? "text-destructive" : "text-gold"}`} />
              </div>
              <p className="text-xl font-serif text-foreground mb-1">{card.value}</p>
              <div className="flex items-center gap-1">
                {card.up ? (
                  <ArrowUpRight className="w-3 h-3 text-emerald-500" />
                ) : (
                  <ArrowDownRight className="w-3 h-3 text-destructive" />
                )}
                <p className={`text-[10px] ${card.accent === "destructive" ? "text-destructive" : card.up ? "text-emerald-600" : "text-muted-foreground"}`}>
                  {card.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Row: Recent Orders + Low Stock */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Recent Orders */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="xl:col-span-2 bg-background border border-border"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <h3 className="text-sm font-serif text-foreground">Recent Orders</h3>
              <a href="/admin/orders" className="text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors">
                View All →
              </a>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    {["Order ID", "Customer", "Product", "Amount", "Status", "Date"].map((h) => (
                      <th key={h} className="px-5 py-3 text-left text-[10px] tracking-[0.15em] uppercase text-muted-foreground font-normal">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order, i) => (
                    <tr key={order.id} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                      <td className="px-5 py-3.5 text-xs font-medium text-foreground">{order.id}</td>
                      <td className="px-5 py-3.5 text-xs text-foreground">{order.customer}</td>
                      <td className="px-5 py-3.5 text-xs text-muted-foreground">{order.product}</td>
                      <td className="px-5 py-3.5 text-xs font-medium text-foreground">{order.amount}</td>
                      <td className="px-5 py-3.5">
                        <span className={`text-[10px] tracking-wider px-2.5 py-1 border font-medium ${statusColors[order.status]}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 text-xs text-muted-foreground whitespace-nowrap">{order.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Low Stock */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="bg-background border border-border"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <h3 className="text-sm font-serif text-foreground">Low Stock Alerts</h3>
              <AlertTriangle className="w-4 h-4 text-destructive" />
            </div>
            <div className="p-4 space-y-3">
              {lowStockItems.map((item) => (
                <div key={item.sku} className="p-4 bg-destructive/5 border border-destructive/15">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-xs font-medium text-foreground">{item.name}</p>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{item.sku}</p>
                    </div>
                    <span className="text-xs font-semibold text-destructive">{item.stock} left</span>
                  </div>
                  <div className="w-full bg-border h-1">
                    <div
                      className="bg-destructive h-1 transition-all duration-700"
                      style={{ width: `${(item.stock / item.threshold) * 100}%` }}
                    />
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-1">Min. threshold: {item.threshold} units</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Best Selling */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-background border border-border"
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-border">
            <h3 className="text-sm font-serif text-foreground">Best Selling Tiles</h3>
            <Star className="w-4 h-4 text-gold" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  {["#", "Product Name", "Category", "Units Sold", "Revenue"].map((h) => (
                    <th key={h} className="px-6 py-3 text-left text-[10px] tracking-[0.15em] uppercase text-muted-foreground font-normal">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bestSelling.map((item, i) => (
                  <tr key={item.name} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                    <td className="px-6 py-3.5 text-xs text-muted-foreground">{i + 1}</td>
                    <td className="px-6 py-3.5 text-xs font-medium text-foreground">{item.name}</td>
                    <td className="px-6 py-3.5 text-xs text-muted-foreground">{item.category}</td>
                    <td className="px-6 py-3.5 text-xs text-foreground">{item.sold}</td>
                    <td className="px-6 py-3.5 text-xs font-medium text-foreground">{item.revenue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
