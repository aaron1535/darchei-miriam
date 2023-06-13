import { useState, useContext } from 'react';
import styles from './css/Accessibility.module.css';
import { TravelDetailsContext } from './context/traveldetails';

type AccessibilityState = 'standard' | 'wheelchair' | 'chairlift';


const Accessibility: React.FC = () => {
    const { travelDetails, handleTravelDetails } = useContext(TravelDetailsContext);
    const [accessibilityState, setAccessibilityState] = useState(travelDetails.accessibility_state);
  
    function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
      const value = event.target.value as AccessibilityState;
      setAccessibilityState(value);
      handleTravelDetails({
        ...travelDetails,
        accessibility_state: value,
      });
      console.log(travelDetails);
    }
  
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>נגישות</h2>
        <div className={styles['checkbox-group']}>
  
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              id="standard"
              name="standard"
              value="standard"
              checked={accessibilityState === 'standard'}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="standard">סטנדרט</label>
          </div>
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              id="wheelchair"
              name="wheelchair"
              value="wheelchair"
              checked={accessibilityState === 'wheelchair'}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="wheelchair">כסא גלגלים</label>
          </div>
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              id="chairlift"
              name="chairlift"
              value="chairlift"
              checked={accessibilityState === 'chairlift'}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="chairlift">מעלון</label>
          </div>
        </div>
      </div>
    );
  };
  
  export default Accessibility;