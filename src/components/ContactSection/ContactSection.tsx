import styles from './ContactSection.module.css';

const LINKS = [
  { label: 'tony_qz@ukr.net',             href: 'mailto:tony_qz@ukr.net' },
  { label: 'linkedin.com/in/antondrobnyi/', href: 'https://linkedin.com/in/antondrobnyi/' },
  { label: 'drobnyi.framer.website',        href: 'https://drobnyi.framer.website' },
];

export default function ContactSection() {
  return (
    <section className={styles.section}>
      <img
        src="/images/Qubstudio я чекатиму.png"
        alt="Qubstudio, я чекатиму"
        className={styles.image}
      />
      <div className={styles.bar}>
        <div className={styles.links}>
          {LINKS.map(({ label, href }) => (
            <a key={label} href={href} className={styles.link} target="_blank" rel="noopener noreferrer">
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
