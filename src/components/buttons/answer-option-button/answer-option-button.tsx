import { clsx } from 'clsx';
import styles from './answer-option-button.module.css';

interface AnswerOptionButtonProps extends React.PropsWithChildren {
  kind: 'default' | 'prize-mobile' | 'prize-desktop';
  onClick: () => void;
}

export default function AnswerOptionButton(props: AnswerOptionButtonProps) {
  const { children, onClick, kind } = props;
  return (
    <button className={styles['l-container']} type="button" onClick={onClick}>
      <div className={styles['l-hexagon']}>
        {/* TODO: create config to pick needed className */}
        <div className={clsx(kind === 'default' && styles.hexagon__left, kind === 'prize-mobile' && styles['hexagon-mobile__left'])} />
        <div className={clsx(kind === 'default' && styles.hexagon, kind === 'prize-mobile' && styles['hexagon-mobile'])} />
        <div className={clsx(kind === 'default' && styles.hexagon__right, kind === 'prize-mobile' && styles['hexagon-mobile__right'])} />
      </div>
      {children}
    </button>
  );
}
