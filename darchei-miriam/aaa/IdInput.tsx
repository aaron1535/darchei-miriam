// 'use client'

import React, { useContext, useState } from "react";
import styles from "./IdInput.module.css";
import { TravelDetailsContext } from "./context/traveldetails";




const IdInput: React.FC = () => {
  const [idNumber, setIdNumber] = useState('');
  const {travelDetails, handleTravelDetails} = useContext(TravelDetailsContext)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIdNumber(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    handleTravelDetails({...travelDetails, assistedId: idNumber}); 
  };

  return (
    <form className={styles.idInput} onSubmit={handleSubmit}>
      <label htmlFor="idNumberInput">מספר זהות:</label>
      <input
        type="text"
        id="idNumberInput"
        name="idNumber"
        value={idNumber}
        onChange={handleInputChange}
        maxLength={9}
        // minLength={7}
        pattern="[0-9]{7-9}"
        // required
      />
      <button type="submit">חיפוש</button>
    </form>
  );
};

export default IdInput;