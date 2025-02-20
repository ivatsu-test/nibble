'use client';

import { redirect } from 'next/navigation';
import { Question } from '@/models/question';
import route from '@/route';
import useGameStore from '@/store/gameStore';
import AnswerOptionButton from './buttons/answer-option-button/answer-option-button';
import styles from './game.module.css';

export default function Game({ questions }: { questions: Question[] }) {
  const {
    currentQuestionIndex, score, isGameOver, setCurrentQuestionIndex, incrementScore, setGameOver,
  } = useGameStore();

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      incrementScore();
      if (currentQuestionIndex + 1 < questions.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setGameOver();
      }
    } else {
      setGameOver();
    }
  };

  if (isGameOver) {
    return redirect(`${route.gameOver}?score=${score}`);
  }

  return (
    <div className={styles['l-game']}>
      <h2 className={styles.question}>{questions[currentQuestionIndex].question}</h2>
      <div className={styles['l-answers-container']}>
        {questions[currentQuestionIndex].answers.map((answer) => (
          <AnswerOptionButton key={answer.text} kind="default" onClick={() => handleAnswer(answer.isCorrect)} state="default">
            <div className={styles['l-answer']}>
              <span className={styles.answer__option}>{answer.option}</span>
              <span className={styles.answer__text}>{answer.text}</span>
            </div>
          </AnswerOptionButton>
        ))}
      </div>
    </div>
  );
}
