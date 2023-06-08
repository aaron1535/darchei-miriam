import React from 'react';
import FindDriverButton from './find-driver-button';
import DeleteRideButton from './delete-ride-button';
import EditRideButton from './edit-ride-button';

interface Ride {
  id : string;
  first_name: string;
  last_name: string;
  phone: string;
  origin: string;
  destination: string;
  date: string;
  time: string;
  number_of_companions: number;
  accessibility_state: "standard" | "wheelchair" | "chairlift"| string;
}

interface RidesData {
  rides: Ride[];
}

const RidesTable: React.FC<RidesData> = ({ rides }: {rides: Ride[]}) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Date</th>
            <th>Time</th>
            <th>Companions</th>
            <th>Accessibility</th>
          </tr>
        </thead>
        <tbody>
          {rides.map((ride, index) => (
            <tr key={index}>
              <td></td>
              <td>{ride.id}</td>
              <td>{ride.first_name}</td>
              <td>{ride.last_name}</td>
              <td>{ride.phone}</td>
              <td>{ride.origin}</td>
              <td>{ride.destination}</td>
              <td>{ride.date}</td>
              <td>{ride.time}</td>
              <td>{ride.number_of_companions}</td>
              <td>{ride.accessibility_state}</td>
              <td><FindDriverButton id = {ride.id}/></td>
              <td><DeleteRideButton id = {ride.id}/></td>
              <td><EditRideButton id = {ride.id}/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RidesTable;