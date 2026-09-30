import * as Icons from 'lucide-react';
import { skillCategories } from '@/config/skills';

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute left-0 top-1/2 w-72 h-72 bg-blue-600/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
        <div className="reveal text-center mb-14">
          <p className="text-blue-400 font-medium text-sm tracking-wider uppercase mb-2">What I can do</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-white">Skills & Expertise</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => {
            const IconComp = (Icons as unknown as Record<string, Icons.LucideIcon>)[cat.icon] ?? Icons.Circle;
            return (
              <div key={cat.title} className="reveal glass rounded-2xl p-7 card-hover">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                    <IconComp size={22} />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-white">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-pill px-3.5 py-1.5 rounded-lg border border-white/10 bg-white/5 text-slate-300 text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
