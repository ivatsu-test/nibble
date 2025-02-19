// TODO: fix eslint warnings
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import Image from 'next/image';

import { useState } from 'react';
import clsx from 'clsx';
import closeIcon from '../../public/close-icon.svg';
import menuIcon from '../../public/menu-icon.svg';
import styles from './prize-section.module.css';

export default function PrizeSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div>
      <button type="button" className={styles['menu-btn']} onClick={() => handleMenuClick()}>
        <Image
          priority
          src={isMenuOpen ? closeIcon : menuIcon}
          alt={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </button>
      <div className={clsx(styles['prize-section'], isMenuOpen && styles['prize-section--active'])}>
        prize section
      </div>
      <div className={clsx(styles.overlay, isMenuOpen && styles['overlay--active'])} onClick={handleMenuClick} />
    </div>
  );
}
