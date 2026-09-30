import { Radio, Monitor, Video, Truck, Camera, Waves, Film, Wifi, Radio as RadioIcon, Cpu, Play, ClipboardCheck, Wrench } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="reveal text-center mb-14">
          <p className="text-blue-400 font-medium text-sm tracking-wider uppercase mb-2">Career Journey</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-white">Pengalaman</h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 timeline-line md:-translate-x-1/2" />

          <div className="relative pl-12 md:pl-0 space-y-8">
            <TimelineEntry side="left" icon={<Cpu size={20} />} title="IT Support & Web Development" subtitle="Project & Technical Practice" tasks={technicalTasks} />
            <TimelineEntry side="right" icon={<Radio size={20} />} title="LPP TVRI Stasiun Kalimantan Selatan" subtitle="Praktik Kerja Lapangan — Teknik Audio Video" tasks={broadcastTasks} />
          </div>
        </div>
      </div>
    </section>
  );
}

interface TimelineTask {
  icon: typeof Monitor;
  label: string;
}

interface TimelineEntryProps {
  side: "left" | "right";
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  tasks: TimelineTask[];
}

function TimelineEntry({ side, icon, title, subtitle, tasks }: TimelineEntryProps) {
  return (
    <div className="relative md:grid md:grid-cols-2 md:gap-8">
      <div className="absolute left-4 md:left-1/2 top-2 w-4 h-4 rounded-full bg-blue-500 border-4 border-bg-primary md:-translate-x-1/2 accent-glow z-10" />
      <div className={`${side === "left" ? "md:col-start-1" : "md:col-start-2"} reveal`}>
        <div className="glass rounded-2xl p-7 card-hover">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
              {icon}
            </div>
            <div>
              <h3 className="font-display font-semibold text-white text-lg leading-tight">{title}</h3>
              <p className="text-blue-400 text-sm font-medium">{subtitle}</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-4 gap-y-3">
            {tasks.map((task, index) => (
              <div key={index} className="flex items-start gap-2.5">
                <task.icon size={16} className="flex-shrink-0 mt-0.5 text-blue-400/70" />
                <span className="text-slate-300 text-sm leading-snug">{task.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const technicalTasks: TimelineTask[] = [
  { icon: Wrench, label: "Melakukan troubleshooting hardware dan software" },
  { icon: Monitor, label: "Melakukan instalasi dan konfigurasi komputer" },
  { icon: Wifi, label: "Memahami dasar networking dan konektivitas" },
  { icon: Cpu, label: "Melakukan computer maintenance" },
  { icon: ClipboardCheck, label: "Membangun website berbasis PHP dan MySQL" },
  { icon: RadioIcon, label: "Mengembangkan project dengan Bahasa PHP dan React JS" },
  { icon: Film, label: "Menggunakan Bootstrap untuk kebutuhan antarmuka" },
  { icon: Video, label: "Mengelola project menggunakan Git dan GitHub" },
];

const broadcastTasks: TimelineTask[] = [
  { icon: Monitor, label: "Membantu operasional Master Control Room (MCR)" },
  { icon: ClipboardCheck, label: "Monitoring dan pengecekan sistem siaran" },
  { icon: Wifi, label: "Membantu pengecekan transmission / TX" },
  { icon: RadioIcon, label: "Praktik di Sub-Control dan Studio" },
  { icon: Film, label: "Mengoperasikan dan memahami video switcher" },
  { icon: Waves, label: "Menggunakan audio mixer" },
  { icon: Camera, label: "Mengoperasikan kamera Sony PXW-Z190" },
  { icon: Truck, label: "Membantu kegiatan OB Van" },
  { icon: Play, label: "Membantu VTR dan Playout" },
  { icon: Video, label: "Mendukung kegiatan live streaming" },
  { icon: ClipboardCheck, label: "Membantu dokumentasi dan kebutuhan teknis siaran" },
  { icon: Wrench, label: "Melakukan troubleshooting dasar perangkat broadcast" },
];
