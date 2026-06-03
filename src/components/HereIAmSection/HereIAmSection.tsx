'use client';

import { useEffect, useRef } from 'react';
import Button from '@/components/Button/Button';
import styles from './HereIAmSection.module.css';

/*
  Arrow positions are calculated from the Figma design.
  Full image reference: 1244 × 700 px.
  Each arrow is placed in its quadrant:
    Q1 (top-left)    : quadrant offset (0,   0)
    Q2 (top-right)   : quadrant offset (620, 0)
    Q3 (bottom-left) : quadrant offset (0,   349)
    Q4 (bottom-right): quadrant offset (620, 349)

  clip-path wipe direction matches the arrow's draw direction (tail → tip):
    Arrow 1 (red,    Q1) : left → right
    Arrow 2 (red,    Q2) : right → left
    Arrow 3 (yellow, Q3) : left → right
    Arrow 4 (blue,   Q4) : right → left
*/
const ARROWS = [
  {
    src:   '/images/arrows/arrow 1.svg',
    style: { left: '34.1%', top: '22%',   width: '14.8%' },
    dir:   'lr',
    delay: 0,
  },
  {
    src:   '/images/arrows/arrow 2.svg',
    style: { left: '52.2%', top: '24.6%', width: '14.5%' },
    dir:   'rl',
    delay: 380,
  },
  {
    src:   '/images/arrows/arrow 3.svg',
    style: { left: '19.6%', top: '54.3%', width: '23.6%' },
    dir:   'lr',
    delay: 720,
  },
  {
    src:   '/images/arrows/arrow 4.svg',
    style: { left: '57.8%', top: '55.1%', width: '24.9%' },
    dir:   'rl',
    delay: 1060,
  },
] as const;

const HIDDEN = { lr: 'inset(0 100% 0 0)', rl: 'inset(0 0 0 100%)' };

export default function HereIAmSection() {
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const arrowRefs    = useRef<(HTMLImageElement | null)[]>([]);
  const timers       = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const wrap = imageWrapRef.current;
    if (!wrap) return;

    const show = () => {
      wrap.classList.add(styles.visible);

      ARROWS.forEach(({ dir, delay }, i) => {
        const t = setTimeout(() => {
          const el = arrowRefs.current[i];
          if (!el) return;
          el.style.transition = 'clip-path 0.85s cubic-bezier(0.25, 1, 0.5, 1)';
          el.style.clipPath    = 'inset(0 0 0 0)';
        }, delay);
        timers.current.push(t);
      });
    };

    const hide = () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
      wrap.classList.remove(styles.visible);

      ARROWS.forEach(({ dir }, i) => {
        const el = arrowRefs.current[i];
        if (!el) return;
        el.style.transition = 'none';
        el.style.clipPath    = HIDDEN[dir];
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
        } else if (entry.boundingClientRect.top > 0) {
          hide();
        }
      },
      { rootMargin: '-25% 0px -25% 0px', threshold: 0 }
    );

    observer.observe(wrap);
    return () => {
      observer.disconnect();
      timers.current.forEach(clearTimeout);
    };
  }, []);

  return (
    <section className={styles.section}>
      <p className={styles.title}>Так ось він!</p>

      <div className={styles.buttons}>
        <Button variant="primary" size="lg" href="https://drobnyi.framer.website/">Портфоліо</Button>
        <Button variant="outlineOrange" size="lg" href="/images/CV_Anton Drobnyi_Product designer.pdf">Резюме</Button>
      </div>

      <div ref={imageWrapRef} className={styles.imageWrap}>
        <img
          src="/images/в офісі.png"
          alt="В офісі Qubstudio"
          className={styles.image}
        />

        {ARROWS.map(({ src, style, dir }, i) => (
          <img
            key={i}
            ref={el => { arrowRefs.current[i] = el; }}
            src={src}
            alt=""
            className={styles.arrow}
            style={{ ...style, clipPath: HIDDEN[dir] }}
          />
        ))}
      </div>
    </section>
  );
}
