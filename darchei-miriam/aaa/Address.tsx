// 'use client'

import React, { useContext, useEffect, useState } from 'react';
import styles from "./Address.module.css";
import { TravelDetails, TravelDetailsContext } from './context/traveldetails';


interface AddressProps {
  origen: boolean;
}

export interface UserAddressInfo {
  city: string;
  street: string;
  number: string;
}

const Address: React.FC<AddressProps> = ({ origen }) => {
  const [userAddressInfo, setUserAddressInfo] = useState<UserAddressInfo>({} as UserAddressInfo);
  const { travelDetails, handleTravelDetails } = useContext(TravelDetailsContext)


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log(userAddressInfo); 
    handleTravelDetails({
      ...travelDetails,
    });
  }

  useEffect(() => {

    if (travelDetails.assistedId === "123456789") {
      // fetchUserAddressInfo();
      handleTravelDetails({ ...travelDetails, origin: { city: "ירושלים", street: "ראובן מס", number: '137' } })
    } else {
      handleTravelDetails({ ...travelDetails, origin: { city: "", street: "", number: '' } })
    }
    // if(!details.assistedId){
    //   setTravelDetails({ ...details, origin: { city: "", street: "", number: '' } })
    // }
  }, [travelDetails.assistedId]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    handleTravelDetails(({
      ...travelDetails,
      origin: {
        ...travelDetails.origin,
        [name]: value,
      },
    }));
  };

  return (
    <>
    { travelDetails.origin && (<form className={styles.address} /*onChange={handleSubmit}*/>
      <h3>{origen ? "מוצא" : "יעד"}</h3>
     <label htmlFor="city">עיר:</label>
      <input
        type="text"
        name="city"
        value={ origen ? travelDetails.origin.city : ''}
        onChange={handleInputChange}
      />

      <label htmlFor="street">רחוב:</label>
      <input
        type="text"
        id="street"
        name="street"
        value={ origen ? travelDetails.origin.street : ''}
        onChange={handleInputChange}
      />

      <label htmlFor="home-number">מספר:</label>
      <input
        type="text"
        id="home-number"
        name="number"
        value={ origen ? travelDetails.origin.number : ''}
        onChange={handleInputChange}
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