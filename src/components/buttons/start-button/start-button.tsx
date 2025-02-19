'use client';

import { redirect } from 'next/navigation';
import route from '@/route';
import styles from './start-button.module.css';

export default function StartButton({ text }: {text: string}) {
  return (
    <button type="button" className={styles.button} onClick={() => redirect(route.game)}>{text}</button>
  );
}
