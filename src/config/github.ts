export interface GitHubRepo {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  url: string;
}

/**
 * Replace these with your real GitHub repositories.
 * Set url to your actual repo link or use the placeholder.
 */
export const githubRepos: GitHubRepo[] = [
  {
    name: "absensi-digital",
    description: "Sistem absensi karyawan berbasis web dengan PHP & MySQL",
    language: "PHP",
    languageColor: "#4F5D95",
    url: "https://github.com/BSCxReZi/absensi_online",
  },
  {
    name: "portfolio-website",
    description: "Website portfolio pribadi dengan HTML, CSS, JavaScript & Bootstrap",
    language: "React JS",
    languageColor: "#00FF00",
    url: "GITHUB_PROFILE_LINK",
  },
  {
    name: "broadcasting-tools",
    description: "Tools dan script untuk mendukung operasional siaran TV",
    language: "JavaScript",
    languageColor: "#F1E05A",
    url: "#",
  },
  {
    name: "Bendahara-Digital",
    description: "Sistem absensi karyawan berbasis web dengan React Js & Tailwind CSS",
    language: "React JS",
    languageColor: "#00FF00",
    url: "https://github.com/BSCxReZi/uangkas-react-V1",
  },
];
