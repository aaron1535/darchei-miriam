import { useState } from 'react';
import Link from 'next/link';
import styles from './css/ContinueButton.module.css';
import AdvancedDetails from '../app/Add-ride/Advance_details/page';

const ContinueButton: React.FC = () => {
        const [showDetails, setShowDetails] = useState(false);


    function handleDetailsClick() {
        setShowDetails(true);
    }

    function handleCloseDetails() {
        setShowDetails(false);
    }

    return (
        <>
        
            <button onClick={handleDetailsClick} className={styles.button}>פרטים נוספים  </button>
            {showDetails && <AdvancedDetails onClose={handleCloseDetails} />}
            <Link href="/driver_search" className={styles.button}>חפש נהג </Link>
            <Link href="" className={styles.button}>לטיפול בהמשך </Link>
        </>

    );
}

export default ContinueButton;