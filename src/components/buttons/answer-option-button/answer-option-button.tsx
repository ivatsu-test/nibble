import styles from './answer-option-button.module.css';

interface AnswerOptionButtonProps extends React.PropsWithChildren {
  onClick: () => void;
}

export default function AnswerOptionButton(props: AnswerOptionButtonProps) {
  const { children, onClick } = props;
  return (
    <button className={styles['l-container']} type="button" onClick={onClick}>
      <div className={styles['l-hexagon']}>
        <div className={styles.hexagon__left} />
        <div className={styles.hexagon} />
        <div className={styles.hexagon__right} />
      </div>
      {children}
    </button>
  );
}
