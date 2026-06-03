'use client';

import { useEffect, useState } from 'react';
import Button from '@/components/Button/Button';
import AudioButton from '@/components/AudioButton/AudioButton';
import styles from './StickyNav.module.css';

const THRESHOLD = 100;

export default function StickyNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > THRESHOLD);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${visible ? styles.visible : ''}`}>
      <img src="/images/logo-dark.svg" alt="Qubstudio + Anton Drobnyi" className={styles.logo} />
      <div className={styles.right}>
        <Button variant="outlineOrange" size="sm" href="https://drobnyi.framer.website/">Портфоліо</Button>
        <Button variant="outlineOrange" size="sm" href="/images/CV_Anton Drobnyi_Product designer.pdf">Резюме</Button>
        <AudioButton stopVariant="orange" size="sm" />
      </div>
    </nav>
  );
}
