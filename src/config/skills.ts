export interface SkillCategory {
  title: string;
  icon: string; // lucide icon name
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "IT Support",
    icon: "Headset",
    skills: [
      "Hardware Troubleshooting",
      "Software Troubleshooting",
      "Windows",
      "Networking Dasar",
      "Computer Maintenance",
      "Installation & Configuration",
      "Technical Support",
      "good at using Microsoft Office",
    ],
  },
  {
    title: "Web Development",
    icon: "Code2",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "MySQL",
      "Bootstrap",
      "Git & GitHub",
      "Laragon",
      "REST/API Dasar",
      "React JS",
    ],
  },
  {
    title: "Broadcasting",
    icon: "Radio",
    skills: [
      "Master Control Room (MCR)",
      "Sub-Control",
      "Studio",
      "Transmission / TX",
      "OB Van",
      "Camera Operation",
      "Sony PXW-Z190",
      "Audio Mixer",
      "Video Switcher",
      "VTR / Playout",
      "OBS Studio",
      "vMix",
      "Live Streaming",
    ],
  },
];
