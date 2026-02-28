import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, ShoppingCart, AlertTriangle, MessageSquare, Package, CheckCircle, X, Plus } from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";

const initialNotifications = [
  { id: 1, type: "order", title: "New Order Received", message: "Order #PRA-1084 placed by Arjun Mehta for Calacatta Bianco — ₹84,000", time: "5 min ago", read: false },
  { id: 2, type: "alert", title: "Low Stock Alert", message: "Statuario Supremo (STA-SUP-1224) is running low — only 8 sq.ft remaining.", time: "20 min ago", read: false },
  { id: 3, type: "enquiry", title: "New Enquiry", message: "Rohit Agarwal has submitted a bulk pricing enquiry for Calacatta Bianco.", time: "1 hour ago", read: false },
  { id: 4, type: "order", title: "Order Shipped", message: "Order #PRA-1082 for Ravi Constructions has been shipped via Blue Dart.", time: "2 hours ago", read: true },
  { id: 5, type: "alert", title: "Low Stock Alert", message: "Miele Onyx (MIE-ONX-0824) stock below threshold — 12 sq.ft left.", time: "3 hours ago", read: true },
  { id: 6, type: "product", title: "Product Updated", message: "Statuario Supremo status changed to 'Out of Stock' by Admin.", time: "5 hours ago", read: true },
  { id: 7, type: "enquiry", title: "New Enquiry", message: "M.K. Interiors has requested a quotation for Nero Marquina — 300 sq.ft.", time: "Yesterday", read: true },
  { id: 8, type: "order", title: "Order Delivered", message: "Order #PRA-1081 for Nisha Patel has been delivered successfully.", time: "Yesterday", read: true },
];

const typeIcon: Record<string, any> = {
  order: ShoppingCart,
  alert: AlertTriangle,
  enquiry: MessageSquare,
  product: Package,
};
const typeColor: Record<string, string> = {
  order: "text-blue-600 bg-blue-50",
  alert: "text-amber-600 bg-amber-50",
  enquiry: "text-emerald-600 bg-emerald-50",
  product: "text-stone-600 bg-stone-100",
};

const AdminNotifications = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [filter, setFilter] = useState("All");
  const [showCompose, setShowCompose] = useState(false);
  const [compose, setCompose] = useState({ title: "", message: "", type: "order" });

  const markAllRead = () => setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  const markRead = (id: number) => setNotifications((prev) => prev.map((n) => n.id === id ? { ...n, read: true } : n));
  const deleteNotif = (id: number) => setNotifications((prev) => prev.filter((n) => n.id !== id));
  const sendNotification = () => {
    setNotifications((prev) => [{
      id: Date.now(),
      type: compose.type,
      title: compose.title,
      message: compose.message,
      time: "Just now",
      read: false,
    }, ...prev]);
    setShowCompose(false);
    setCompose({ title: "", message: "", type: "order" });
  };

  const types = ["All", "order", "alert", "enquiry", "product"];
  const filtered = notifications.filter((n) => filter === "All" || n.type === filter);
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-gold mb-1">Management</p>
            <h1 className="text-2xl font-serif text-foreground">Notifications</h1>
          </div>
          <div className="flex gap-3">
            {unreadCount > 0 && (
              <button onClick={markAllRead} className="flex items-center gap-2 px-4 py-2.5 border border-border text-xs text-muted-foreground hover:text-foreground transition-colors">
                <CheckCircle className="w-3.5 h-3.5" /> Mark All Read
              </button>
            )}
            <button onClick={() => setShowCompose(true)} className="flex items-center gap-2 px-5 py-2.5 bg-foreground text-background text-xs tracking-[0.15em] uppercase font-medium hover:bg-foreground/90 transition-colors">
              <Plus className="w-3.5 h-3.5" /> Send Notification
            </button>
          </div>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Total", value: notifications.length },
            { label: "Unread", value: unreadCount },
            { label: "Orders", value: notifications.filter(n => n.type === "order").length },
            { label: "Alerts", value: notifications.filter(n => n.type === "alert").length },
          ].map((s) => (
            <div key={s.label} className="bg-background border border-border p-4">
              <p className="text-xl font-serif text-foreground">{s.value}</p>
              <p className="text-[10px] tracking-wider text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Type filters */}
        <div className="flex gap-2 flex-wrap">
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-4 py-2 text-xs border capitalize transition-colors ${filter === t ? "bg-foreground text-background border-foreground" : "border-border text-muted-foreground hover:text-foreground"}`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Notifications list */}
        <div className="space-y-2">
          {filtered.map((notif, i) => {
            const Icon = typeIcon[notif.type];
            return (
              <motion.div
                key={notif.id}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                className={`bg-background border p-4 flex items-start gap-4 transition-colors ${!notif.read ? "border-foreground/20" : "border-border"}`}
              >
                <div className={`w-9 h-9 flex items-center justify-center flex-shrink-0 ${typeColor[notif.type]}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0" onClick={() => markRead(notif.id)}>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <p className={`text-xs font-medium ${!notif.read ? "text-foreground" : "text-muted-foreground"}`}>{notif.title}</p>
                        {!notif.read && <span className="w-1.5 h-1.5 bg-foreground rounded-full flex-shrink-0" />}
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{notif.message}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-[10px] text-muted-foreground whitespace-nowrap">{notif.time}</span>
                      <button onClick={(e) => { e.stopPropagation(); deleteNotif(notif.id); }} className="text-muted-foreground hover:text-destructive transition-colors">
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Compose Modal */}
      {showCompose && (
        <div className="fixed inset-0 bg-foreground/30 z-50 flex items-center justify-center p-4" onClick={() => setShowCompose(false)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-background border border-border w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <h3 className="text-sm font-serif">Send Notification</h3>
              <button onClick={() => setShowCompose(false)} className="text-muted-foreground text-xs">✕</button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-1.5">Type</label>
                <select value={compose.type} onChange={(e) => setCompose(p => ({ ...p, type: e.target.value }))} className="w-full px-3 py-2.5 border border-border text-xs bg-background focus:outline-none">
                  <option value="order">Order</option>
                  <option value="alert">Alert</option>
                  <option value="enquiry">Enquiry</option>
                  <option value="product">Product</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-1.5">Title</label>
                <input value={compose.title} onChange={(e) => setCompose(p => ({ ...p, title: e.target.value }))} className="w-full px-3 py-2.5 border border-border text-xs focus:outline-none focus:border-foreground/40 bg-background" />
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-1.5">Message</label>
                <textarea rows={3} value={compose.message} onChange={(e) => setCompose(p => ({ ...p, message: e.target.value }))} className="w-full px-3 py-2.5 border border-border text-xs focus:outline-none focus:border-foreground/40 bg-background resize-none" />
              </div>
            </div>
            <div className="px-6 pb-6 flex gap-3 justify-end">
              <button onClick={() => setShowCompose(false)} className="px-5 py-2 border border-border text-xs text-muted-foreground hover:text-foreground">Cancel</button>
              <button onClick={sendNotification} className="px-5 py-2 bg-foreground text-background text-xs hover:bg-foreground/90 transition-colors">Send</button>
            </div>
          </motion.div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminNotifications;
