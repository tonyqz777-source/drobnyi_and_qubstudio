'use client';

import { useEffect, useState } from 'react';
import Button from '@/components/Button/Button';
import AudioButton from '@/components/AudioButton/AudioButton';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => { if (window.scrollY > 0) setScrolled(true); };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.imageWrap}>
        <img
          src="/images/давай бути разом.png"
          alt="Давай бути разом"
          className={styles.image}
        />
        <div className={styles.gradient} />
        <div className={styles.gradientBottom} />
        <div className={`${styles.scrollHint} ${scrolled ? styles.scrollHintHidden : ''}`}>Донизу</div>
        <nav className={styles.nav}>
          <img src="/images/logo.svg" alt="Qubstudio + Anton Drobnyi" className={styles.logo} />
          <div className={styles.navRight}>
            <Button variant="outlineWhite" size="sm" href="https://drobnyi.framer.website/">Портфоліо</Button>
            <Button variant="outlineWhite" size="sm" href="/images/CV_Anton Drobnyi_Product designer.pdf">Резюме</Button>
            <AudioButton stopVariant="white" size="sm" />
          </div>
        </nav>
      </div>
    </section>
  );
}
