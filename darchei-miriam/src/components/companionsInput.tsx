import { useContext } from 'react';
import { TravelDetailsContext } from './context/traveldetails';
import styles from './css/companions.module.css';


const CompanionsInput: React.FC = () => {
  const { travelDetails, handleTravelDetails } = useContext(TravelDetailsContext);

  const handleCompanionsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(event.target.value);
    handleTravelDetails({ ...travelDetails, companions: value });
  };


  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <label htmlFor="my-select" className={styles.label}>מלווים נוספים</label>
        <select id="my-select" className={styles.select} value={travelDetails.companions} onChange={handleCompanionsChange}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
    </div>
  );
}

export default CompanionsInput;