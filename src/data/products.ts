export interface Product {
  id: string;
  name: string;
  category: string;
  size: string;
  finish: string;
  type: string;
  color: string;
  price: string;
  image: string;
  sku: string;
  material: string;
  application: string;
  inStock: boolean;
}

import tileMarbleWhite from "@/assets/tile-marble-white.jpg";
import tileStoneGrey from "@/assets/tile-stone-grey.jpg";
import tileWood from "@/assets/tile-wood.jpg";
import tileTerrazzo from "@/assets/tile-terrazzo.jpg";
import tileOnyx from "@/assets/tile-onyx.jpg";
import tileBlackMarble from "@/assets/tile-black-marble.jpg";
import tileMoroccan from "@/assets/tile-moroccan.jpg";

export const products: Product[] = [
  {
    id: "1",
    name: "Calacatta Bianco",
    category: "Floor Tiles",
    size: "1200×1800 mm",
    finish: "Polished",
    type: "Porcelain",
    color: "White",
    price: "₹4,200/sq.ft",
    image: tileMarbleWhite,
    sku: "CAL-BIA-1218",
    material: "Premium Porcelain",
    application: "Floor, Wall",
    inStock: true,
  },
  {
    id: "2",
    name: "Grigio Imperiale",
    category: "Floor Tiles",
    size: "800×800 mm",
    finish: "Matt",
    type: "Vitrified",
    color: "Grey",
    price: "₹2,800/sq.ft",
    image: tileStoneGrey,
    sku: "GRI-IMP-0808",
    material: "Vitrified",
    application: "Floor",
    inStock: true,
  },
  {
    id: "3",
    name: "Rovere Naturale",
    category: "Floor Tiles",
    size: "200×1200 mm",
    finish: "Wood Textured",
    type: "Porcelain",
    color: "Brown",
    price: "₹3,100/sq.ft",
    image: tileWood,
    sku: "ROV-NAT-2012",
    material: "Porcelain",
    application: "Floor",
    inStock: true,
  },
  {
    id: "4",
    name: "Venezia Terrazzo",
    category: "Wall Tiles",
    size: "600×600 mm",
    finish: "Polished",
    type: "Porcelain",
    color: "White",
    price: "₹3,500/sq.ft",
    image: tileTerrazzo,
    sku: "VEN-TER-0606",
    material: "Porcelain",
    application: "Floor, Wall",
    inStock: true,
  },
  {
    id: "5",
    name: "Miele Onyx",
    category: "Imported Tiles",
    size: "800×2400 mm",
    finish: "High Gloss",
    type: "Porcelain",
    color: "Gold",
    price: "₹6,800/sq.ft",
    image: tileOnyx,
    sku: "MIE-ONX-0824",
    material: "Imported Porcelain",
    application: "Wall, Feature Wall",
    inStock: true,
  },
  {
    id: "6",
    name: "Nero Marquina",
    category: "Floor Tiles",
    size: "600×1200 mm",
    finish: "Polished",
    type: "Porcelain",
    color: "Black",
    price: "₹3,900/sq.ft",
    image: tileBlackMarble,
    sku: "NER-MAR-0612",
    material: "Porcelain",
    application: "Floor, Wall",
    inStock: true,
  },
  {
    id: "7",
    name: "Fez Artisan",
    category: "Wall Tiles",
    size: "300×300 mm",
    finish: "Glazed",
    type: "Ceramic",
    color: "Blue",
    price: "₹2,200/sq.ft",
    image: tileMoroccan,
    sku: "FEZ-ART-0303",
    material: "Ceramic",
    application: "Wall, Backsplash",
    inStock: true,
  },
  {
    id: "8",
    name: "Statuario Supremo",
    category: "Imported Tiles",
    size: "1200×2400 mm",
    finish: "Book Match",
    type: "Porcelain",
    color: "White",
    price: "₹7,500/sq.ft",
    image: tileMarbleWhite,
    sku: "STA-SUP-1224",
    material: "Premium Imported",
    application: "Floor, Feature Wall",
    inStock: false,
  },
];
