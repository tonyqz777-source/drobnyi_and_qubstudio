import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'outlineWhite' | 'outlineOrange' | 'whiteOnOrange' | 'outlineBlack';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export default function Button({
  variant = 'primary',
  size = 'lg',
  children,
  className = '',
  href,
}: ButtonProps) {
  const cls = `${styles.btn} ${styles[variant]} ${styles[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button className={cls}>
      {children}
    </button>
  );
}
