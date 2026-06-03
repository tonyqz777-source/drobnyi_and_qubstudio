// Module-level singleton so HeroSection & StickyNav share the same audio state

export const AUDIO_EVENT = 'audioPlayerChange';

let audio: HTMLAudioElement | null = null;
let _playing = false;

function dispatch() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(AUDIO_EVENT));
  }
}

function getAudio(): HTMLAudioElement {
  if (!audio) {
    audio = new Audio('/images/Qubstudio Мінімум.mp3');
    audio.addEventListener('ended', () => {
      _playing = false;
      dispatch();
    });
  }
  return audio;
}

export function isPlaying(): boolean {
  return _playing;
}

export function play(): void {
  getAudio().play();
  _playing = true;
  dispatch();
}

export function stop(): void {
  const a = getAudio();
  a.pause();
  a.currentTime = 0;
  _playing = false;
  dispatch();
}

export function toggle(): void {
  _playing ? stop() : play();
}
