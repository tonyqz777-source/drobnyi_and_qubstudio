'use client';

import { useEffect, useState } from 'react';
import Button from '@/components/Button/Button';
import AudioButton from '@/components/AudioButton/AudioButton';
import styles from './HeroSection.module.css';

const START = new Date('2026-06-08T16:01:00').getTime();

function useElapsed() {
  const [elapsed, setElapsed] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const update = () => {
      const diff = Math.max(0, Date.now() - START);
      setElapsed({
        days:    Math.floor(diff / 86400000),
        hours:   Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return elapsed;
}

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);
  const { days, hours, minutes, seconds } = useElapsed();

  useEffect(() => {
    const onScroll = () => { if (window.scrollY > 0) setScrolled(true); };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const ss = String(seconds).padStart(2, '0');

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
        <div className={styles.timerWrap}>
          <p className={styles.timerLabel}>Часу без відповіді</p>
          <p className={styles.timerCount}>
            {days} днів {hours} годин {minutes}:{ss} хвилин
          </p>
        </div>
      </div>
    </section>
  );
}
