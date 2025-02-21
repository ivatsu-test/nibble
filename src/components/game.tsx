'use client';

import { redirect } from 'next/navigation';
import { useState } from 'react';
import { Answer, Question } from '@/models/question';
import route from '@/route';
import useGameStore from '@/store/game-store';
import AnswerOptionButton, { AnswerState } from './buttons/answer-option-button/answer-option-button';
import styles from './game.module.css';

function getAnswerState({ answer, answerOption, answerState }: {answer: Answer; answerOption: Answer['option'] | null; answerState: AnswerState}) {
  if (answerOption === answer.option && answerState === 'selected') {
    return 'selected';
  }
  if (answerOption === answer.option && answer.isCorrect && answerState === 'correct') {
    return 'correct';
  }
  if (answerOption === answer.option && !answer.isCorrect && answerState === 'wrong') {
    return 'wrong';
  }
  return 'default';
}

export default function Game({ questions }: { questions: Question[] }) {
  const {
    currentQuestionIndex, isGameOver, setCurrentQuestionIndex, setPrize, setGameOver,
  } = useGameStore();
  const [answerOption, setAnswerOption] = useState<Answer['option'] | null>(null);
  const [answerState, setAnswerState] = useState<AnswerState>('default');

  const handleAnswer = async (answer: Answer) => {
    setAnswerOption(answer.option);
    setAnswerState('selected');
    await new Promise((resolve) => { setTimeout(resolve, 1000); });

    if (answer.isCorrect) {
      setAnswerState('correct');
      await new Promise((resolve) => { setTimeout(resolve, 1000); });

      setPrize(questions[currentQuestionIndex].prize);
      if (currentQuestionIndex + 1 < questions.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setGameOver();
      }
    } else {
      setAnswerState('wrong');
      await new Promise((resolve) => { setTimeout(resolve, 1000); });
      setGameOver();
    }

    setAnswerOption(null);
    setAnswerState('default');
  };

  function getState(answer: Answer) {
    return getAnswerState({ answer, answerOption, answerState });
  }

  if (isGameOver) {
    return redirect(route.gameOver);
  }

  return (
    <div className={styles['l-game']}>
      <h2 className={styles.question}>{questions[currentQuestionIndex].question}</h2>
      <div className={styles['l-answers-container']}>
        {questions[currentQuestionIndex].answers.map((answer) => (
          <AnswerOptionButton key={answer.text} kind="default" onClick={() => handleAnswer(answer)} state="default" answerState={getState(answer)}>
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
