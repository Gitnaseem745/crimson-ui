import React, { useState } from 'react';
import styles from '../Button.module.css';

interface ButtonProps {
  onClick?: () => void;
  children: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const buttonClass = isHovered ? `${styles.button} ${styles.buttonHover}` : styles.button;
  return (
    <button
      className={buttonClass}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
};

export default Button;
