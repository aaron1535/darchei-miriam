import React from "react";
import RidesTable from "./rides-table";
import ridesData from './open-rides.json';

export default function OpenRides() {
  const rides = ridesData.rides;
  return (
    <main>
      <div>
        <h1>Rides</h1>
        <RidesTable rides={rides} />
      </div>
    </main>
  );
}