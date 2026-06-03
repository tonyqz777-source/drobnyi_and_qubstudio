'use client';

import { useEffect, useRef } from 'react';
import styles from './HelloSection.module.css';

export default function HelloSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(styles.animate);
          observer.disconnect();
        }
      },
      { rootMargin: '-35% 0px -35% 0px', threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.text}>
        <p>Привіт,</p>
        <p>Qubstudio.</p>
      </div>
    </section>
  );
}
