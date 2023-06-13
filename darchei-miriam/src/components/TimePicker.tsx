import React, { useContext, useState } from 'react';
import './css/sharedStyles.css';
import { TravelDetailsContext } from './context/traveldetails';

const TimePicker: React.FC = () => {
  const [selectedTime, setSelectedTime] = useState('');
  const { travelDetails, handleTravelDetails } = useContext(TravelDetailsContext);

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTime(event.target.value);
  };

  const handleTimeSelect = () => {
    handleTravelDetails({ ...travelDetails, time: selectedTime });
  };

  return (
    <div className="timePickerContainer">
      <h3 className="timePickerHeader">שעת נסיעה:</h3>
      <input
        type="time"
        value={selectedTime}
        onChange={handleTimeChange}
        className="timePickerInput"
      />
      <button onClick={handleTimeSelect} className="timePickerButton">
        שמור שעה
      </button>
    </div>
  );
};

export default TimePicker;

