'use client';

import { redirect } from 'next/navigation';
import route from '@/route';
import useGameStore from '@/store/gameStore';
import styles from './start-button.module.css';

export default function StartButton({ text }: {text: string}) {
  const { setGameStart } = useGameStore();

  function handleClick() {
    setGameStart();
    redirect(route.game);
  }

  return (
    <button type="button" className={styles.button} onClick={handleClick}>{text}</button>
  );
}
