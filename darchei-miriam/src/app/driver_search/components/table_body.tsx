import styles from '../css/table.module.css';
import { Driver } from './person_types';

interface TableBodyProps {
  drivers: Driver[];
  startIndex: number;
  endIndex: number;
  handleRelevantClick: (person: Driver, drivers: Driver[], setDrivers: (drivers: Driver[]) => void) => void;
  handleAvailableClick: (person: Driver, drivers: Driver[], setDrivers: (drivers: Driver[]) => void) => void;
  handleScheduleRideClick: (person: Driver) => void;
  setDrivers: (drivers: Driver[]) => void;
}

export const TableBody = ({ drivers, startIndex, endIndex, handleRelevantClick, handleAvailableClick, handleScheduleRideClick, setDrivers }: TableBodyProps) => {
  return (
    <tbody>
      {drivers.slice(startIndex, endIndex).map((person, index) => (
        <tr key={index} className={styles.tableRow}>
          <td className={`${styles.tableData} ${person.isRelevant ? '' : styles.relevantFalse}`}>{person.first_name} {person.last_name}</td>
          <td className={styles.tableData}>{person.address}</td>
          <td className={styles.tableData}>{person.phone}</td>
          <td className={styles.tableData}><button className={`${styles.tableButton} ${styles.relevantButton}`} onClick={() => handleScheduleRideClick(person)}>קבע נסיעה</button></td>
          <td className={styles.tableData}><button className={`${styles.tableButton} ${person.isRelevant ? styles.relevantButton : styles.tableButtonGray}`} onClick={() => handleRelevantClick(person, drivers, setDrivers)}>{person.isRelevant ? 'רלוונטי' : 'לא רלוונטי'}</button></td>
          <td className={styles.tableData}><button className={`${styles.tableButton} ${person.isAvailable ? styles.availableButton : styles.tableButtonGray}`} onClick={() => handleAvailableClick(person, drivers, setDrivers)}>{person.isAvailable ? 'זמין' : 'לא זמין'}</button></td>
        </tr>
      ))}
    </tbody>
  );
};