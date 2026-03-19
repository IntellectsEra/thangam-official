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
          items: [
            "Bathroom Floor Tiles",
            "Kitchen Floor Tiles",
            "Living Room Floor Tiles",
            "Outdoor Floor Tiles",
            "Balcony Floor Tiles",
            "Terrace Floor Tiles",
            "Drawing Room Floor Tiles",
            "Dining Room Floor Tiles",
            "Hallway Floor Tiles",
            "Pooja Room Floor Tiles",
            "Porch Floor Tiles",
            "Parking Floor Tiles",
          ],
        },
        {
          title: "By Size",
          items: [
            "600×600 mm",
            "600×1200 mm",
            "800×800 mm",
            "1200×1800 mm",
            "800×2400 mm",
          ],
        },
        {
          title: "By Design",
          items: [
            "Marble Finish",
            "Wooden Finish",
            "Terrazzo",
            "Moroccan",
            "3D Pattern",
            "Geometric",
            "Onyx",
            "Stone",
          ],
        },
        {
          title: "By Type",
          items: [
            "Vitrified",
            "Porcelain",
            "Ceramic",
            "Double Charge",
            "Glazed",
            "Full Body",
          ],
        },
        {
          title: "By Color",
          items: [
            "White",
            "Beige",
            "Grey",
            "Brown",
            "Black",
            "Blue",
            "Green",
            "Gold",
          ],
        },
      ],
    },
  },
  {
    label: "Wall Tiles",
    href: "/products?category=wall",
    megaMenu: {
      sections: [
        {
          title: "By Area",
          items: [
            "Bathroom Wall Tiles",
            "Kitchen Backsplash",
            "Living Room Wall Tiles",
            "Bedroom Wall Tiles",
            "Elevation Tiles",
            "Balcony Wall Tiles",
            "Porch Wall Tiles",
            "Terrace Wall Tiles",
            "Outdoor Wall Tiles",
            "Dining Room Wall Tiles",
            "Hallway Wall Tiles",
            "Pooja Room Wall Tiles",
            "Parking Wall Tiles",
          ],
        },
        {
          title: "By Size",
          items: [
            "300×600 mm",
            "300×450 mm",
            "200×600 mm",
            "300×900 mm",
            "600×1200 mm",
          ],
        },
        {
          title: "By Design",
          items: [
            "Marble Look",
            "Stone Look",
            "Floral",
            "Geometric",
            "Textured",
            "Plain",
            "Mosaic",
          ],
        },
        {
          title: "By Type",
          items: ["Ceramic", "Porcelain", "Vitrified", "Glazed"],
        },
      ],
    },
  },
  {
    label: "Bathroom Tiles",
    href: "/products?category=bathroom",
    megaMenu: {
      sections: [
        {
          title: "By Type",
          items: [
            "Floor Tiles",
            "Wall Tiles",
            "Accent Tiles",
            "Shower Tiles",
            "Border Tiles",
          ],
        },
        {
          title: "By Style",
          items: ["Modern", "Classic", "Rustic", "Minimalist", "Luxury"],
        },
        {
          title: "By Material",
          items: [
            "Porcelain",
            "Ceramic",
            "Vitrified",
            "Natural Stone",
            "Glass Mosaic",
          ],
        },
        {
          title: "By Color",
          items: ["White", "Beige", "Grey", "Blue", "Green", "Pattern"],
        },
      ],
    },
  },
  {
    label: "Kitchen Tiles",
    href: "/products?category=kitchen",
    megaMenu: {
      sections: [
        {
          title: "By Type",
          items: [
            "Backsplash Tiles",
            "Floor Tiles",
            "Counter Tiles",
            "Wall Tiles",
          ],
        },
        {
          title: "By Style",
          items: ["Modern", "Farmhouse", "Industrial", "Mediterranean"],
        },
        {
          title: "By Material",
          items: ["Porcelain", "Ceramic", "Subway", "Mosaic", "Natural Stone"],
        },
      ],
    },
  },
  {
    label: "Living Room",
    href: "/products?category=living",
    megaMenu: {
      sections: [
        {
          title: "By Type",
          items: [
            "Ceramic Living Room Tiles",
            "Vitrified Living Room Tiles",
            "Glass Highlighter Living Room Tiles",
            "Printed Living Room Tiles",
            "Designer Living Room Tiles",
            "Digital Living Room Tiles",
            "Porcelain Living Room Tiles",
            "Glazed Vitrified Living Room Tiles",
            "Double Charge Vitrified Living Room Tiles",
            "Full Body Vitrified Living Room Tiles",
          ],
        },
        {
          title: "By Finish",
          items: [
            "Anti Skid Living Room Tiles",
            "Glossy Living Room Tiles",
            "Matt Living Room Tiles",
            "Rustic Living Room Tiles",
            "Polished Living Room Tiles",
          ],
        },
        {
          title: "By Area",
          items: [
            "Living Room Floor Tiles",
            "Living Room Wall Tiles",
            "Drawing Room Tiles",
            "Drawing Room Floor Tiles",
            "Dining Room Tiles",
            "Dining Room Floor Tiles",
            "Dining Room Wall Tiles",
            "Hallway Tiles",
            "Hallway Floor Tiles",
            "Hallway Wall Tiles",
            "Pooja Room Tiles",
            "Pooja Room Wall Tiles",
            "Pooja Room Floor Tiles",
            "Bedroom Tiles",
            "Bedroom Wall Tiles",
            "Bedroom Floor Tiles",
          ],
        },
        {
          title: "By Size",
          items: [
            "2x2 Living Room Tiles",
            "2x4 Living Room Tiles",
            "800×1600 mm Living Room Tiles",
            "1200×1800 mm Living Room Tiles",
            "800×3000 mm Living Room Tiles",
            "800×2400 mm Living Room Tiles",
            "800×800 mm Living Room Tiles",
          ],
        },
      ],
    },
  },
  {
    label: "Outdoor Tiles",
    href: "/products?category=outdoor",
    megaMenu: {
      sections: [
        {
          title: "By Area",
          items: [
            "Balcony Tiles",
            "Elevation Tiles",
            "Terrace Tiles",
            "Paving Tiles",
            "Garden Tiles",
            "Pathway Tiles",
            "Porch Tiles",
            "Sitout Passage Tiles",
            "Outdoor Wall Tiles",
            "Outdoor Floor Tiles",
            "Balcony Wall Tiles",
            "Balcony Floor Tiles",
            "Porch Wall Tiles",
            "Porch Floor Tiles",
            "Outdoor Parking Tiles",
            "Terrace Wall Tiles",
            "Terrace Floor Tiles",
          ],
        },
        {
          title: "By Type",
          items: [
            "Ceramic Outdoor Tiles",
            "Vitrified Outdoor Tiles",
            "Cool Terrace Tiles",
            "Porcelain Outdoor Tiles",
            "Ceramic Elevation Tiles",
            "Ceramic Terrace Tiles",
            "Vitrified Terrace Tiles",
          ],
        },
        {
          title: "By Size",
          items: [
            "1x1 Outdoor Tiles",
            "2x2 Outdoor Tiles",
            "2x4 Outdoor Tiles",
            "300×450 mm Outdoor Tiles",
            "300×600 mm Outdoor Tiles",
            "400×400 mm Outdoor Tiles",
            "500×500 mm Outdoor Tiles",
          ],
        },
        {
          title: "By Finish",
          items: [
            "Anti Skid Outdoor Tiles",
            "Anti Skid Terrace Tiles",
            "Rustic Outdoor Tiles",
            "Glossy Elevation Tiles",
          ],
        },
      ],
    },
  },
  {
    label: "Parking Tiles",
    href: "/products?category=parking",
    megaMenu: {
      sections: [
        {
          title: "By Area",
          items: [
            "Parking Wall Tiles",
            "Parking Floor Tiles",
            "Outdoor Parking Tiles",
          ],
        },
        {
          title: "By Finish",
          items: [
            "Anti Skid Parking Tiles",
            "Matt Parking Tiles",
            "Rustic Parking Tiles",
          ],
        },
        {
          title: "By Size",
          items: [
            "1x1 Parking Tiles",
            "2x2 Parking Tiles",
            "400×400 mm Parking Tiles",
            "500×500 mm Parking Tiles",
          ],
        },
        {
          title: "By Type",
          items: [
            "Ceramic Parking Tiles",
            "Vitrified Parking Tiles",
            "Digital Parking Tiles",
            "Designer Parking Tiles",
            "Full Body Vitrified Parking Tiles",
            "Porcelain Parking Tiles",
          ],
        },
      ],
    },
  },
  {
    label: "Ceramic Tiles",
    href: "/products?category=ceramic",
    megaMenu: {
      sections: [
        {
          title: "By Area",
          items: [
            "Ceramic Floor Tiles",
            "Ceramic Wall Tiles",
            "Ceramic Bathroom Tiles",
            "Ceramic Kitchen Tiles",
            "Ceramic Living Room Tiles",
            "Ceramic Outdoor Tiles",
            "Ceramic Parking Tiles",
          ],
        },
        {
          title: "By Finish",
          items: [
            "Anti Skid Ceramic Tiles",
            "Glossy Ceramic Tiles",
            "Matt Ceramic Tiles",
            "Rustic Ceramic Tiles",
          ],
        },
        {
          title: "By Size",
          items: [
            "1x1 Ceramic Tiles",
            "2x2 Ceramic Tiles",
            "300×450 mm Ceramic Tiles",
            "300×600 mm Ceramic Tiles",
            "400×400 mm Ceramic Tiles",
            "Small Ceramic Tiles",
            "Large Ceramic Tiles",
          ],
        },
        {
          title: "By Color",
          items: [
            "White Ceramic Tiles",
            "Grey Ceramic Tiles",
            "Beige Ceramic Tiles",
            "Black Ceramic Tiles",
            "Blue Ceramic Tiles",
            "Brown Ceramic Tiles",
            "Gold Ceramic Tiles",
            "Green Ceramic Tiles",
            "Red Ceramic Tiles",
          ],
        },
      ],
    },
  },
  {
    label: "Vitrified Tiles",
    href: "/products?category=vitrified",
    megaMenu: {
      sections: [
        {
          title: "By Area",
          items: [
            "Vitrified Floor Tiles",
            "Vitrified Wall Tiles",
            "Vitrified Bathroom Tiles",
            "Vitrified Kitchen Tiles",
            "Vitrified Living Room Tiles",
            "Vitrified Outdoor Tiles",
            "Vitrified Parking Tiles",
          ],
        },
        {
          title: "By Size",
          items: [
            "1x1 Vitrified Tiles",
            "2x2 Vitrified Tiles",
            "2x4 Vitrified Tiles",
            "400×400 mm Vitrified Tiles",
            "800×800 mm Vitrified Tiles",
            "800×1600 mm Vitrified Tiles",
            "800×2400 mm Vitrified Tiles",
            "800×3000 mm Vitrified Tiles",
            "1200×1800 mm Vitrified Tiles",
            "1200×2400 mm Vitrified Tiles",
          ],
        },
        {
          title: "By Finish",
          items: [
            "Anti Skid Vitrified Tiles",
            "Glossy Vitrified Tiles",
            "Matt Vitrified Tiles",
            "Rustic Vitrified Tiles",
            "Hi-Gloss Vitrified Tiles",
            "Metallic Vitrified Tiles",
          ],
        },
        {
          title: "By Color",
          items: [
            "White Vitrified Tiles",
            "Black Vitrified Tiles",
            "Grey Vitrified Tiles",
            "Beige Vitrified Tiles",
            "Blue Vitrified Tiles",
            "Brown Vitrified Tiles",
            "Green Vitrified Tiles",
            "Ivory Vitrified Tiles",
            "Red Vitrified Tiles",
            "Cream Vitrified Tiles",
          ],
        },
      ],
    },
  },
  {
    label: "Natural Stone & Cladding",
    href: "/products?category=stone-cladding",
    megaMenu: {
      sections: [
        {
          title: "Stone & Brick Cladding",
          items: [
            "Natural Stone Cladding",
            "Brick Cladding",
            "Red Brick Cladding",
            "White Brick Cladding",
            "Stone Murals",
          ],
        },
        {
          title: "God Picture Tiles & Stones",
          items: [
            "Buddha Tiles and Stones",
            "Krishna Tiles and Stones",
            "Ganesha Tiles and Stones",
            "Venkateshwara Tiles and Stones",
          ],
        },
        {
          title: "Decorative Stones",
          items: [
            "Pebble Stones",
            "Black Pebble Stones",
            "White Pebble Stones",
          ],
        },
      ],
    },
  },
];
