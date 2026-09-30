import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { Loader } from '@/components/Loader';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { GitHubSection } from '@/components/sections/GitHubSection';
import { Broadcasting } from '@/components/sections/Broadcasting';
import { CVSection } from '@/components/sections/CVSection';
import { Contact } from '@/components/sections/Contact';
import { useScrollReveal, useScrollInfo } from '@/hooks/useScroll';

function App() {
  const { showBackToTop } = useScrollInfo(600);
  useScrollReveal();

  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GitHubSection />
        <Broadcasting />
        <CVSection />
        <Contact />
      </main>
      <Footer />
      <BackToTop visible={showBackToTop} />
    </>
  );
}

export default App;
