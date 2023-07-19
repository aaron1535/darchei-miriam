import Link from 'next/link';
import styles from './page.module.css'

export default function Page() {
  return (
    <div className={styles.page}>
      <h1 className={styles.headline}>טיוטת מערכת דרכי מרים</h1>
      <div className={styles.buttonContainer}>
        <Link href="/Add-ride" passHref>
          <button className={styles.button}>הוספת נסיעה חדשה</button>
        </Link>
        <Link href="/open-rides" passHref>
          <button className={styles.button}>נסיעות פתוחות</button>
        </Link>
        <Link href="" passHref>
          <button className={styles.button}>נסיעות סגורות</button>
        </Link>
      </div>
    </div>
  );
}