import { GraduationCap, MapPin, Briefcase } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="reveal text-center mb-14">
          <p className="text-blue-400 font-medium text-sm tracking-wider uppercase mb-2">Get to know me</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-white">Tentang Saya</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="reveal lg:col-span-2 glass rounded-2xl p-8 lg:p-10 card-hover">
            <div className="space-y-5 text-slate-300 leading-relaxed text-base">
              <p>
                Saya adalah <span className="text-white font-medium">{siteConfig.name}</span>, seorang fresh graduate
                SMK Negeri 1 Paringin jurusan Teknik Audio Video yang memiliki ketertarikan dan pengalaman di bidang
                IT Support, Web Development, serta Broadcasting.
              </p>
              <p>
                Saya memiliki pengalaman praktik kerja lapangan di <span className="text-blue-400 font-medium">LPP TVRI Stasiun Kalimantan Selatan</span>,
                khususnya pada lingkungan Master Control Room (MCR), Sub-Control, Studio, Transmission/TX, dan OB Van.
              </p>
              <p>
                Selain broadcasting, saya juga mengembangkan beberapa project website menggunakan PHP, MySQL, HTML, CSS,
                JavaScript, Bootstrap, dan teknologi web lainnya.
              </p>
              <p>
                Saya terbiasa melakukan troubleshooting perangkat, membantu operasional siaran, mengelola sistem
                komputer, serta membuat solusi digital sederhana sesuai kebutuhan.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <InfoCard icon={<GraduationCap />} title="Pendidikan" value="SMK Negeri 1 Paringin" sub="Teknik Audio Video" />
            <InfoCard icon={<MapPin />} title="Lokasi" value={siteConfig.location} sub="Kab.Balangan, Haur Batu" />
            <InfoCard icon={<Briefcase />} title="Status" value="Fresh Graduate" sub="Open to work" />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, value, sub }: { icon: React.ReactNode; title: string; value: string; sub: string }) {
  return (
    <div className="reveal glass rounded-2xl p-6 card-hover flex items-start gap-4">
      <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">{title}</p>
        <p className="text-white font-medium text-sm">{value}</p>
        <p className="text-slate-400 text-sm">{sub}</p>
      </div>
    </div>
  );
}
