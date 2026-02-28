import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Eye, ChevronDown } from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";

const allOrders = [
  {
    id: "#PRA-1084",
    customer: "Arjun Mehta",
    email: "arjun@mail.com",
    product: "Calacatta Bianco",
    qty: "20 sq.ft",
    amount: "₹84,000",
    status: "Confirmed",
    date: "28 Feb 2026",
    type: "Residential",
  },
  {
    id: "#PRA-1083",
    customer: "Priya Sharma",
    email: "priya@mail.com",
    product: "Miele Onyx",
    qty: "20 sq.ft",
    amount: "₹1,36,000",
    status: "Processing",
    date: "28 Feb 2026",
    type: "Commercial",
  },
  {
    id: "#PRA-1082",
    customer: "Ravi Constructions",
    email: "ravi@mail.com",
    product: "Statuario Supremo",
    qty: "50 sq.ft",
    amount: "₹3,75,000",
    status: "Shipped",
    date: "27 Feb 2026",
    type: "Commercial",
  },
  {
    id: "#PRA-1081",
    customer: "Nisha Patel",
    email: "nisha@mail.com",
    product: "Nero Marquina",
    qty: "15 sq.ft",
    amount: "₹58,500",
    status: "Delivered",
    date: "27 Feb 2026",
    type: "Residential",
  },
  {
    id: "#PRA-1080",
    customer: "Aditya Designs",
    email: "aditya@mail.com",
    product: "Venezia Terrazzo",
    qty: "30 sq.ft",
    amount: "₹1,05,000",
    status: "Confirmed",
    date: "26 Feb 2026",
    type: "Commercial",
  },
  {
    id: "#PRA-1079",
    customer: "Meera Kapoor",
    email: "meera@mail.com",
    product: "Grigio Imperiale",
    qty: "25 sq.ft",
    amount: "₹70,000",
    status: "Delivered",
    date: "26 Feb 2026",
    type: "Residential",
  },
  {
    id: "#PRA-1078",
    customer: "Suresh Builders",
    email: "suresh@mail.com",
    product: "Fez Artisan",
    qty: "40 sq.ft",
    amount: "₹88,000",
    status: "Cancelled",
    date: "25 Feb 2026",
    type: "Commercial",
  },
  {
    id: "#PRA-1077",
    customer: "Deepak Interior",
    email: "deepak@mail.com",
    product: "Rovere Naturale",
    qty: "35 sq.ft",
    amount: "₹1,08,500",
    status: "Shipped",
    date: "25 Feb 2026",
    type: "Commercial",
  },
];

const statusColors: Record<string, string> = {
  Confirmed: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Processing: "bg-amber-50 text-amber-700 border-amber-200",
  Shipped: "bg-blue-50 text-blue-700 border-blue-200",
  Delivered: "bg-stone-100 text-stone-600 border-stone-200",
  Cancelled: "bg-destructive/10 text-destructive border-destructive/20",
};

const statuses = [
  "All",
  "Confirmed",
  "Processing",
  "Shipped",
  "Delivered",
  "Cancelled",
];

const AdminOrders = () => {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [selected, setSelected] = useState<(typeof allOrders)[0] | null>(null);

  const filtered = allOrders.filter((o) => {
    const matchSearch =
      o.id.toLowerCase().includes(search.toLowerCase()) ||
      o.customer.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === "All" || o.status === filterStatus;
    return matchSearch && matchStatus;
  });

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-gold mb-1">
            Management
          </p>
          <h1 className="text-2xl font-serif text-foreground">Orders</h1>
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {statuses.slice(1).map((s) => (
            <button
              key={s}
              onClick={() => setFilterStatus(filterStatus === s ? "All" : s)}
              className={`bg-background border p-3 text-left transition-colors ${filterStatus === s ? "border-foreground" : "border-border hover:border-foreground/30"}`}
            >
              <p className="text-xl font-serif text-foreground">
                {allOrders.filter((o) => o.status === s).length}
              </p>
              <p className="text-[10px] tracking-wider text-muted-foreground mt-0.5">
                {s}
              </p>
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-background border border-border p-4 flex flex-wrap gap-4 items-center">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by order ID or customer..."
              className="w-full pl-9 pr-4 py-2.5 bg-background border border-border text-xs focus:outline-none focus:border-foreground/40"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="bg-background border border-border text-xs px-3 py-2.5 focus:outline-none"
          >
            {statuses.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          <p className="text-xs text-muted-foreground">
            {filtered.length} orders
          </p>
        </div>

        {/* Table */}
        <div className="bg-background border border-border overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                {[
                  "Order ID",
                  "Customer",
                  "Product",
                  "Qty",
                  "Amount",
                  "Status",
                  "Date",
                  "Action",
                ].map((h) => (
                  <th
                    key={h}
                    className="px-5 py-3 text-left text-[10px] tracking-[0.15em] uppercase text-muted-foreground font-normal whitespace-nowrap"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((order, i) => (
                <motion.tr
                  key={order.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.03 }}
                  className="border-b border-border/50 hover:bg-muted/20 transition-colors"
                >
                  <td className="px-5 py-3.5 text-xs font-medium text-foreground">
                    {order.id}
                  </td>
                  <td className="px-5 py-3.5">
                    <p className="text-xs text-foreground">{order.customer}</p>
                    <p className="text-[10px] text-muted-foreground">
                      {order.email}
                    </p>
                  </td>
                  <td className="px-5 py-3.5 text-xs text-muted-foreground">
                    {order.product}
                  </td>
                  <td className="px-5 py-3.5 text-xs text-muted-foreground">
                    {order.qty}
                  </td>
                  <td className="px-5 py-3.5 text-xs font-medium text-foreground">
                    {order.amount}
                  </td>
                  <td className="px-5 py-3.5">
                    <span
                      className={`text-[10px] px-2.5 py-1 border font-medium ${statusColors[order.status]}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-xs text-muted-foreground whitespace-nowrap">
                    {order.date}
                  </td>
                  <td className="px-5 py-3.5">
                    <button
                      onClick={() => setSelected(order)}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Detail Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-foreground/30 z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-background border border-border w-full max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <h3 className="text-sm font-serif">Order {selected.id}</h3>
              <button
                onClick={() => setSelected(null)}
                className="text-muted-foreground hover:text-foreground text-xs"
              >
                ✕
              </button>
            </div>
            <div className="p-6 space-y-4">
              {[
                ["Customer", selected.customer],
                ["Email", selected.email],
                ["Product", selected.product],
                ["Quantity", selected.qty],
                ["Amount", selected.amount],
                ["Status", selected.status],
                ["Date", selected.date],
                ["Type", selected.type],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex justify-between items-center py-2 border-b border-border/50"
                >
                  <span className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground">
                    {label}
                  </span>
                  <span className="text-xs text-foreground font-medium">
                    {value}
                  </span>
                </div>
              ))}
            </div>
            <div className="px-6 pb-6 flex gap-3 justify-end">
              <select className="px-4 py-2 border border-border text-xs focus:outline-none bg-background">
                <option>Update Status</option>
                {statuses.slice(1).map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
              <button
                onClick={() => setSelected(null)}
                className="px-5 py-2 bg-foreground text-background text-xs hover:bg-foreground/90 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminOrders;
