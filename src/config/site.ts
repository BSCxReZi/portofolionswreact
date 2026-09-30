/**
 * ============================================================
 *  SITE CONFIGURATION — EDIT ALL YOUR LINKS HERE
 * ============================================================
 *  Replace every placeholder below with your real links/info.
 *  Do NOT hardcode links anywhere else in the project.
 */

export const siteConfig = {
  name: "M. Nazwa Kurniawan",
  shortName: "Nazwa Kurniawan",
  role: "IT Support • Web Development • Broadcasting",
  tagline: "Building digital solutions and supporting technology.",
  location: "Kalimantan Selatan, Indonesia",
  description:
    "Fresh graduate dengan pengalaman praktik langsung di bidang IT Support, Web Development, dan Broadcasting. Memiliki pengalaman di lingkungan siaran TV, pengelolaan perangkat broadcast, troubleshooting, serta pengembangan aplikasi berbasis web.",

  /* ---- SOCIAL & CONTACT LINKS ---- */
  links: {
    github: "https://github.com/BSCxReZi", // e.g. https://github.com/your-username
    linkedin: "https://linkedin.com/mnazwa-kurniawan", // e.g. https://linkedin.com/in/your-name
    instagram: "https://instagram.com/aku_ampih", // e.g. https://instagram.com/your-username
    instagramHandle: "@aku_ampih",
    whatsapp: "https://wa.me/6285124225671", // e.g. https://wa.me/6281234567890
    whatsappNumber: "+62 851-2422-5671", // e.g. +62 812-3456-7890
    whatsappRaw: "6285124225671", // digits only for wa.me link
    email: "mnazwakurniawan30@gmail.com", // e.g. nazwa@email.com
    cv: "src/components/CV M.NAZWA KURNIAWAN.pdf", // e.g. /src/assets/cv.pdf
  },

  /* ---- NAVIGATION ---- */
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Broadcasting", href: "#broadcasting" },
    { label: "CV", href: "#cv" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
