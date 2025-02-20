import { clsx } from 'clsx';
import styles from './answer-option-button.module.css';

interface AnswerOptionButtonProps extends React.PropsWithChildren {
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
    inactive: '',
  },
  hexagon__right: {
    default: '',
    active: styles['hexagon__right--active'],
    inactive: '',
  },
};

export default function AnswerOptionButton(props: AnswerOptionButtonProps) {
  const {
    kind, children, onClick, state,
  } = props;

  const hexagonLeft = clsx(stylesByKind.hexagon__left[kind], stylesByState.hexagon__left[state]);
  const hexagonRight = clsx(stylesByKind.hexagon__right[kind], stylesByState.hexagon__right[state]);

  return (
    <button className={styles['l-container']} type="button" onClick={onClick}>
      <div className={styles['l-hexagon']}>
        <div className={hexagonLeft} />
        <div className={clsx(stylesByKind.hexagon[kind], stylesByState.hexagon[state])} />
        <div className={hexagonRight} />
      </div>
      {children}
    </button>
  );
}
