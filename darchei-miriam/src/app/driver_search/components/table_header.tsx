import styles from '../css/table.module.css';
import { Driver } from './person_types';


interface TableHeaderProps {
  handleSort: (key: keyof Driver) => void;
}

export const TableHeader = ({ handleSort }: TableHeaderProps) => {
  return (
    <thead>
      <tr className={styles.tableRow}>
        <th className={`${styles.tableHeader} tableHeader`} onClick={() => handleSort('first_name')}>Name</th>
        <th className={styles.tableHeader} onClick={() => handleSort('address')}>Address</th>
        <th className={styles.tableHeader} onClick={() => handleSort('phone')}>Phone</th>
        <th></th>
      </tr>
    </thead>
  );
};