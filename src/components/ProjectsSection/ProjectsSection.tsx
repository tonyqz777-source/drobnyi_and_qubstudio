'use client';

import styles from './ProjectsSection.module.css';
import Button from '@/components/Button/Button';
import CountUpNum from './CountUpNum';

export default function ProjectsSection() {
  return (
    <section className={styles.section}>
      <p className={styles.heading}>Основні проєкти</p>

      {/* Career Karma */}
      <div className={`${styles.card} ${styles.cardOrange}`}>
        <div className={styles.cardLeft}>
          <p className={styles.cardTitle}>Career Karma</p>
          <p className={styles.cardMeta}>Sole Product Designer | 2019–2025 | 6 років</p>
          <Button variant="outlineWhite" size="md" href="https://drobnyi.framer.website/projects/careerkarma">Повний кейс</Button>
        </div>
        <div className={styles.cardRight}>
          <div className={styles.cardDescription}>
            <p>Платформа для вибору tech-освіти — маркетплейс bootcamp-ів та навчальних програм, персональний коучинг, комуна однодумців.</p>
            <br />
            <p>Я був єдиним дизайнером протягом 6 років — повна відповідальність за всі дизайн потреби продукту: від дослідження до передачі в розробку і підтримки після. Працював над онбордингом, маркетплейсом, соціальними функціями (audio rooms, чатинг, блог).<br />Web + mobile (iOS, Android).</p>
          </div>
          <div className={styles.cardStats}>
            <div className={styles.stat}>
              <CountUpNum raw="3M+" />
              <span className={styles.statLabel}>активних користувачів щомісяця</span>
            </div>
            <div className={styles.stat}>
              <CountUpNum raw="$66M" />
              <span className={styles.statLabel}>залучених інвестицій</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>✷</span>
              <span className={styles.statLabel}>Платформа виросла від MVP до лідера в EdTech</span>
            </div>
          </div>
        </div>
      </div>

      {/* Black Genius Academy */}
      <div className={`${styles.card} ${styles.cardBlue}`}>
        <div className={styles.cardLeft}>
          <p className={styles.cardTitle}>Black Genius Academy</p>
          <p className={styles.cardMeta}>Product Designer | 2023 | В рамках Career Karma</p>
          <Button variant="outlineWhite" size="md" href="https://drobnyi.framer.website/projects/bga">Повний кейс</Button>
        </div>
        <div className={styles.cardRight}>
          <div className={styles.cardDescription}>
            <p>Платформа для компаній, які хочуть допомогти своїм співробітникам розвиватись у tech кар&apos;єрі. Партнерство Career Karma × Google Tech Equity Collective.</p>
            <br />
            <p>Я працював над audio-first досвідом користувача, навчальним планом та його персоналізацією, функціоналом для коучинг сесій.<br />Mobile-first підхід + Web.</p>
          </div>
          <div className={styles.cardStats}>
            <div className={styles.stat}>
              <CountUpNum raw="3,212" />
              <span className={styles.statLabel}>sign-ups за 4 місяці</span>
            </div>
            <div className={styles.stat}>
              <CountUpNum raw="87%" />
              <span className={styles.statLabel}>customer satisfaction</span>
            </div>
            <div className={styles.stat}>
              <CountUpNum raw="400+" />
              <span className={styles.statLabel}>coaching сесій заброньовано органічно</span>
            </div>
          </div>
        </div>
      </div>

      {/* OutRival */}
      <div className={`${styles.card} ${styles.cardYellow}`}>
        <div className={styles.cardLeft}>
          <p className={styles.cardTitle}>OutRival</p>
          <p className={styles.cardMeta}>Solo Product Designer | 2024–2025 | 5 місяців</p>
          <Button variant="outlineBlack" size="md" href="https://drobnyi.framer.website/projects/outrival">Повний кейс</Button>
        </div>
        <div className={styles.cardRight}>
          <div className={styles.cardDescription}>
            <p>No-code платформа для створення AI-агентів і інтеграції у бізнес процеси. Дозволяє нетехнічним користувачам будувати conversational AI без коду і технічних складнощів.</p>
            <br />
            <p>Працював над онбордингом нових користувачів, повним функціоналом платформи (дашборди, drag-and-drop builder агентів, розширені налаштування платформи і вузлів), дизайн система, лендінг. Основна складність була зробити складне простим.</p>
          </div>
          <div className={styles.cardStats}>
            <div className={styles.stat}>
              <CountUpNum raw="2 міс" />
              <span className={styles.statLabel}>до запуску MVP</span>
            </div>
            <div className={styles.stat}>
              <CountUpNum raw="-40%" />
              <span className={styles.statLabel}>зменшення time-to-first-action</span>
            </div>
            <div className={styles.stat}>
              <CountUpNum raw="3" />
              <span className={styles.statLabel}>beta-enterprise клієнти onboarded</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
