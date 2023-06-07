import { UserAddressInfo } from "../Address";
import React from "react";


export interface TravelDetails {
  id: string;
  assistedId: string;
  assistedFirstName: string;
  assistedLastName: string;
  origin: UserAddressInfo;
  destination: UserAddressInfo;
  date: Date;
  time: string;

}

type TravelDetailsContextType = {
  travelDetails: TravelDetails,
  handleTravelDetails: (t_details: TravelDetails) => void,
}

export const TravelDetailsContext = React.createContext<TravelDetailsContextType>({
  travelDetails: {
    id: '',
    assistedId: '',
    assistedFirstName: '',
    assistedLastName: '',
    origin: {} as UserAddressInfo,
    destination:{} as UserAddressInfo,
    date: {} as Date,
    time: '',
  } ,
  handleTravelDetails: (t_details: TravelDetails) => {}
} )