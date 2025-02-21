import { clsx } from 'clsx';
import styles from './answer-option-button.module.css';

export type AnswerState = 'selected' | 'correct' | 'wrong' | 'default';

interface AnswerOptionButtonProps extends React.PropsWithChildren {
  answerState: AnswerState;
  kind: 'default' | 'prize-mobile' | 'prize-desktop';
  onClick: () => void;
  state: 'default' | 'active' | 'inactive'
}

const stylesByKind = {
  hexagon: {
    default: styles.hexagon,
    'prize-mobile': styles['hexagon-mobile'],
    'prize-desktop': styles['hexagon-desktop'],
  },
  hexagon__left: {
    default: styles.hexagon__left,
    'prize-mobile': styles['hexagon-mobile__left'],
    'prize-desktop': styles['hexagon-desktop__left'],
  },
  hexagon__right: {
    default: styles.hexagon__right,
    'prize-mobile': styles['hexagon-mobile__right'],
    'prize-desktop': styles['hexagon-desktop__right'],
  },
};

const stylesByState = {
  hexagon: {
    default: '',
    active: styles['hexagon--active'],
    inactive: styles['hexagon--inactive'],
  },
  hexagon__left: {
    default: '',
    active: styles['hexagon__left--active'],
    inactive: styles['hexagon__left--inactive'],
  },
  hexagon__right: {
    default: '',
    active: styles['hexagon__right--active'],
    inactive: styles['hexagon__right--inactive'],
  },
};

const stylesByAnswerState = {
  hexagon: {
    selected: styles['hexagon--selected'],
    correct: styles['hexagon--correct'],
    wrong: styles['hexagon--wrong'],
    default: '',
  },
  hexagon__left: {
    selected: styles['hexagon__left--selected'],
    correct: styles['hexagon__left--correct'],
    wrong: styles['hexagon__left--wrong'],
    default: '',
  },
  hexagon__right: {
    selected: styles['hexagon__right--selected'],
    correct: styles['hexagon__right--correct'],
    wrong: styles['hexagon__right--wrong'],
    default: '',
  },
};

export default function AnswerOptionButton(props: AnswerOptionButtonProps) {
  const {
    answerState, kind, children, onClick, state,
  } = props;

  const hexagon = clsx(
    stylesByKind.hexagon[kind],
    stylesByState.hexagon[state],
    stylesByAnswerState.hexagon[answerState],
  );
  const hexagonLeft = clsx(
    stylesByKind.hexagon__left[kind],
    stylesByState.hexagon__left[state],
    stylesByAnswerState.hexagon__left[answerState],
  );
  const hexagonRight = clsx(
    stylesByKind.hexagon__right[kind],
    stylesByState.hexagon__right[state],
    stylesByAnswerState.hexagon__right[answerState],
  );

  return (
    <button className={styles['l-container']} type="button" onClick={onClick}>
      <div className={styles['l-hexagon']}>
        <div className={hexagonLeft} />
        <div className={hexagon} />
        <div className={hexagonRight} />
      </div>
      {children}
    </button>
  );
}
