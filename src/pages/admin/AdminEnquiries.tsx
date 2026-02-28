import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Eye, MessageSquare, CheckCircle, Clock } from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";

const enquiries = [
  {
    id: "ENQ-0042",
    name: "Rohit Agarwal",
    email: "rohit@mail.com",
    phone: "+91 98765 11001",
    product: "Calacatta Bianco",
    message:
      "I need 500 sq.ft for a living room project. Please share bulk pricing and availability.",
    status: "New",
    date: "28 Feb 2026",
    type: "Bulk Order",
  },
  {
    id: "ENQ-0041",
    name: "Sunita Verma",
    email: "sunita@mail.com",
    phone: "+91 98765 22002",
    product: "Miele Onyx",
    message:
      "Looking for samples for a hotel lobby project. Can you courier them to Mumbai?",
    status: "In Progress",
    date: "27 Feb 2026",
    type: "Sample Request",
  },
  {
    id: "ENQ-0040",
    name: "Vikram Constructions",
    email: "vikram@mail.com",
    phone: "+91 98765 33003",
    product: "Statuario Supremo",
    message:
      "We need 2000 sq.ft for a commercial project in Bangalore. Timeline: 2 months.",
    status: "Replied",
    date: "27 Feb 2026",
    type: "Bulk Order",
  },
  {
    id: "ENQ-0039",
    name: "Anita Desai",
    email: "anita@mail.com",
    phone: "+91 98765 44004",
    product: "Venezia Terrazzo",
    message:
      "Can this tile be used for outdoor areas? What is the slip resistance rating?",
    status: "Replied",
    date: "26 Feb 2026",
    type: "Technical Query",
  },
  {
    id: "ENQ-0038",
    name: "M.K. Interiors",
    email: "mk@mail.com",
    phone: "+91 98765 55005",
    product: "Nero Marquina",
    message: "Need a quotation for a 300 sq.ft bathroom renovation project.",
    status: "New",
    date: "26 Feb 2026",
    type: "Quotation",
  },
  {
    id: "ENQ-0037",
    name: "Preethi Nair",
    email: "preethi@mail.com",
    phone: "+91 98765 66006",
    product: "Fez Artisan",
    message:
      "Is this tile available in white and beige combination for kitchen backsplash?",
    status: "Closed",
    date: "25 Feb 2026",
    type: "Technical Query",
  },
];

const statusColors: Record<string, string> = {
  New: "bg-blue-50 text-blue-700 border-blue-200",
  "In Progress": "bg-amber-50 text-amber-700 border-amber-200",
  Replied: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Closed: "bg-stone-100 text-stone-600 border-stone-200",
};

const AdminEnquiries = () => {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [selected, setSelected] = useState<(typeof enquiries)[0] | null>(null);

  const filtered = enquiries.filter((e) => {
    const matchSearch =
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.product.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === "All" || e.status === filterStatus;
    return matchSearch && matchStatus;
  });

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-gold mb-1">
            Management
          </p>
          <h1 className="text-2xl font-serif text-foreground">Enquiries</h1>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["New", "In Progress", "Replied", "Closed"].map((s) => (
            <button
              key={s}
              onClick={() => setFilterStatus(filterStatus === s ? "All" : s)}
              className={`bg-background border p-4 text-left transition-colors ${filterStatus === s ? "border-foreground" : "border-border hover:border-foreground/30"}`}
            >
              <p className="text-xl font-serif text-foreground">
                {enquiries.filter((e) => e.status === s).length}
              </p>
              <p className="text-[10px] tracking-wider text-muted-foreground mt-1">
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
              placeholder="Search by name or product..."
              className="w-full pl-9 pr-4 py-2.5 bg-background border border-border text-xs focus:outline-none focus:border-foreground/40"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="bg-background border border-border text-xs px-3 py-2.5 focus:outline-none"
          >
            {["All", "New", "In Progress", "Replied", "Closed"].map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          <p className="text-xs text-muted-foreground">
            {filtered.length} enquiries
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-3">
          {filtered.map((enq, i) => (
            <motion.div
              key={enq.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-background border border-border p-5 hover:border-foreground/20 transition-colors cursor-pointer"
              onClick={() => setSelected(enq)}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-medium text-muted-foreground">
                      {enq.id}
                    </span>
                    <span
                      className={`text-[10px] px-2 py-0.5 border font-medium ${statusColors[enq.status]}`}
                    >
                      {enq.status}
                    </span>
                    <span className="text-[10px] text-muted-foreground bg-muted px-2 py-0.5">
                      {enq.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mb-2">
                    <p className="text-sm font-medium text-foreground">
                      {enq.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{enq.email}</p>
                    <p className="text-xs text-muted-foreground hidden sm:block">
                      {enq.phone}
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">
                    Re: <span className="text-foreground">{enq.product}</span>
                  </p>
                  <p className="text-xs text-muted-foreground truncate max-w-xl">
                    {enq.message}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2 flex-shrink-0">
                  <p className="text-[10px] text-muted-foreground whitespace-nowrap">
                    {enq.date}
                  </p>
                  <Eye className="w-4 h-4 text-muted-foreground" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
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
              <h3 className="text-sm font-serif">Enquiry {selected.id}</h3>
              <button
                onClick={() => setSelected(null)}
                className="text-muted-foreground text-xs"
              >
                ✕
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {[
                  ["Name", selected.name],
                  ["Email", selected.email],
                  ["Phone", selected.phone],
                  ["Product", selected.product],
                  ["Type", selected.type],
                  ["Date", selected.date],
                ].map(([l, v]) => (
                  <div key={l}>
                    <p className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-1">
                      {l}
                    </p>
                    <p className="text-xs text-foreground">{v}</p>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-2">
                  Message
                </p>
                <p className="text-xs text-foreground leading-relaxed bg-muted/30 p-3 border border-border">
                  {selected.message}
                </p>
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-1.5">
                  Reply
                </label>
                <textarea
                  rows={3}
                  placeholder="Type your reply..."
                  className="w-full px-3 py-2.5 border border-border text-xs focus:outline-none focus:border-foreground/40 bg-background resize-none"
                />
              </div>
            </div>
            <div className="px-6 pb-6 flex gap-3 justify-end">
              <select className="px-3 py-2 border border-border text-xs bg-background focus:outline-none">
                <option>Update Status</option>
                {["In Progress", "Replied", "Closed"].map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
              <button
                onClick={() => setSelected(null)}
                className="px-5 py-2 bg-foreground text-background text-xs hover:bg-foreground/90 transition-colors"
              >
                Send Reply
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminEnquiries;
