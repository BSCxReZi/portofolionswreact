import VTR from "./VTR.jpg";
import PDU from "./PDU.jpg";
import Switcherman from "./Switcherman.jpg";
import IMG20250929 from "./IMG_20250929_171328.jpg";
import SWIT from "./SWIT.jpg";
import kameramen from "./kameramen.jpg";
import KAmera from "./KAmera.jpg";
import cam3 from "./cam3.jpg";
import CamperVan from "./CamperVan.jpg";
import AudioManDangdut from "./AudioMan Dangdut keliling.jpg";

export interface BroadcastCategory {
  title: string;
  icon: string;
  items: string[];
}

export const broadcastCategories: BroadcastCategory[] = [
  {
    title: "Master Control Room",
    icon: "Monitor",
    items: [
      "Monitoring siaran",
      "VTR",
      "Playout",
      "Switcher",
      "Monitoring signal",
      "Transmission system",
    ],
  },
  {
    title: "Studio",
    icon: "Video",
    items: [
      "Camera operation",
      "Sony PXW-Z190",
      "Camera angle",
      "Audio",
      "Studio operation",
    ],
  },
  {
    title: "OB Van",
    icon: "Truck",
    items: [
      "Camera",
      "Audio",
      "Video",
      "Communication",
      "Technical support",
    ],
  },
];

export interface GalleryImage {
  src: string;
  alt: string;
  category: "MCR" | "Studio" | "OB Van";
}

export const galleryImages: GalleryImage[] = [
  {
    src: VTR,
    alt: "Broadcasting studio control panel with microphone and multiple screens",
    category: "MCR",
  },
  {
    src: PDU,
    alt: "TV broadcast control room with multiple screens and equipment",
    category: "MCR",
  },
  {
    src: Switcherman,
    alt: "Control room with multiple monitors displaying various scenes",
    category: "MCR",
  },
  {
    src: IMG20250929,
    alt: "Control room with multiple monitors displaying various scenes",
    category: "MCR",
  },
  {
    src: SWIT,
    alt: "Control room with multiple monitors displaying various scenes",
    category: "MCR",
  },
  {
    src: kameramen,
    alt: "TV studio setup with cameras and green screen for production",
    category: "Studio",
  },
  {
    src: KAmera,
    alt: "High-tech video camera setup in modern studio environment",
    category: "Studio",
  },
  {
    src: cam3,
    alt: "Videographer adjusting camera equipment during a live broadcast",
    category: "Studio",
  },
  {
    src: CamperVan,
    alt: "Broadcasting control room filled with equipment and monitors",
    category: "OB Van",
  },
  {
    src: AudioManDangdut,
    alt: "Professional video camera with lens on a tripod ready for filming",
    category: "OB Van",
  },
];

export const galleryFilters = ["All", "MCR", "Studio", "OB Van"] as const;
