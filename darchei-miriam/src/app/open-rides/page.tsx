import React from "react";
import RidesTable from "./rides-table";
import ridesData from './open-rides.json';
import styles from './page.module.css';
import { Ride } from "./rides-table";

export default function OpenRides() {
  const rides: Ride[] = ridesData.rides.map((ride: Ride) => ({
    id: ride.id,
    first_name: ride.first_name,
    last_name: ride.last_name,
    phone: ride.phone,
    origin: ride.origin,
    destination: ride.destination,
    date: ride.date,
    time: ride.time,
    companions: ride.companions,
    accessibility_state: ride.accessibility_state
  }));

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Open rides</h1>
        <RidesTable rides={rides} />
      </div>
    </main>
  );
}
