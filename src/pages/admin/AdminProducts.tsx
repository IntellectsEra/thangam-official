import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Search, Edit2, Trash2, Eye, Filter } from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";
import { products as initialProducts, Product } from "@/data/products";

const AdminProducts = () => {
  const [products, setProducts] = useState(initialProducts);
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [editProduct, setEditProduct] = useState<Product | null>(null);
  const [form, setForm] = useState<Partial<Product>>({});

  const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];
  const filtered = products.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.sku.toLowerCase().includes(search.toLowerCase());
    const matchCat = filterCategory === "All" || p.category === filterCategory;
    return matchSearch && matchCat;
  });

  const openAdd = () => { setEditProduct(null); setForm({}); setShowModal(true); };
  const openEdit = (p: Product) => { setEditProduct(p); setForm(p); setShowModal(true); };
  const handleDelete = (id: string) => setProducts((prev) => prev.filter((p) => p.id !== id));
  const handleSave = () => {
    if (editProduct) {
      setProducts((prev) => prev.map((p) => p.id === editProduct.id ? { ...p, ...form } as Product : p));
    } else {
      const newProduct: Product = {
        id: Date.now().toString(),
        name: form.name || "New Product",
        category: form.category || "Floor Tiles",
        size: form.size || "",
        finish: form.finish || "",
        type: form.type || "",
        color: form.color || "",
        price: form.price || "",
        image: "",
        sku: form.sku || `SKU-${Date.now()}`,
        material: form.material || "",
        application: form.application || "",
        inStock: form.inStock ?? true,
      };
      setProducts((prev) => [newProduct, ...prev]);
    }
    setShowModal(false);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-gold mb-1">Management</p>
            <h1 className="text-2xl font-serif text-foreground">Products</h1>
          </div>
          <button
            onClick={openAdd}
            className="flex items-center gap-2 px-5 py-2.5 bg-foreground text-background text-xs tracking-[0.15em] uppercase font-medium hover:bg-foreground/90 transition-colors"
          >
            <Plus className="w-3.5 h-3.5" /> Add Product
          </button>
        </div>

        {/* Filters */}
        <div className="bg-background border border-border p-4 flex flex-wrap gap-4 items-center">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name or SKU..."
              className="w-full pl-9 pr-4 py-2.5 bg-background border border-border text-xs text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground/40"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-3.5 h-3.5 text-muted-foreground" />
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="bg-background border border-border text-xs px-3 py-2.5 text-foreground focus:outline-none"
            >
              {categories.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>
          <p className="text-xs text-muted-foreground">{filtered.length} products</p>
        </div>

        {/* Table */}
        <div className="bg-background border border-border overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                {["Product", "SKU", "Category", "Size", "Finish", "Price", "Stock", "Actions"].map((h) => (
                  <th key={h} className="px-5 py-3 text-left text-[10px] tracking-[0.15em] uppercase text-muted-foreground font-normal whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((product, i) => (
                <motion.tr
                  key={product.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.03 }}
                  className="border-b border-border/50 hover:bg-muted/20 transition-colors"
                >
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      {product.image && (
                        <div className="w-10 h-10 overflow-hidden flex-shrink-0 bg-muted">
                          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                        </div>
                      )}
                      <span className="text-xs font-medium text-foreground">{product.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-xs text-muted-foreground">{product.sku}</td>
                  <td className="px-5 py-3.5 text-xs text-foreground">{product.category}</td>
                  <td className="px-5 py-3.5 text-xs text-muted-foreground">{product.size}</td>
                  <td className="px-5 py-3.5 text-xs text-muted-foreground">{product.finish}</td>
                  <td className="px-5 py-3.5 text-xs font-medium text-foreground">{product.price}</td>
                  <td className="px-5 py-3.5">
                    <span className={`text-[10px] px-2.5 py-1 border font-medium ${product.inStock ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-destructive/10 text-destructive border-destructive/20"}`}>
                      {product.inStock ? "In Stock" : "Out of Stock"}
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-2">
                      <button onClick={() => openEdit(product)} className="text-muted-foreground hover:text-foreground transition-colors">
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button onClick={() => handleDelete(product.id)} className="text-muted-foreground hover:text-destructive transition-colors">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-foreground/30 z-50 flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-background border border-border w-full max-w-lg max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <h3 className="text-sm font-serif">{editProduct ? "Edit Product" : "Add Product"}</h3>
              <button onClick={() => setShowModal(false)} className="text-muted-foreground hover:text-foreground text-xs">✕</button>
            </div>
            <div className="p-6 grid grid-cols-2 gap-4">
              {[
                { label: "Product Name", key: "name" },
                { label: "SKU", key: "sku" },
                { label: "Category", key: "category" },
                { label: "Size (mm)", key: "size" },
                { label: "Finish", key: "finish" },
                { label: "Type", key: "type" },
                { label: "Color", key: "color" },
                { label: "Price", key: "price" },
                { label: "Material", key: "material" },
                { label: "Application", key: "application" },
              ].map(({ label, key }) => (
                <div key={key} className="col-span-2 sm:col-span-1">
                  <label className="block text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-1.5">{label}</label>
                  <input
                    value={(form as any)[key] || ""}
                    onChange={(e) => setForm((prev) => ({ ...prev, [key]: e.target.value }))}
                    className="w-full px-3 py-2 bg-background border border-border text-xs text-foreground focus:outline-none focus:border-foreground/40"
                  />
                </div>
              ))}
              <div className="col-span-2 flex items-center gap-2">
                <input
                  type="checkbox"
                  id="inStock"
                  checked={form.inStock ?? true}
                  onChange={(e) => setForm((prev) => ({ ...prev, inStock: e.target.checked }))}
                  className="w-3.5 h-3.5"
                />
                <label htmlFor="inStock" className="text-xs text-foreground">In Stock</label>
              </div>
            </div>
            <div className="px-6 pb-6 flex gap-3 justify-end">
              <button onClick={() => setShowModal(false)} className="px-5 py-2 border border-border text-xs text-muted-foreground hover:text-foreground transition-colors">
                Cancel
              </button>
              <button onClick={handleSave} className="px-5 py-2 bg-foreground text-background text-xs tracking-wider hover:bg-foreground/90 transition-colors">
                {editProduct ? "Save Changes" : "Add Product"}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminProducts;
