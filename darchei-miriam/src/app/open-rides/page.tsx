import React from "react";
import RidesTable from "./rides-table";
import ridesData from './open-rides.json';
import styles from './page.module.css';
// import Ride from "./rides-table";
// import { OpenRidesList } from "./rides-table";

export default function OpenRides() {
  const {rides} = ridesData;

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Open rides</h1>
        <RidesTable rides={rides} />
      </div>
    </main>
  );
}
