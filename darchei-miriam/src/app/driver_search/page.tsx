import { Trip_details } from './trip.details';
import { Drivers_table } from './table.module';
import { Button_under_table } from './button.module';
import data from './people.json';

const driver_search = () => {
  const person = data.people[0];
  
  return (
    <>
    <Trip_details person={person} />
    <Drivers_table people={data.people} />
    <Button_under_table/>
    </>
  );
};

export default driver_search;
