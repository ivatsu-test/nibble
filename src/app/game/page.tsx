import Game from '@/components/game';
import { questionsSchema } from '@/models/question';
import PrizeSection from '@/components/prize-section';
import questions from '../../data/questions.json';
import styles from './game-page.module.css';

export default function GamePage() {
  const res = questionsSchema.safeParse(questions);

  if (!res.success) {
    throw new Error('Failed to parse questions');
  }

  return (
    <div className={styles['l-game-page']}>
      <Game questions={res.data} />
      <PrizeSection questions={res.data} />
    </div>
  );
}
