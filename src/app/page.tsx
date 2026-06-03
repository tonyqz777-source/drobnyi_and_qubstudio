import styles from './page.module.css';
import StickyNav from '@/components/StickyNav/StickyNav';
import HeroSection from '@/components/HeroSection/HeroSection';
import HelloSection from '@/components/HelloSection/HelloSection';
import AboutSection from '@/components/AboutSection/AboutSection';
import StorySection from '@/components/StorySection/StorySection';
import QuestionSection from '@/components/QuestionSection/QuestionSection';
import HereIAmSection from '@/components/HereIAmSection/HereIAmSection';
import ProjectsSection from '@/components/ProjectsSection/ProjectsSection';
import WhyQubstudioSection from '@/components/WhyQubstudioSection/WhyQubstudioSection';
import WhyMeSection from '@/components/WhyMeSection/WhyMeSection';
import ContactSection from '@/components/ContactSection/ContactSection';

export default function Home() {
  return (
    <main className={styles.page}>
      <StickyNav />
      <HeroSection />
      <HelloSection />
      <AboutSection />
      <StorySection />
      <QuestionSection />
      <HereIAmSection />
      <ProjectsSection />
      <WhyQubstudioSection />
      <WhyMeSection />
      <ContactSection />
    </main>
  );
}
