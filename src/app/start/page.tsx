import Image from 'next/image';
import clsx from 'clsx';
import StartButton from '@/components/buttons/start-button/start-button';
import styles from './start-page.module.css';

export default function StartPage() {
  return (
    <div className={clsx(styles['l-smart-page'], styles['smart-page-bg'])}>
      <div className={styles['img-wrapper']}>
        <Image
          src="/hand@2x.png"
          alt="Thumbs up"
          fill
        />
      </div>
      <div className={styles['l-title-n-btn-wrapper']}>
        <h1 className={styles.title}>Who wants to be a millionaire?</h1>
        <StartButton />
      </div>
    </div>
  );
}
