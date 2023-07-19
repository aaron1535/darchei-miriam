
import { UserAddressInfo } from "../Address";
import React from "react";

export interface TravelDetails {
  id: string;
  assistedId: string;
  assistedGender: "male" | "female" | null ;
  assistedFirstName: string;
  assistedLastName: string;
  origin: UserAddressInfo;
  destination: UserAddressInfo;
  date: Date;
  time: string;
  companions: number;
  accessibility_state: "standard" | "wheelchair" | "chairlift" ;

}

type TravelDetailsContextType = {
  travelDetails: TravelDetails,
  handleTravelDetails: (t_details: TravelDetails) => void,
}

export const TravelDetailsContext = React.createContext<TravelDetailsContextType>({
  travelDetails: {
    id: '',
    assistedId: '',
    assistedGender: null,
    assistedFirstName: '',
    assistedLastName: '',
    origin:{} as UserAddressInfo,
    destination:{} as UserAddressInfo,
    date: {} as Date,
    time: '',
    companions: 0,
    accessibility_state: 'standard'
    
  } ,
  handleTravelDetails: (t_details: TravelDetails) => {}
} )