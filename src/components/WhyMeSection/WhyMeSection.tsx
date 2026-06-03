'use client';

import { useEffect, useRef } from 'react';
import styles from './WhyMeSection.module.css';

const CARDS = [
  { cls: styles.card1, src: '/images/додай_мене_на_202604270028 1.png', alt: 'Підтримка тіммейтів', caption: 'Я завжди готовий підтримати своїх тіммейтів' },
  { cls: styles.card2, src: '/images/Кладу нагороду.png',               alt: 'Red Dot Award',       caption: 'Якщо Red Dot — то тільки до вас на полицю' },
  { cls: styles.card3, src: '/images/Розмова за столом.png',            alt: 'Розмова за столом',   caption: 'Завжди радий поговорити про дизайн.\nІ не тільки' },
  { cls: styles.card4, src: "/images/Дає п'ять.png",                    alt: "Дає п'ять",           caption: 'Для мене люди поруч —\nне менш важливі ніж результат' },
  { cls: styles.card5, src: '/images/Групове фото.png',                 alt: 'Групове фото',        caption: 'Я органічно вписуюсь у команду' },
  { cls: styles.card6, src: '/images/Роблю капучіно.png',               alt: 'Роблю капучіно',      caption: 'А ще я вмію робити смачне капучіно' },
];

export default function WhyMeSection() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((el) => {
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add(styles.visible);
          } else if (entry.boundingClientRect.top > 0) {
            el.classList.remove(styles.visible);
          }
        },
        { rootMargin: '-20% 0px -20% 0px', threshold: 0 }
      );

      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <section className={styles.section}>
      <p className={styles.heading}>Чому саме я</p>

      <div className={styles.mosaic}>
        {CARDS.map(({ cls, src, alt, caption }, i) => (
          <div
            key={i}
            ref={(el) => { cardRefs.current[i] = el; }}
            className={`${styles.card} ${cls}`}
          >
            <img src={src} alt={alt} className={styles.cardImage} />
            <p className={styles.caption}>{caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
