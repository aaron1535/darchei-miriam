import styles from '../css/table.module.css';

interface FilterButtonsProps {
  handleFilter: (filterType: string) => void;
  handleResetSort: () => void;
}

export const FilterButtons = ({ handleFilter, handleResetSort }: FilterButtonsProps) => {
  return (
    <div className={styles.tableFilters}>
      <div className={styles.tableFilters}>
        <button className={`${styles.filterButton} big-button`} onClick={() => { handleFilter('isAvailable') }}>סנן לא זמינים</button>
        <button className={`${styles.filterButton} big-button`} onClick={() => { handleFilter('isRelevant') }}>סנן לא רלוונטים</button>
        <button className={`${styles.filterButton} big-button`} onClick={handleResetSort}>בטל סינון</button>
      </div>
    </div>
  );
};