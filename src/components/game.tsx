'use client';

import { Question } from '@/models/question';
import { redirect } from 'next/navigation';
import { useState } from 'react';
import route from '@/route';
import styles from './game.module.css';
import AnswerOptionButton from './buttons/answer-option-button/answer-option-button';

export default function Game({ questions }: { questions: Question[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setIsGameOver(true);
      }
    } else {
      setIsGameOver(true);
    }
  };

  if (isGameOver) {
    return redirect(`${route.gameOver}?score=${score}`);
  }

  return (
    <div className={styles['l-game']}>
      <h2 className={styles.question}>{questions[currentIndex].question}</h2>
      <div className={styles['l-answers-container']}>
        {questions[currentIndex].answers.map((answer) => (
          <AnswerOptionButton key={answer.text} onClick={() => handleAnswer(answer.isCorrect)}>
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
