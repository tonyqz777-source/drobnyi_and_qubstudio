'use client';

import { useEffect, useRef, useState } from 'react';

const DURATION = 1400; // ms

function easeOutQuart(t: number) {
  return 1 - Math.pow(1 - t, 4);
}

export function useCountUp(target: number) {
  const [value, setValue] = useState(0);
  const elRef = useRef<HTMLElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          const startTime = performance.now();

          const tick = (now: number) => {
            const progress = Math.min((now - startTime) / DURATION, 1);
            setValue(Math.round(easeOutQuart(progress) * target));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return { value, elRef };
}
