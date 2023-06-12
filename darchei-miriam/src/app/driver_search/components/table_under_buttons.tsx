import styles from '../css/table.module.css';

interface TableButtonsProps {
  currentPage: number;
  handlePageChange: (pageNumber: number) => void;
}
//buttons for under the table of next pages or previous pages
export const TableUnderButtons = ({ currentPage, handlePageChange }: TableButtonsProps) => { 
  const pageNumbers = [0];

  return (
    <div className={styles.tableButtonsContainer}>
      <button className={`${styles.tableButton} ${currentPage === pageNumbers.length ? styles.tableButtonDisabled : ''}`} onClick={() => handlePageChange(currentPage + 1)}>הבא</button>
      <button className={`${styles.tableButton} ${currentPage === 1 ? styles.tableButtonDisabled : ''}`} onClick={() => handlePageChange(currentPage - 1)}>הקודם</button>
    </div>
  );
};