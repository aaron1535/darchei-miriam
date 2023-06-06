// 'use client'


import React, { useState, useEffect, useContext } from "react";
import styles from './Name.module.css';
import { TravelDetailsContext } from "./context/traveldetails";


export interface UserNameDetails {
  first_name: string;
  last_name: string;
}

const Name: React.FC = () => {
  const { details, setTravelDetails } = useContext(TravelDetailsContext)
  useEffect(() => {
    // Make API request when idNumber changes
    // const fetchUserNameDetails = async () => {
    //   try {
    //     // const response = await fetch(`https://example.com/api/user/${idNumber}`);
    //     // const data = await response.json();
    //     const data = localStorage.getItem("idNumber");
    //     // setUserNameDetails(data);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    if (details.assistedId === "123456789") {
      // fetchUserNameDetails();
      setTravelDetails({
        ...details,
        assistedFirstName: "אהרן",
        assistedLastName: "זוננפלד"
      });

    } else {
      setTravelDetails({...details, assistedFirstName:'',assistedLastName:'',})
    }
  }, [details.assistedId]);


  if (!details.assistedId) {
    return (
      <h2>הכנס ת"ז מסתייע</h2>
    );
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

  };

  return (
    <form className={styles.name} onChange={handleSubmit}>
      <label htmlFor="first-name">שם פרטי:</label>
      <input
        type="text"
        name="first-name"
        value={details.assistedFirstName}
        readOnly
      />
      <label htmlFor="last-name">שם משפחה:</label>
      <input
        type="text"
        name="last-name"
        value={details.assistedLastName}
        readOnly
      />

    </form>
  );
};


export default Name;