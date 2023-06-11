'use client'
import React, { useState } from 'react';
import FindDriverButton from './find-driver-button';
import DeleteRideButton from './delete-ride-button';
import EditRideButton from './edit-ride-button';
import styles from './page.module.css'; // Import the CSS stylesheet

export interface Ride {
  id: string;
  first_name: string;
  last_name: string;
  phone: string;
  origin: string;
  destination: string;
  date: string;
  time: string;
  companions: number;
  accessibility_state: "standard" | "wheelchair" | "chairlift";
}

export interface OpenRidesList {
  rides: Ride[];
}

export const RidesTable: React.FC<OpenRidesList> = ({ rides }: { rides: Ride[] }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredRides = rides.filter((ride) =>
    ride.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ride.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ride.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ride.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ride.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ride.time.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        className={styles.searchInput}
      />
      <div className={styles.tableContainer}>
        <table className={styles.ridesTable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Origin</th>
              <th>Destination</th>
              <th>Date</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredRides.map((ride, index) => (
              <tr key={index} className={styles.tableRow}>
                <td>{ride.id}</td>
                <td>{ride.first_name}</td>
                <td>{ride.last_name}</td>
                <td>{ride.origin}</td>
                <td>{ride.destination}</td>
                <td>{ride.date}</td>
                <td>{ride.time}</td>
                <td>
                  <FindDriverButton id={ride.id}/>
                  <DeleteRideButton id={ride.id}/>
                  <EditRideButton id={ride.id}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RidesTable;

