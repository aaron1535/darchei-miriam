import styles from '../css/table.module.css';

interface SearchBoxProps {
  handleSearch: (searchTerm: string) => void;
}

export const SearchBox = ({ handleSearch }: SearchBoxProps) => {
  return (
    <div className={styles.tableSearch}>
      <input type="text" className={styles.searchBox} placeholder="חפש נהג" onChange={e => handleSearch(e.target.value)} />
    </div>
  );
};