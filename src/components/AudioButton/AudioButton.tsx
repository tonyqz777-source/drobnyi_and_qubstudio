'use client';

import { useAudioPlayer } from '@/hooks/useAudioPlayer';
import styles from './AudioButton.module.css';

interface AudioButtonProps {
  stopVariant?: 'white' | 'orange';
  size?: 'sm' | 'md';
}

function StopIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0 }}>
      <rect width="10" height="10" rx="1" />
    </svg>
  );
}

export default function AudioButton({ stopVariant = 'orange', size = 'sm' }: AudioButtonProps) {
  const { isPlaying, toggle } = useAudioPlayer();

  const stopVariantClass = stopVariant === 'white' ? styles.stopWhite : styles.stopOrange;
  const stateClass       = isPlaying ? styles.stop : styles.play;
  const colorClass       = isPlaying ? stopVariantClass : '';

  return (
    <button
      onClick={toggle}
      className={`${styles.btn} ${styles[size]} ${stateClass} ${colorClass}`}
      aria-label={isPlaying ? 'Зупинити музику' : 'Відтворити музику'}
    >
      <span className={styles.icon}><StopIcon /></span>
      <span className={styles.label}>А тепер пісня!</span>
    </button>
  );
}
