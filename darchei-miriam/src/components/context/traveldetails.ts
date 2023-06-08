
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
    origin: { city: "", street: "", number: '' },
    destination:{ city: "", street: "", number: '' },
    date: {} as Date,
    time: '',
  } ,
  handleTravelDetails: (t_details: TravelDetails) => {}
} )