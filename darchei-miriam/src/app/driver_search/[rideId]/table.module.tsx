'use client'

import { useState, useEffect } from 'react';
import styles from './table.module.css';
import { Person, Driver, TableProps } from './person_types';


export const Drivers_table = ({ people }: TableProps) => {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(5);
  const [drivers, setDrivers] = useState<Driver[]>([]);

  useEffect(() => {
    const updatedDrivers = people.map(person => {
      return {
        ...person,
        isAvailable: true,
        isRelevant : true
      };
    });
    setDrivers(updatedDrivers);
  }, [people]);

  const handleNextClick = () => {
    setStartIndex(endIndex);
    setEndIndex(endIndex + 5);
  };

  const handlePrevClick = () => {
    setEndIndex(startIndex);
    setStartIndex(startIndex - 5);
  };

  function handleRelevantClick(person: Person) {
    const index = drivers.findIndex(p => p === person);
    const updatedDrivers = [...drivers];
    updatedDrivers[index].isRelevant = !updatedDrivers[index].isRelevant;
    setDrivers(updatedDrivers);
  }

  const handleAvailableClick = (person: Person) => {
    const index = drivers.findIndex(p => p === person);
    const updatedDrivers = [...drivers];
    updatedDrivers[index].isAvailable = !updatedDrivers[index].isAvailable;
    setDrivers(updatedDrivers);
  };

  return (
    <div className={styles.tableContainer}>
      <table className={styles.tableContent}>
        <thead>
          <tr className={styles.tableRow}>
            <th className={styles.tableHeader}>Name</th>
            <th className={styles.tableHeader}>Address</th>
            <th className={styles.tableHeader}>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {drivers.slice(startIndex, endIndex).map((person, index) => (
            <tr key={index} className={`${styles.tableRow} ${!person.isAvailable ? styles.unavailable : ''}`}>
              <td className={`${styles.tableData} ${person.isRelevant ? '' : styles.relevantFalse}`}>{person.first_name} {person.last_name}</td>
              <td className={styles.tableData}>{person.address}</td>
              <td className={styles.tableData}>{person.phone}</td>
              <td className={styles.tableData}><button className={`${styles.tableButton} ${!person.isRelevant ? styles.tableButtonGray : ''}`}>קבע נסיעה </button></td>
              <td className={styles.tableData}><button className={`${styles.tableButton} ${styles.tableButtonGray}`} onClick={() => handleAvailableClick(person)} data-person={JSON.stringify(person)}>{person.isAvailable ? 'לא זמין' : 'זמין'}</button> </td>
              <td className={styles.tableData}>
                <button className={`${styles.tableButton} ${!person.isRelevant ? styles.relevantButton : styles.tableButtonGray}`} 
                    onClick={() => handleRelevantClick(person)} data-person={JSON.stringify(person)}>
                  {person.isRelevant ? 'לא רלוונטי' : 'רלוונטי'}
                </button>
              </td>            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.tableButtonsContainer }>
        <button className={styles.tableButton} onClick={handleNextClick} disabled={endIndex >= drivers.length}>עוד נהגים</button>
        <button className={styles.tableButton} onClick={handlePrevClick} disabled={startIndex === 0}>נהגים קודמים</button>
      </div>
    </div>
  );
};