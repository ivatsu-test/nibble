import PageLayout from '@/components/page-layout';
import styles from './game-over-page.module.css';

export default function GameOverPage() {
  return (
    <PageLayout type="game-over" btnTitle="Try again">
      <div className={styles.text}>
        <p className={styles.score}>Total score:</p>
        <p className={styles.amount}>$1,000 earned</p>
      </div>
    </PageLayout>
  );
}
