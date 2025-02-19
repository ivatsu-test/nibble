import clsx from 'clsx';
import Image from 'next/image';
import styles from './page-layout.module.css';
import StartButton from './buttons/start-button/start-button';

interface PageLayoutProps extends React.PropsWithChildren {
  btnTitle: string;
  type: 'start' | 'game-over';
}

export default function PageLayout(props: PageLayoutProps) {
  const { btnTitle, children, type } = props;
  return (
    <div className={clsx(styles['l-page__container'], styles['l-page-bg'], type === 'start' ? styles['l-page-bg__start'] : styles['l-page-bg__game-over'])}>
      <div className={styles['img-wrapper']}>
        <Image
          src="/hand@2x.png"
          alt="Thumbs up"
          fill
        />
      </div>
      <div className={styles['l-title-n-btn-wrapper']}>
        {children}
        <StartButton text={btnTitle} />
      </div>
    </div>
  );
}
