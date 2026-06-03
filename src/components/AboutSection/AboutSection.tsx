'use client';

import { useEffect, useRef } from 'react';
import styles from './AboutSection.module.css';

export default function AboutSection() {
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
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <img
        src="/images/avatar.png"
        alt="Антон Дробний"
        className={styles.photo}
      />
      <div className={styles.textCol}>
        <div className={styles.heading}>
          <p>Я – Антон.</p>
          <p>Продуктовий дизайнер.</p>
        </div>
        <p className={styles.body}>
          Більше 7 років я борюсь з ентропією цього ірраціонального, хаотичного світу через дизайн і намагаюсь внести в нього трохи більше порядку.
        </p>
      </div>
    </section>
  );
}
