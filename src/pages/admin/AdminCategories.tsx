import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Edit2, Trash2, Tag } from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";

const initialCategories = [
  { id: "1", name: "Floor Tiles", slug: "floor-tiles", count: 42, status: "Active", description: "Premium floor tile collection" },
  { id: "2", name: "Wall Tiles", slug: "wall-tiles", count: 31, status: "Active", description: "Elegant wall tile solutions" },
  { id: "3", name: "Bathroom Tiles", slug: "bathroom-tiles", count: 28, status: "Active", description: "Luxury bathroom surfaces" },
  { id: "4", name: "Kitchen Tiles", slug: "kitchen-tiles", count: 22, status: "Active", description: "Durable kitchen tile options" },
  { id: "5", name: "Outdoor Tiles", slug: "outdoor-tiles", count: 18, status: "Active", description: "Weather-resistant outdoor tiles" },
  { id: "6", name: "Imported Tiles", slug: "imported-tiles", count: 15, status: "Active", description: "Premium imported collections" },
  { id: "7", name: "Vitrified Tiles", slug: "vitrified-tiles", count: 38, status: "Active", description: "High-durability vitrified range" },
  { id: "8", name: "Ceramic Tiles", slug: "ceramic-tiles", count: 24, status: "Active", description: "Classic ceramic tile range" },
  { id: "9", name: "Parking Tiles", slug: "parking-tiles", count: 11, status: "Active", description: "Heavy-duty parking solutions" },
  { id: "10", name: "Living Room Tiles", slug: "living-room-tiles", count: 20, status: "Draft", description: "Sophisticated living space tiles" },
];

type Category = typeof initialCategories[0];

const AdminCategories = () => {
  const [categories, setCategories] = useState(initialCategories);
  const [showModal, setShowModal] = useState(false);
  const [editCat, setEditCat] = useState<Category | null>(null);
  const [form, setForm] = useState({ name: "", slug: "", description: "", status: "Active" });

  const openAdd = () => { setEditCat(null); setForm({ name: "", slug: "", description: "", status: "Active" }); setShowModal(true); };
  const openEdit = (c: Category) => { setEditCat(c); setForm({ name: c.name, slug: c.slug, description: c.description, status: c.status }); setShowModal(true); };
  const handleDelete = (id: string) => setCategories((prev) => prev.filter((c) => c.id !== id));
  const handleSave = () => {
    if (editCat) {
      setCategories((prev) => prev.map((c) => c.id === editCat.id ? { ...c, ...form } : c));
    } else {
      setCategories((prev) => [{ id: Date.now().toString(), count: 0, ...form }, ...prev]);
    }
    setShowModal(false);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-gold mb-1">Management</p>
            <h1 className="text-2xl font-serif text-foreground">Categories</h1>
          </div>
          <button
            onClick={openAdd}
            className="flex items-center gap-2 px-5 py-2.5 bg-foreground text-background text-xs tracking-[0.15em] uppercase font-medium hover:bg-foreground/90 transition-colors"
          >
            <Plus className="w-3.5 h-3.5" /> Add Category
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-background border border-border p-5 group hover:border-foreground/20 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-9 h-9 bg-muted flex items-center justify-center">
                  <Tag className="w-4 h-4 text-muted-foreground" />
                </div>
                <span className={`text-[10px] px-2.5 py-1 border font-medium ${cat.status === "Active" ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-muted text-muted-foreground border-border"}`}>
                  {cat.status}
                </span>
              </div>
              <h3 className="text-sm font-serif text-foreground mb-1">{cat.name}</h3>
              <p className="text-[11px] text-muted-foreground mb-1">{cat.description}</p>
              <p className="text-[10px] text-stone-400 mb-4">{cat.count} products</p>
              <div className="flex items-center gap-3 pt-3 border-t border-border">
                <button onClick={() => openEdit(cat)} className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
                  <Edit2 className="w-3 h-3" /> Edit
                </button>
                <button onClick={() => handleDelete(cat.id)} className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-destructive transition-colors ml-auto">
                  <Trash2 className="w-3 h-3" /> Delete
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-foreground/30 z-50 flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-background border border-border w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <h3 className="text-sm font-serif">{editCat ? "Edit Category" : "Add Category"}</h3>
              <button onClick={() => setShowModal(false)} className="text-muted-foreground hover:text-foreground text-xs">✕</button>
            </div>
            <div className="p-6 space-y-4">
              {[
                { label: "Category Name", key: "name" },
                { label: "Slug", key: "slug" },
                { label: "Description", key: "description" },
              ].map(({ label, key }) => (
                <div key={key}>
                  <label className="block text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-1.5">{label}</label>
                  <input
                    value={(form as any)[key]}
                    onChange={(e) => setForm((prev) => ({ ...prev, [key]: e.target.value }))}
                    className="w-full px-3 py-2.5 bg-background border border-border text-xs focus:outline-none focus:border-foreground/40"
                  />
                </div>
              ))}
              <div>
                <label className="block text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-1.5">Status</label>
                <select
                  value={form.status}
                  onChange={(e) => setForm((prev) => ({ ...prev, status: e.target.value }))}
                  className="w-full px-3 py-2.5 bg-background border border-border text-xs focus:outline-none"
                >
                  <option>Active</option>
                  <option>Draft</option>
                </select>
              </div>
            </div>
            <div className="px-6 pb-6 flex gap-3 justify-end">
              <button onClick={() => setShowModal(false)} className="px-5 py-2 border border-border text-xs text-muted-foreground hover:text-foreground transition-colors">Cancel</button>
              <button onClick={handleSave} className="px-5 py-2 bg-foreground text-background text-xs tracking-wider hover:bg-foreground/90 transition-colors">
                {editCat ? "Save Changes" : "Add Category"}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminCategories;
