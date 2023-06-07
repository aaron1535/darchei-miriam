import React, { useContext, useState } from 'react';
import './DatePicker.css';
import { TravelDetailsContext } from './context/traveldetails';




const DatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const {travelDetails, handleTravelDetails} = useContext(TravelDetailsContext)


  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue) {
      setSelectedDate(new Date(inputValue));
      handleTravelDetails({...travelDetails,
      date: selectedDate!})
    } else {
      setSelectedDate(null);
    }
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
    </div>
  );
};

export default DatePicker;
