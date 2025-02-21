// TODO: fix eslint warnings
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import clsx from 'clsx';
import { useMemo, useState } from 'react';
import Image from 'next/image';
import { useMediaQuery } from 'usehooks-ts';
import { Question } from '@/models/question';
import useGameStore from '@/store/game-store';
import closeIcon from '../../public/close-icon.svg';
import menuIcon from '../../public/menu-icon.svg';
import AnswerOptionButton from './buttons/answer-option-button/answer-option-button';
import styles from './prize-section.module.css';

const answerOptionButtonState = ({ questionId, currentQuestionIndex }: {
  questionId: number;
  currentQuestionIndex: number;
}) => {
  const currentQuestionId = currentQuestionIndex + 1;
  if (questionId === currentQuestionId) {
    return 'active';
  }
  if (questionId < currentQuestionId) {
    return 'inactive';
  }
  return 'default';
};

export default function PrizeSection({ questions }: { questions: Question[] }) {
  const { currentQuestionIndex } = useGameStore();
  const isDesktop = useMediaQuery('(min-width: 1200px)');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const reversedQuestions = useMemo(() => [...questions].reverse(), [questions]);

  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  function buttonState(questionId: number) {
    return answerOptionButtonState({ questionId, currentQuestionIndex });
  }

  return (
    <div>
      {!isDesktop && (
        <button type="button" className={styles['menu-btn']} onClick={() => handleMenuClick()}>
          <Image
            priority
            src={isMenuOpen ? closeIcon : menuIcon}
            alt={isMenuOpen ? 'Close menu' : 'Open menu'}
          />
        </button>
      )}

      <div className={clsx(styles['prize-section'], isMenuOpen && styles['prize-section--active'])}>
        <div className={styles['prize-section__items']}>
          {reversedQuestions.map((question) => {
            const state = buttonState(question.id);
            return (
              <AnswerOptionButton key={question.id} kind={isDesktop ? 'prize-desktop' : 'prize-mobile'} onClick={() => {}} state={state} answerState="default">
                <div className={clsx(styles['l-question-prize'], state === 'active' && styles['question-prize__title--active'])}>{question.prize}</div>
              </AnswerOptionButton>
            );
          })}
        </div>
      </div>
      <div className={clsx(styles.overlay, isMenuOpen && styles['overlay--active'])} onClick={handleMenuClick} />
    </div>
  );
}
