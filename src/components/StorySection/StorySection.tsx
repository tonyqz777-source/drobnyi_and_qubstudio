'use client';

import { useEffect, useRef } from 'react';
import styles from './StorySection.module.css';

export default function StorySection() {
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
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <p className={styles.textTop}>
        Я давно стежу за вами. За вашими проєктами, підходом, роботами. І давно хотів бути частиною цього. Але щоразу знаходилась причина зачекати ще трохи.
      </p>
      <img
        src="/images/Стеження з кущів 1.png"
        alt="Стеження з кущів"
        className={styles.photo}
      />
      <p className={styles.textBottom}>
        Але сьогодні — ні.
      </p>
    </section>
  );
}
