import React from 'react';

interface Person {
    first_name: string;
    last_name: string;
    source_address: string;
    destination_address: string;
    passengers: number;
    date: string;
    time: string;
    phone: string;
  }
  
  interface PassengersTableProps {
    people: Person[];
  }

  export const TripDetails = ({ person }: { person: Person }) => {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>{person.first_name} {person.last_name}</h1>
        <p>Output: {person.source_address}</p>
        <p>Destination: {person.destination_address}</p>
        <p>Number of passengers: {person.passengers}</p>
        <p>Date: {person.date}</p>
        <p>Time: {person.time}</p>
      </div>
    );
  };

  export const PassengersTable = ({ people }: PassengersTableProps) => {
    return (
      <div style={{ textAlign: 'right', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
        <table style={{ borderCollapse: 'collapse', border: '1px solid black', direction: 'rtl' }}>
          <thead>
            <tr style={{ textAlign: 'center'}}>
              <th style={{ border: '1px solid black', padding: '5px' }}>Name</th>
              <th style={{ border: '1px solid black', padding: '5px' }}>Address</th>
              <th style={{ border: '1px solid black', padding: '5px' }}>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {people.map((person, index) => (
              <tr key={index}>
                <td style={{ border: '1px solid black', padding: '5px' }}>{person.first_name} {person.last_name}</td>
                <td style={{ border: '1px solid black', padding: '5px' }}>{person.source_address}</td>
                <td style={{ border: '1px solid black', padding: '5px' }}>{person.phone}</td>
                <td style={{ border: '1px solid black', padding: '5px' }}><button>בצע שידוך</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

