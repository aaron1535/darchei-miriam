import { TripDetails, PassengersTable } from './info_travel';
import data from './people.json';

const driver_search = () => {
  const person = data.people[0];

  return (
    <>
      <TripDetails person={person} />
      <PassengersTable people={data.people} />
    </>
  );
};

export default driver_search;
