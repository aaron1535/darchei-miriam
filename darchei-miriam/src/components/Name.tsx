
import React, { useEffect, useContext, useState, useCallback } from "react";
import styles from './css/Name.module.css';
import { TravelDetailsContext } from "./context/traveldetails";

const Name: React.FC = () => {
  const { travelDetails, handleTravelDetails } = useContext(TravelDetailsContext);
  const [isUpdated, setIsUpdated] = useState(false);

  const updateTravelDetails = useCallback(
    (assistedId: string) => {
      if (assistedId === "123456789") {
        handleTravelDetails({
          ...travelDetails,
          assistedFirstName: "אהרן",
          assistedLastName: "זוננפלד"
        });
      } else {
        handleTravelDetails({
          ...travelDetails,
          assistedFirstName: '',
          assistedLastName: '',
        });
      }
      console.log(travelDetails)
    },
    [travelDetails, handleTravelDetails]
  );

  useEffect(() => {
    if (!isUpdated) {
      updateTravelDetails(travelDetails.assistedId);
      setIsUpdated(true);
    }
  }, [travelDetails.assistedId, isUpdated, updateTravelDetails]);

  useEffect(() => {
    setIsUpdated(false);
  }, [travelDetails.assistedId]);

  if (!travelDetails.assistedId) {
    return (
      <h2>הכנס ת"ז מסתייע</h2>
    );
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Handle form submission if needed
    event.preventDefault();
  };

  return (
    <form className={styles.name} onSubmit={handleSubmit}>
      <label htmlFor="first-name">שם פרטי:</label>
      <input
        type="text"
        name="first-name"
        value={travelDetails.assistedFirstName}
        readOnly
      />
      <label htmlFor="last-name">שם משפחה:</label>
      <input
        type="text"
        name="last-name"
        value={travelDetails.assistedLastName}
        readOnly
      />
      {/* <button type="submit">Submit</button> */}
    </form>
  );
};

export default Name;