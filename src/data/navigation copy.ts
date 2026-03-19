export interface NavSubCategory {
  title: string;
  items: string[];
}

export interface NavCategory {
  label: string;
  href: string;
  megaMenu?: {
    sections: NavSubCategory[];
    featured?: { name: string; image: string; href: string }[];
  };
}

export const navigationData: NavCategory[] = [
  {
    label: "All Tiles",
    href: "/products",
  },
  {
    label: "Floor Tiles",
    href: "/products?category=floor",
    megaMenu: {
      sections: [
        {
          title: "By Area",
          items: ["Bathroom Floor Tiles", "Kitchen Floor Tiles", "Living Room Floor Tiles", "Outdoor Floor Tiles", "Balcony Floor Tiles", "Terrace Floor Tiles", "Commercial Floor Tiles"],
        },
        {
          title: "By Size",
          items: ["600×600 mm", "600×1200 mm", "800×800 mm", "1200×1800 mm", "800×2400 mm"],
        },
        {
          title: "By Design",
          items: ["Marble Finish", "Wooden Finish", "Terrazzo", "Moroccan", "3D Pattern", "Geometric", "Onyx", "Stone"],
        },
        {
          title: "By Type",
          items: ["Vitrified", "Porcelain", "Ceramic", "Double Charge", "Glazed", "Full Body"],
        },
        {
          title: "By Color",
          items: ["White", "Beige", "Grey", "Brown", "Black", "Blue", "Green", "Gold"],
        },
      ],
    },
  },
  {
    label: "Wall Tiles",
    href: "/products?category=wall",
    megaMenu: {
      sections: [
        { title: "By Area", items: ["Bathroom Wall Tiles", "Kitchen Backsplash", "Living Room Wall Tiles", "Bedroom Wall Tiles", "Elevation Tiles"] },
        { title: "By Size", items: ["300×600 mm", "300×450 mm", "200×600 mm", "300×900 mm", "600×1200 mm"] },
        { title: "By Design", items: ["Marble Look", "Stone Look", "Floral", "Geometric", "Textured", "Plain", "Mosaic"] },
        { title: "By Type", items: ["Ceramic", "Porcelain", "Vitrified", "Glazed"] },
      ],
    },
  },
  {
    label: "Bathroom Tiles",
    href: "/products?category=bathroom",
    megaMenu: {
      sections: [
        { title: "By Type", items: ["Floor Tiles", "Wall Tiles", "Accent Tiles", "Shower Tiles", "Border Tiles"] },
        { title: "By Style", items: ["Modern", "Classic", "Rustic", "Minimalist", "Luxury"] },
        { title: "By Material", items: ["Porcelain", "Ceramic", "Natural Stone", "Glass Mosaic"] },
        { title: "By Color", items: ["White", "Beige", "Grey", "Blue", "Green", "Pattern"] },
      ],
    },
  },
  {
    label: "Kitchen Tiles",
    href: "/products?category=kitchen",
    megaMenu: {
      sections: [
        { title: "By Type", items: ["Backsplash Tiles", "Floor Tiles", "Counter Tiles", "Wall Tiles"] },
        { title: "By Style", items: ["Modern", "Farmhouse", "Industrial", "Mediterranean"] },
        { title: "By Material", items: ["Porcelain", "Ceramic", "Subway", "Mosaic", "Natural Stone"] },
      ],
    },
  },
  {
    label: "Living Room",
    href: "/products?category=living",
  },
  {
    label: "Outdoor Tiles",
    href: "/products?category=outdoor",
  },
  {
    label: "Parking Tiles",
    href: "/products?category=parking",
  },
  {
    label: "Ceramic Tiles",
    href: "/products?category=ceramic",
  },
  {
    label: "Vitrified Tiles",
    href: "/products?category=vitrified",
  },
  {
    label: "Imported Tiles",
    href: "/products?category=imported",
  },
];
