import { useEffect, useState } from 'react';

export function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 700);
    return () => clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-bg-primary flex items-center justify-center transition-opacity duration-500">
      <div className="flex flex-col items-center gap-4">
        <div className="loader-ring" />
        <p className="text-slate-500 text-sm font-medium tracking-wider uppercase">Loading</p>
      </div>
    </div>
  );
}
