import { useState } from "react";
import { motion } from "framer-motion";
import { Search, AlertTriangle, ArrowUpRight, Edit2 } from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";
import { products } from "@/data/products";

const inventoryData = products.map((p, i) => ({
  ...p,
  stock: [45, 12, 78, 33, 8, 56, 22, 4][i % 8],
  threshold: [20, 15, 30, 25, 20, 30, 20, 10][i % 8],
  warehouse: ["Mumbai", "Delhi", "Bangalore"][i % 3],
  lastRestocked: ["10 Feb 2026", "15 Feb 2026", "20 Feb 2026"][i % 3],
}));

const AdminInventory = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [editItem, setEditItem] = useState<(typeof inventoryData)[0] | null>(
    null,
  );
  const [newStock, setNewStock] = useState("");

  const filtered = inventoryData.filter((item) => {
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchFilter =
      filter === "All" ||
      (filter === "Low Stock" && item.stock <= item.threshold) ||
      (filter === "In Stock" && item.stock > item.threshold);
    return matchSearch && matchFilter;
  });

  const lowCount = inventoryData.filter((i) => i.stock <= i.threshold).length;
  const totalStock = inventoryData.reduce((a, b) => a + b.stock, 0);

  const stockLevel = (stock: number, threshold: number) => {
    if (stock === 0)
      return {
        label: "Out of Stock",
        color: "text-destructive",
        bar: "bg-destructive",
      };
    if (stock <= threshold)
      return {
        label: "Low Stock",
        color: "text-amber-600",
        bar: "bg-amber-500",
      };
    return {
      label: "In Stock",
      color: "text-emerald-600",
      bar: "bg-emerald-500",
    };
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-gold mb-1">
            Management
          </p>
          <h1 className="text-2xl font-serif text-foreground">Inventory</h1>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Total SKUs", value: inventoryData.length },
            {
              label: "Total Stock (sq.ft)",
              value: totalStock.toLocaleString(),
            },
            { label: "Low Stock Alerts", value: lowCount },
            {
              label: "Out of Stock",
              value: inventoryData.filter((i) => i.stock === 0).length,
            },
          ].map((s, i) => (
            <div
              key={s.label}
              className="bg-background border border-border p-4"
            >
              <p className="text-xl font-serif text-foreground">{s.value}</p>
              <p className="text-[10px] tracking-wider text-muted-foreground mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-background border border-border p-4 flex flex-wrap gap-4 items-center">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-9 pr-4 py-2.5 bg-background border border-border text-xs focus:outline-none focus:border-foreground/40"
            />
          </div>
          <div className="flex gap-2">
            {["All", "Low Stock", "In Stock"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 text-xs border transition-colors ${filter === f ? "bg-foreground text-background border-foreground" : "border-border text-muted-foreground hover:text-foreground"}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="bg-background border border-border overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                {[
                  "Product",
                  "SKU",
                  "Stock (sq.ft)",
                  "Min. Threshold",
                  "Status",
                  "Warehouse",
                  "Last Restocked",
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
              {filtered.map((item, i) => {
                const level = stockLevel(item.stock, item.threshold);
                return (
                  <motion.tr
                    key={item.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.03 }}
                    className="border-b border-border/50 hover:bg-muted/20 transition-colors"
                  >
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        {item.image && (
                          <div className="w-8 h-8 overflow-hidden bg-muted flex-shrink-0">
                            <img
                              src={item.image}
                              alt=""
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <span className="text-xs font-medium text-foreground">
                          {item.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-3.5 text-xs text-muted-foreground">
                      {item.sku}
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs font-semibold ${level.color}`}
                        >
                          {item.stock}
                        </span>
                        <div className="w-16 h-1 bg-border">
                          <div
                            className={`h-1 ${level.bar} transition-all`}
                            style={{
                              width: `${Math.min((item.stock / (item.threshold * 2)) * 100, 100)}%`,
                            }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3.5 text-xs text-muted-foreground">
                      {item.threshold}
                    </td>
                    <td className="px-5 py-3.5">
                      {item.stock <= item.threshold && (
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-500 inline mr-1" />
                      )}
                      <span
                        className={`text-[10px] font-medium ${level.color}`}
                      >
                        {level.label}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-xs text-muted-foreground">
                      {item.warehouse}
                    </td>
                    <td className="px-5 py-3.5 text-xs text-muted-foreground whitespace-nowrap">
                      {item.lastRestocked}
                    </td>
                    <td className="px-5 py-3.5">
                      <button
                        onClick={() => {
                          setEditItem(item);
                          setNewStock(item.stock.toString());
                        }}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Restock modal */}
      {editItem && (
        <div
          className="fixed inset-0 bg-foreground/30 z-50 flex items-center justify-center p-4"
          onClick={() => setEditItem(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-background border border-border w-full max-w-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <h3 className="text-sm font-serif">Update Stock</h3>
              <button
                onClick={() => setEditItem(null)}
                className="text-muted-foreground text-xs"
              >
                ✕
              </button>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-xs text-foreground font-medium">
                {editItem.name}
              </p>
              <p className="text-[11px] text-muted-foreground">
                {editItem.sku}
              </p>
              <div>
                <label className="block text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-1.5">
                  New Stock (sq.ft)
                </label>
                <input
                  type="number"
                  value={newStock}
                  onChange={(e) => setNewStock(e.target.value)}
                  className="w-full px-3 py-2.5 border border-border text-xs focus:outline-none focus:border-foreground/40 bg-background"
                />
              </div>
            </div>
            <div className="px-6 pb-6 flex gap-3 justify-end">
              <button
                onClick={() => setEditItem(null)}
                className="px-5 py-2 border border-border text-xs text-muted-foreground hover:text-foreground"
              >
                Cancel
              </button>
              <button
                onClick={() => setEditItem(null)}
                className="px-5 py-2 bg-foreground text-background text-xs hover:bg-foreground/90 transition-colors"
              >
                Update Stock
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminInventory;
