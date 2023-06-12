import { useContext } from 'react';
import { TravelDetailsContext } from './context/traveldetails';

const CompanionsInput: React.FC = () =>  {
  const { travelDetails, handleTravelDetails } = useContext(TravelDetailsContext);
  
  const handleCompanionsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(event.target.value);
    handleTravelDetails({ ...travelDetails, companions: value });
  };


  return (
    <div>
      <label htmlFor="companions">מספר מלווים</label>
      <select id="companions" name="companions" value={travelDetails.companions} onChange={handleCompanionsChange}>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </div>
  );
}

export default CompanionsInput;