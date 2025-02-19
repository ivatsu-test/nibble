// TODO: fix eslint warnings
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import { useMemo, useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { useMediaQuery } from 'usehooks-ts';
import { Question } from '@/models/question';
import styles from './prize-section.module.css';
import closeIcon from '../../public/close-icon.svg';
import menuIcon from '../../public/menu-icon.svg';
import AnswerOptionButton from './buttons/answer-option-button/answer-option-button';

export default function PrizeSection({ questions }: { questions: Question[] }) {
  const matchesMinWidth = useMediaQuery('(min-width: 1200px)');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const reversedQuestions = useMemo(() => [...questions].reverse(), [questions]);

  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div>
      {!matchesMinWidth && (
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
          {reversedQuestions.map((question) => (
            <AnswerOptionButton key={question.id} kind={matchesMinWidth ? 'prize-desktop' : 'prize-mobile'} onClick={() => {}}>
              <div className={styles['l-question-prize']}>{question.prize}</div>
            </AnswerOptionButton>
          ))}
        </div>
      </div>
      <div className={clsx(styles.overlay, isMenuOpen && styles['overlay--active'])} onClick={handleMenuClick} />
    </div>
  );
}
