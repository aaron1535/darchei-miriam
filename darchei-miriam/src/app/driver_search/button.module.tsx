import styles from './button.module.css';

export const Button_under_table = () => {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.buttonStyles}>שמור נסיעה ללא נהג</button>
      <button className={`${styles.buttonStyles} ${styles.buttonRed}`}>מחק נסיעה</button>
    </div>
  );
};