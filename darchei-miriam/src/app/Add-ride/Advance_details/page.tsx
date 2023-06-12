'use client'

import Accessibility from "@/components/AccessibilitySelection";
import CompanionsInput from "@/components/companionsInput";
import { TravelDetails, TravelDetailsContext } from "@/components/context/traveldetails";
import { useContext } from "react";

const advancedDetails: React.FC = () => {

    const { travelDetails, handleTravelDetails } = useContext(TravelDetailsContext);

    return (
        <>
            <TravelDetailsContext.Provider value={{ travelDetails, handleTravelDetails }}>

            <div style={{ textAlign: 'center', direction: 'rtl' }}>
            <h1 className="h1">פרטים נוספים</h1>
            <Accessibility />
            <CompanionsInput />


            </div>
            </TravelDetailsContext.Provider>

        </>
    )

}

export default advancedDetails