'use client';

import { useCountUp } from '@/hooks/useCountUp';
import styles from './ProjectsSection.module.css';

interface Parsed {
  prefix: string;
  num: number;
  suffix: string;
  useComma: boolean;
}

function parse(raw: string): Parsed | null {
  // matches: optional non-digit prefix (e.g. "$") + optional minus + digits (possibly with commas) + suffix
  const m = raw.match(/^([^0-9]*)(-?)(\d[\d,]*)(.*)$/);
  if (!m) return null;
  const [, pre, sign, numPart, suffix] = m;
  const num = parseInt(numPart.replace(/,/g, ''), 10);
  if (isNaN(num)) return null;
  return {
    prefix: pre + sign,
    num,
    suffix,
    useComma: numPart.includes(','),
  };
}

function format(value: number, useComma: boolean): string {
  if (useComma) return value.toLocaleString('en-US');
  return String(value);
}

interface Props {
  raw: string;
}

export default function CountUpNum({ raw }: Props) {
  const parsed = parse(raw);

  // always call hook — pass 0 if nothing to animate
  const { value, elRef } = useCountUp(parsed?.num ?? 0);

  // Non-numeric (e.g. "✷") — render as-is
  if (!parsed) {
    return <span className={styles.statNum}>{raw}</span>;
  }

  return (
    <span className={styles.statNum} ref={elRef as React.RefObject<HTMLSpanElement>}>
      {parsed.prefix}{format(value, parsed.useComma)}{parsed.suffix}
    </span>
  );
}
