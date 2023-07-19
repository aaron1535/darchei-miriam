import React from 'react';
import { Person } from './person_types';

export const Trip_details = ({ person }: { person: Person }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ direction: 'rtl' }}>פרטי נסיעה:</h1>
      <p>{person.first_name} {person.last_name}</p>
      <p>מוצא: {person.address}</p>
      <p>יעד: {person.destination_address}</p>
      <p>מספר נוסעים: {person.passengers}</p>
      <p>תאריך: {person.date}</p>
      <p>שעה: {person.time}</p>
    </div>
  );
};


