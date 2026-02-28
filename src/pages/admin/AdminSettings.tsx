import { useState } from "react";
import { motion } from "framer-motion";
import { Save, Lock, Globe, Bell, Store } from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";

const tabs = [
  { label: "Store", icon: Store },
  { label: "Notifications", icon: Bell },
  { label: "SEO", icon: Globe },
  { label: "Security", icon: Lock },
];

const AdminSettings = () => {
  const [activeTab, setActiveTab] = useState("Store");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-gold mb-1">
            Configuration
          </p>
          <h1 className="text-2xl font-serif text-foreground">Settings</h1>
        </div>

        <div className="flex gap-6">
          {/* Sidebar tabs */}
          <div className="w-48 flex-shrink-0">
            <div className="bg-background border border-border overflow-hidden">
              {tabs.map((tab) => (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(tab.label)}
                  className={`flex items-center gap-3 w-full px-4 py-3.5 text-xs transition-colors border-b border-border last:border-0 ${activeTab === tab.label ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground hover:bg-muted/40"}`}
                >
                  <tab.icon className="w-3.5 h-3.5" />
                  <span className="tracking-wider uppercase font-medium">
                    {tab.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 bg-background border border-border"
          >
            <div className="px-6 py-4 border-b border-border">
              <h3 className="text-sm font-serif">{activeTab} Settings</h3>
            </div>

            <div className="p-6">
              {activeTab === "Store" && (
                <div className="space-y-5 max-w-lg">
                  {[
                    {
                      label: "Brand Name",
                      placeholder: "Thangam Ceramics",
                      type: "text",
                    },
                    {
                      label: "Contact Email",
                      placeholder: "contact@Thangam Ceramics.com",
                      type: "email",
                    },
                    {
                      label: "Phone Number",
                      placeholder: "+91 98765 43210",
                      type: "tel",
                    },
                    {
                      label: "Address",
                      placeholder: "Mumbai, Maharashtra, India",
                      type: "text",
                    },
                    {
                      label: "GST Number",
                      placeholder: "27XXXXX1234X1ZX",
                      type: "text",
                    },
                  ].map(({ label, placeholder, type }) => (
                    <div key={label}>
                      <label className="block text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-1.5">
                        {label}
                      </label>
                      <input
                        type={type}
                        placeholder={placeholder}
                        className="w-full px-3 py-2.5 border border-border text-xs bg-background focus:outline-none focus:border-foreground/40"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-1.5">
                      Currency
                    </label>
                    <select className="w-full px-3 py-2.5 border border-border text-xs bg-background focus:outline-none">
                      <option>Indian Rupee (₹)</option>
                      <option>US Dollar ($)</option>
                      <option>Euro (€)</option>
                    </select>
                  </div>
                </div>
              )}

              {activeTab === "Notifications" && (
                <div className="space-y-4 max-w-lg">
                  {[
                    {
                      label: "New Order Alerts",
                      desc: "Get notified when a new order is placed",
                    },
                    {
                      label: "Low Stock Alerts",
                      desc: "Alert when product stock falls below threshold",
                    },
                    {
                      label: "New Enquiry Alerts",
                      desc: "Alert on new customer enquiries",
                    },
                    {
                      label: "Weekly Sales Report",
                      desc: "Receive a weekly sales summary via email",
                    },
                    {
                      label: "Product Reviews",
                      desc: "Notify on new product reviews",
                    },
                  ].map(({ label, desc }) => (
                    <div
                      key={label}
                      className="flex items-center justify-between py-3 border-b border-border/50"
                    >
                      <div>
                        <p className="text-xs font-medium text-foreground">
                          {label}
                        </p>
                        <p className="text-[11px] text-muted-foreground mt-0.5">
                          {desc}
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 bg-border peer-checked:bg-foreground transition-colors relative">
                          <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-background transition-transform peer-checked:translate-x-4" />
                        </div>
                      </label>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "SEO" && (
                <div className="space-y-5 max-w-lg">
                  {[
                    {
                      label: "Site Title",
                      placeholder: "Thangam Ceramics — Luxury Tiles & Surfaces",
                    },
                    {
                      label: "Meta Description",
                      placeholder:
                        "Luxury tiles curated for architects and designers...",
                      multiline: true,
                    },
                    {
                      label: "Keywords",
                      placeholder:
                        "luxury tiles, marble tiles, floor tiles India",
                    },
                    {
                      label: "OG Image URL",
                      placeholder: "https://Thangam Ceramics.com/og-image.jpg",
                    },
                    {
                      label: "Google Analytics ID",
                      placeholder: "G-XXXXXXXXXX",
                    },
                  ].map(({ label, placeholder, multiline }) => (
                    <div key={label}>
                      <label className="block text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-1.5">
                        {label}
                      </label>
                      {multiline ? (
                        <textarea
                          rows={3}
                          placeholder={placeholder}
                          className="w-full px-3 py-2.5 border border-border text-xs bg-background focus:outline-none focus:border-foreground/40 resize-none"
                        />
                      ) : (
                        <input
                          placeholder={placeholder}
                          className="w-full px-3 py-2.5 border border-border text-xs bg-background focus:outline-none focus:border-foreground/40"
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "Security" && (
                <div className="space-y-5 max-w-lg">
                  <div className="p-4 bg-muted/30 border border-border">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Change admin account credentials. Use a strong password of
                      at least 12 characters.
                    </p>
                  </div>
                  {[
                    { label: "Current Password", type: "password" },
                    { label: "New Password", type: "password" },
                    { label: "Confirm New Password", type: "password" },
                  ].map(({ label, type }) => (
                    <div key={label}>
                      <label className="block text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-1.5">
                        {label}
                      </label>
                      <input
                        type={type}
                        className="w-full px-3 py-2.5 border border-border text-xs bg-background focus:outline-none focus:border-foreground/40"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-1.5">
                      Admin Email
                    </label>
                    <input
                      defaultValue="admin@Thangam Ceramics.com"
                      className="w-full px-3 py-2.5 border border-border text-xs bg-background focus:outline-none focus:border-foreground/40"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="px-6 pb-6">
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-6 py-2.5 bg-foreground text-background text-xs tracking-[0.15em] uppercase font-medium hover:bg-foreground/90 transition-colors"
              >
                <Save className="w-3.5 h-3.5" />
                {saved ? "Saved!" : "Save Changes"}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminSettings;
