export interface Project {
  id: number;
  title: string;
  category: "Web Development" | "Broadcasting" | "IT Support";
  description: string;
  features?: string[];
  tech: string[];
  thumbnail: string;
  liveDemo: string;
  github: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Absensi Digital",
    category: "Web Development",
    description:
      "Website sistem absensi karyawan berbasis web dengan dashboard admin, tracking GPS, dan integrasi WhatsApp.",
    features: [
      "Login & Register",
      "Role Admin dan Karyawan",
      "Dashboard Admin",
      "Absensi masuk & pulang",
      "GPS / Lokasi",
      "Riwayat absensi",
      "Rekap otomatis",
      "Status Hadir, Izin, Sakit, Alpha",
      "Pengelolaan data karyawan",
      "Export laporan",
      "Integrasi WhatsApp",
      "Session authentication",
      "Password hashing",
    ],
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    thumbnail:
      "src\\config\\abens.png",
    liveDemo: "http://absensi-karyawan00.gt.tc/",
    github: "https://github.com/BSCxReZi/absensi_online",
  },
  {
    id: 2,
    title: "Portfolio Website",
    category: "Web Development",
    description:
      "Website portfolio pribadi yang menampilkan profil, skill, pengalaman, project, CV, dan kontak dalam satu halaman.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    thumbnail:
      "https://images.pexels.com/photos/256502/pexels-photo-256502.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    liveDemo: "PROJECT_2_LIVE",
    github: "PROJECT_2_GITHUB",
  },
  {
    id: 3,
    title: "Bendahara-Digital",
    category: "Web Development",
    description: "Absensi digital adalah sistem pencatatan kehadiran yang menggunakan teknologi digital untuk mencatat, menyimpan, mengelola, dan merekap data kehadiran karyawan atau anggota secara otomatis.",
    tech: ["React Js", "Tailwind CSS","Vite"],
    thumbnail:
      "src\\config\\bd.png",
    liveDemo: "PROJECT_LIVE_LINK",
    github: "PROJECT_GITHUB_LINK",
  },
];

export const projectFilters = ["All", "Web Development", "Broadcasting", "IT Support"] as const;
