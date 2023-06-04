export interface Person {
    ID: number;
    first_name: string;
    last_name: string;
    address: string;
    destination_address: string;
    passengers: number;
    date: string;
    time: string;
    phone: string;
  }

export interface Driver extends Person {
  isAvailable: boolean;
  isRelevant: boolean;
}
export interface TableProps {
    people: Person[];
}