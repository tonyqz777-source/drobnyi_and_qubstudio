'use client';

import { useEffect, useState } from 'react';
import { AUDIO_EVENT, isPlaying, toggle } from '@/lib/audioPlayer';

export function useAudioPlayer() {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const handler = () => setPlaying(isPlaying());
    window.addEventListener(AUDIO_EVENT, handler);
    return () => window.removeEventListener(AUDIO_EVENT, handler);
  }, []);

  return { isPlaying: playing, toggle };
}
