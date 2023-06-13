

import React, { useContext, useState } from 'react';
import './css/sharedStyles.css';
import { TravelDetailsContext } from './context/traveldetails';




const DatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date);
  const {travelDetails, handleTravelDetails} = useContext(TravelDetailsContext)


  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue) {
      setSelectedDate(new Date(inputValue));
      handleTravelDetails({...travelDetails,
      date: selectedDate!})
    } else {
      setSelectedDate(new Date);
    }
  };

  const handleDateSelect = () => {
    handleTravelDetails({ ...travelDetails, date: selectedDate });
  };

  return (
    <div className="datePickerContainer">
      <h3 className="datePickerHeader">תאריך נסיעה:</h3>
      <input
        type="date"
        value={selectedDate ? selectedDate.toISOString().split('T')[0] : ''}
        onChange={handleDateChange}
        className="datePickerInput"
      />
      <button onClick={handleDateSelect} className="datePickerButton">
        שמירת תאריך
      </button>
    </div>
  );
};

export default DatePicker;
