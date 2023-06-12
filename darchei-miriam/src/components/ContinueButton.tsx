import { useState } from 'react';
import Link from 'next/link';
import styles from './ContinueButton.module.css';

const ContinueButton: React.FC = () => {

    return (
        <>
        
            <Link href='/Add-ride/Advance_details' className={styles.button}>פרטים נוספים </Link>
            <Link href="" className={styles.button}>חפש נהג </Link>
            <Link href="" className={styles.button}>לטיפול בהמשך </Link>
        </>

    );
}

export default ContinueButton;