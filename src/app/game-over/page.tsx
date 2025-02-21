// TODO: move client part of the code to the components

'use client';

import PageLayout from '@/components/page-layout';
import useGameStore from '@/store/game-store';
import styles from './game-over-page.module.css';

export default function GameOverPage() {
  const { prize } = useGameStore();
  return (
    <PageLayout type="game-over" btnTitle="Try again">
      <div className={styles.text}>
        {prize ? (
          <>
            <p className={styles.score}>Total score:</p>
            <p className={styles.amount}>
              {prize}
              {' '}
              earned
            </p>
          </>
        ) : (
          <p className={styles.amount}>You lost</p>
        )}
      </div>
    </PageLayout>
  );
}
