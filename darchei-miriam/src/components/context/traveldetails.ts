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
  details: TravelDetails,
  setTravelDetails: (details: TravelDetails) => void,
}

export const TravelDetailsContext = React.createContext<TravelDetailsContextType>({} as TravelDetailsContextType)