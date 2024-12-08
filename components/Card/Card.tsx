import React, { useState } from 'react';
import styles from './Card.module.css';

interface CardProps {
  cardTitle: string;
  cardText: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ cardTitle, cardText, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardClass = isHovered ? `${styles.cardContainer} ${styles.cardContainerHover}` : styles.cardContainer;

  return (
    <div
      className={cardClass}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {cardTitle && <h2 className={styles.cardTitle}>{cardTitle}</h2>}
      {cardText && <p className={styles.cardContent}>{cardText}</p>}
      {children}
    </div>
  );
};

export default Card;
