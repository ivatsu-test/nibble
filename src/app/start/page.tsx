import PageLayout from '@/components/page-layout';
import styles from './start-page.module.css';

export default function StartPage() {
  return (
    <PageLayout type="start" btnTitle="Start">
      <h1 className={styles.title}>Who wants to be a millionaire?</h1>
    </PageLayout>
  );
}
