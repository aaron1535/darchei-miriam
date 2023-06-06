import React, { useContext, useState } from 'react';
import styles from './timePicker.module.css';
import { TravelDetailsContext } from './context/traveldetails';



const TimePicker: React.FC = () => {
  const [selectedTime, setSelectedTime] = useState('');
  const {details, setTravelDetails} = useContext(TravelDetailsContext)


  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTime(event.target.value);
    setTravelDetails({...details,
    time: selectedTime})
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>שעת נסיעה:</h3>
      <input
        type="time"
        value={selectedTime}
        className={styles.input}
      />
      <button className={styles.button} onClick={() => handleTimeChange}>
        Select
      </button>
    </div>
  );
};

export default TimePicker;
