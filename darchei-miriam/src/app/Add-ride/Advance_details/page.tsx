'use client'

import { useContext } from 'react';
import styles from './AdvancedDetails.module.css';
import { TravelDetailsContext } from '../../../components/context/traveldetails';
import Accessibility from '../../../components/AccessibilitySelection';
import CompanionsInput from '../../../components/companionsInput';

interface Props {
  onClose: () => void;
}

function AdvancedDetails(props: Props) {
  const { onClose } = props;
  const { travelDetails, handleTravelDetails } = useContext(TravelDetailsContext);

  return (
    <div className={styles.container}>
      <div className={styles.window}>
        <h2>Advanced Details</h2>
        <Accessibility />
        <CompanionsInput />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default AdvancedDetails;