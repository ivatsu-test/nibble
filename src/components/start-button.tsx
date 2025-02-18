'use client';

import { redirect } from 'next/navigation';
import route from '@/route';
import styles from './start-button.module.css';

export default function StartButton() {
  return (
    <button type="button" className={styles.button} onClick={() => redirect(route.game)}>Start</button>
  );
}
