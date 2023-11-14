'use client';

import styles from './navbar.module.scss';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const MenuButton = (props) => {
  const isInitialRender = useRef(true);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
    }
  }, [props.isOpen]);

  return (
    <button
      className={`${styles.menuButton} ${props.isOpen ? styles['menuButton--active'] : undefined}`}
      onClick={() => props.setIsOpen(!props.isOpen)}
      aria-label='Menu Button'
    >
      <motion.svg
        className={`${styles.svg} ${props.isOpen ? styles['svg--open'] : styles['svg--closed']}`}
        viewBox='0 0 23 23'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <motion.path
          animate={props.isOpen && !isInitialRender.current ? 'open' : 'closed'}
          variants={{
            closed: { d: 'M 5 2.5 L 21 2.5', transition: { duration: 0.25, ease: 'easeOut' } },
            open: { d: 'M 3 20.5 L 20 2.5 ', transition: { duration: 0.25, ease: 'easeOut' } },
          }}
          initial='closed'
        />
        <motion.path
          animate={props.isOpen && !isInitialRender.current ? 'open' : 'closed'}
          d='M 2 11.423 L 21 11.423'
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
          initial='closed'
        />
        <motion.path
          animate={props.isOpen && !isInitialRender.current ? 'open' : 'closed'}
          variants={{
            closed: { d: 'M 6 20.346 L 21 20.346', transition: { duration: 0.25, ease: 'easeOut' } },
            open: { d: 'M 3 2.5 L 20 20.346', transition: { duration: 0.25, ease: 'easeOut' } },
          }}
          initial='closed'
        />
      </motion.svg>
    </button>
  );
};

export default MenuButton;
