'use client';

import { useState } from 'react';
import './Button.scss';
import { motion } from 'framer-motion';

const Button = (props) => {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <motion.button
      className={`button button--${props.style} ${props.className} ${hovered ? props.hoveredClassName : undefined} ${
        active ? props.activeClassName : undefined
      }`}
      style={{ ...props.styles }}
      onClick={props.onClick ? () => props.onClick() : undefined}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => {
        setActive(false);
        setHovered(false);
      }}
      type={props.type}
      disabled={props.disabled}
      initial={props.btnInitial}
      animate={props.btnAnimate}
      exit={props.btnExit}
      variants={props.btnVariants}
      transition={props.btnTransition}
    >
      {props.iconBefore && props.iconBefore}
      {props.text && (
        <span className={`button-text ${props.textClassName} button-text--${props.style}`}>{props.text}</span>
      )}
      {props.icon && props.icon}
      {props.iconAfter && props.iconAfter}
      {props.svgInitial && (
        <motion.svg
          className={`button-svg ${props.style}-svg ${props.svgClassName}`}
          xmlns='http://www.w3.org/2000/svg'
          viewBox={props.viewBox} // Since all view boxes should be the same, (since svgs are morphing between each other).
          fill='none' // Fill none since stoke is what needs to be animated
        >
          <motion.path
            initial={props.svgInitial}
            animate={props.svgAnimate}
            variants={props.svgVariants}
            transition={props.svgTransition}
            d={props.svgInitialPath}
          />
        </motion.svg>
      )}
    </motion.button>
  );
};

export default Button;
