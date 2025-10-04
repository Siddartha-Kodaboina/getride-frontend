import React from 'react';
import styles from './Card.module.css';

const Card = ({ children, onClick, className = '' }) => {
  const classes = [
    styles.card,
    onClick && styles.clickable,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
};

Card.Header = ({ children }) => (
  <div className={styles.cardHeader}>{children}</div>
);

Card.Title = ({ children }) => (
  <h3 className={styles.cardTitle}>{children}</h3>
);

Card.Subtitle = ({ children }) => (
  <p className={styles.cardSubtitle}>{children}</p>
);

Card.Body = ({ children }) => (
  <div className={styles.cardBody}>{children}</div>
);

Card.Footer = ({ children }) => (
  <div className={styles.cardFooter}>{children}</div>
);

export default Card;
