'use client';

import { useEffect, useRef } from 'react';
import styles from './WhyQubstudioSection.module.css';

export default function WhyQubstudioSection() {
  const photoRef = useRef<HTMLImageElement>(null);
  const textRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [
      { el: photoRef.current, delay: 0 },
      { el: textRef.current,  delay: 120 },
    ];

    const observers = els.map(({ el, delay }) => {
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => el.classList.add(styles.visible), delay);
          } else if (entry.boundingClientRect.top > 0) {
            el.classList.remove(styles.visible);
          }
        },
        { rootMargin: '-15% 0px -15% 0px', threshold: 0 }
      );

      observer.observe(el);
      return observer;
    });

    return () => observers.forEach(o => o?.disconnect());
  }, []);

  return (
    <section className={styles.section}>
      <p className={styles.heading}>Чому саме ви</p>

      <div className={styles.content}>
        <img
          ref={photoRef}
          src="/images/я і куб.jpeg"
          alt="Я і Qubstudio"
          className={`${styles.photo} ${styles.fadeEl}`}
        />

        <div
          ref={textRef}
          className={`${styles.textGrid} ${styles.fadeEl}`}
        >
          <div className={styles.textCol}>
            <p>Я міг би написати про ваше портфоліо — як ви працюєте з продуктами, увагу до деталей, до досвіду користувача. Але це знають всі, хто за вами стежить.</p>
          </div>
          <div className={styles.textCol}>
            <p>Я безмежно поважаю дизайн, над яким думали, яким горіли і який прожили.<br /><br />Саме тому шукаю не просто роботу, а місце, де дизайн має значення і де його розуміють. Де можна впливати на продукт, думати сміливо, експериментувати без страху і рости — а не просто рухати пікселі.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
