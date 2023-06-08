
import React, { useContext, useEffect, useState } from 'react';
import styles from "./Address.module.css";
import { TravelDetails, TravelDetailsContext } from './context/traveldetails';


interface AddressProps {
  pickup: boolean;
}

export interface UserAddressInfo {
  city: string;
  street: string;
  number: string;
}

const Address: React.FC<AddressProps> = ({ pickup }) => {
  const { travelDetails, handleTravelDetails } = useContext(TravelDetailsContext)

  useEffect(() => {
  
    if (travelDetails.assistedId === "123456789" && pickup) {
      // fetchUserAddressInfo();
      handleTravelDetails({ ...travelDetails, origin: { city: "ירושלים", street: "ראובן מס", number: '137' } })
    } else if(pickup) {
      handleTravelDetails({ ...travelDetails, origin: { city: "", street: "", number: '' } })
      handleTravelDetails({ ...travelDetails, destination: { city: "", street: "", number: '' } })

    } else {
      handleTravelDetails({ ...travelDetails, destination: { city: "", street: "", number: '' } })
    }
    

  }, [travelDetails.assistedId]);


  const handleOriginInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    handleTravelDetails(({
      ...travelDetails,
      origin : {
        ...travelDetails.origin,
        [name]: value,
      },
    }));
  };

  const handleDestinationInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    handleTravelDetails(({
      ...travelDetails,
      destination : {
        ...travelDetails.destination,
        [name]: value,
      },
    }));
  };

  return (
    <>
    { travelDetails.origin && travelDetails.destination && (
    <form className={styles.address} /*onChange={handleSubmit}*/>
      <h3>{pickup ? "מוצא" : "יעד"}</h3>
     <label htmlFor="city">עיר:</label>
      <input
        type="text"
        name="city"
        value={ pickup ? travelDetails.origin.city : travelDetails.destination.city }
        onChange={pickup ? handleOriginInputChange: handleDestinationInputChange }
      />

      <label htmlFor="street">רחוב:</label>
      <input
        type="text"
        id="street"
        name="street"
        value={ pickup ? travelDetails.origin.street : travelDetails.destination.street}
        onChange={pickup ? handleOriginInputChange: handleDestinationInputChange }
      />

      <label htmlFor="home-number">מספר:</label>
      <input
        type="text"
        id="home-number"
        name="number"
        value={ pickup ? travelDetails.origin.number : travelDetails.destination.number}
        onChange={pickup ? handleOriginInputChange: handleDestinationInputChange }
      />

    </form>)}
    </>
  );
};

export default Address;











// Make API request when idNumber changes
// const fetchUserAddressInfo = async () => {
//     try {
//     // const response = await fetch(`https://example.com/api/user/${idNumber}`);
//     // const data = await response.json();
//     const data = localStorage.getItem("idNumber");
//     // setUserAddressInfo(data);
//     } catch (error) {
//     console.error(error);
//     }
// };