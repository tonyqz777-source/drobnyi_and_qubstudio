'use client';

import { useEffect, useRef } from 'react';
import styles from './QuestionSection.module.css';

const sentences = [
  'Ви шукаєте дизайнера, який може взяти проєкт від ідеї до запуску?',
  'Хто розуміє не тільки Figma,\nале й бізнес-логіку?',
  'Хто не потребує мікроменеджменту?',
];

export default function QuestionSection() {
  const refs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    // На мобільному — одразу показуємо всі речення без анімації
    if (window.innerWidth <= 767) {
      refs.current.forEach((el) => el && el.classList.add(styles.visible));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add(styles.visible);
          } else if (entry.boundingClientRect.top > window.innerHeight) {
            el.classList.remove(styles.visible);
          }
        });
      },
      {
        rootMargin: '-35% 0px -35% 0px',
        threshold: 0,
      }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section}>
      {sentences.map((text, i) => (
        <p
          key={i}
          ref={(el) => { refs.current[i] = el; }}
          className={styles.sentence}
          style={{ whiteSpace: 'pre-wrap' }}
        >
          {text}
        </p>
      ))}
    </section>
  );
}
