import { Person, Driver } from './person_types';

export const filterDrivers = (drivers: Driver[], filterType: string) => {
  return drivers.filter(driver =>
    filterType === 'isAvailable' ? driver.isAvailable : driver.isRelevant
  );
};

export const sortDrivers = (drivers: Driver[], key: keyof Driver) => {
  return [...drivers].sort((a, b) => (a[key] > b[key] ? 1 : -1));
};

export const searchDrivers = (people: Person[], searchTerm: string) => {
  return people.filter(
    driver =>
      driver.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.address.toLowerCase().includes(searchTerm.toLowerCase())
  ).map(person => ({
    ...person,
    isAvailable: true,
    isRelevant: true
  }));
};