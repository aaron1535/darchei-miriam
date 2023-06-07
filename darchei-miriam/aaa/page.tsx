'use client'

import Address from "@/components/Address";
import DatePicker from "@/components/DatePicker";
import IdInput from "@/components/IdInput";
import Name from "@/components/Name";
import TimePicker from "@/components/TimePicker";
import { TravelDetailsContext, TravelDetails } from "@/components/context/traveldetails";
import React, { useEffect, useState } from "react";

const add_ride: React.FC = () => {
  const [travelDetails, setTravelDetails] = useState({} as TravelDetails);

  const handleTravelDetails = (t_d: TravelDetails) => {
    setTravelDetails(t_d);
  };

  return (
    <TravelDetailsContext.Provider value={{ travelDetails, handleTravelDetails }}>
      <div style={{ textAlign: 'center', direction: 'rtl' }}>
        <h1 className="h1">הוספת נסיעה חדשה</h1>
        <IdInput />
        <Name />
        <Address origen={true} />
        <Address origen={false} />
        <DatePicker />
        <TimePicker />
        <div>
          <button>פרטים נוספים</button>
          <button>חפש נהג</button>
          <button>שמור לטיפול בהמשך</button>
        </div>
      </div>
    </TravelDetailsContext.Provider>
  );
};

export default add_ride;
