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
    src: "src\\config\\VTR.jpg",
    alt: "Broadcasting studio control panel with microphone and multiple screens",
    category: "MCR",
  },
  {
    src: "src\\config\\PDU.jpg",
    alt: "TV broadcast control room with multiple screens and equipment",
    category: "MCR",
  },
  {
    src: "src\\config\\Switcherman.jpg",
    alt: "Control room with multiple monitors displaying various scenes",
    category: "MCR",
  },
      {
    src: "src\\config\\IMG_20250929_171328.jpg",
    alt: "Control room with multiple monitors displaying various scenes",
    category: "MCR",
  },

        {
    src: "src\\config\\SWIT.jpg",
    alt: "Control room with multiple monitors displaying various scenes",
    category: "MCR",
  },



  {
    src: "src\\config\\kameramen.jpg",
    alt: "TV studio setup with cameras and green screen for production",
    category: "Studio",
  },
  {
    src: "src\\config\\KAmera.jpg",
    alt: "High-tech video camera setup in modern studio environment",
    category: "Studio",
  },
  {
    src: "src\\config\\cam3.jpg",
    alt: "Videographer adjusting camera equipment during a live broadcast",
    category: "Studio",
  },
  {
    src: "src\\config\\CamperVan.jpg",
    alt: "Broadcasting control room filled with equipment and monitors",
    category: "OB Van",
  },
  {
    src: "src\\config\\AudioMan Dangdut keliling.jpg",
    alt: "Professional video camera with lens on a tripod ready for filming",
    category: "OB Van",
  },
];

export const galleryFilters = ["All", "MCR", "Studio", "OB Van"] as const;
