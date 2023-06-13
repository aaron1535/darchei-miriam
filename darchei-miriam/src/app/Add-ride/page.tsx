
'use client'

import React, { useState } from "react";
import Address from "../../components/Address";
import { TravelDetails, TravelDetailsContext } from "../../components/context/traveldetails";
import IdInput from "../../components/IdInput";
import Name from "../../components/Name";
import DatePicker from "../../components/DatePicker";
import TimePicker from "../../components/TimePicker";
import ContinueButton from "../../components/ContinueButton";


const add_ride: React.FC = () => {
    const [travelDetails, setTravelDetails] = useState({} as TravelDetails);

    const handleTravelDetails = (travelDetails: TravelDetails) => {
        setTravelDetails(travelDetails);
    };

    const myConsul = (() => {
        console.log(travelDetails)
    })

    return (
        <TravelDetailsContext.Provider value={{ travelDetails, handleTravelDetails }}>
            <div style={{ textAlign: 'center', direction: 'rtl' }} onChange={myConsul}>
                <h1 className="h1">הוספת נסיעה חדשה</h1>
                <IdInput />
                <Name />
                <Address pickup={true} />
                <Address pickup={false} />
                <DatePicker />
                <TimePicker />
                <ContinueButton />
            </div >
        </TravelDetailsContext.Provider>
    );
};

export default add_ride;
