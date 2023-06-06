import { Person, Driver } from './person_types';
import { handleScheduleRide } from './massage.popup';

export const handleRelevantClick = (person: Person, drivers: Driver[], setDrivers: (drivers: Driver[]) => void) => {
  const updatedDrivers = drivers.map(driver =>
    driver.ID === person.ID ? { ...driver, isRelevant: !driver.isRelevant } : driver
  );
  setDrivers(updatedDrivers);
};

export const handleAvailableClick = (person: Person, drivers: Driver[], setDrivers: (drivers: Driver[]) => void) => {
  const updatedDrivers = drivers.map(driver =>
    driver.ID === person.ID ? { ...driver, isAvailable: !driver.isAvailable } : driver
  );
  setDrivers(updatedDrivers);
};


export const handleScheduleRideClick = (person: Person) => {
  handleScheduleRide(person);
};

//button reset sort
export const handleResetSort = (originalDrivers: Driver[], setDrivers: (drivers: Driver[]) => void) => {
  setDrivers([...originalDrivers]);
};