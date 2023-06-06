'use client'

import { useState, useEffect } from 'react';
import styles from './css/table.module.css';
import { Person, Driver, TableProps } from './components/person_types';
import { filterDrivers, sortDrivers, searchDrivers } from './components/table_utils';
import { handleRelevantClick, handleAvailableClick, handleResetSort, handleScheduleRideClick } from './components/table_click_handlers';
import { SearchBox } from './components/search_box';
import { FilterButtons } from './components/table_filter_buttons';
import { TableHeader } from './components/table_header';
import { TableBody } from './components/table_body';
import { TableUnderButtons } from './components/table_buttons';

export const Drivers_table = ({ people }: TableProps) => {
  const driversPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [originalDrivers, setOriginalDrivers] = useState<Driver[]>([]);
  const startIndex = (currentPage - 1) * driversPerPage;
  const endIndex = startIndex + driversPerPage;

  useEffect(() => {
    const updatedDrivers: Driver[] = people.map(person => ({
      ...person,
      isAvailable: true,
      isRelevant: true
    }));
    setOriginalDrivers(updatedDrivers);
    setDrivers(updatedDrivers);
  }, [people]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleSort = (key: keyof Driver) => {
    const sortedDrivers = sortDrivers(drivers, key);
    setDrivers(sortedDrivers);
  };

  const handleSearch = (searchTerm: string) => {
    const filteredDrivers = searchDrivers(people, searchTerm);
    setDrivers(filteredDrivers);
  };

  const handleFilter = (filterType: string) => {
    const filteredDrivers = filterDrivers(drivers, filterType);
    setDrivers(filteredDrivers);
  };

  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableControls} dir="rtl">
        <SearchBox handleSearch={handleSearch} />
        <FilterButtons handleFilter={handleFilter} handleResetSort={() => handleResetSort(originalDrivers, setDrivers)} />
      </div>
      <table className={styles.tableContent}>
        <TableHeader handleSort={handleSort} />
        <TableBody drivers={drivers} startIndex={startIndex} endIndex={endIndex} handleRelevantClick={handleRelevantClick} handleAvailableClick={handleAvailableClick} handleScheduleRideClick={handleScheduleRideClick} setDrivers={setDrivers} />
      </table>
      <TableUnderButtons currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
};