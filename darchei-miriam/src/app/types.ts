
export interface Person {
    id : string;
    firstName : string;
    lastName : string;
    contact : Contact;
    address : Address;
    gender :'male' | 'female';

}

export interface Address {
    city: string;
    street: string;
    number: string;
    entry_number : string;
    apartment_number : number;
}

export interface Car {
    id : string;
    make : string;
    model : string;
    color : string;
    accessability : 'standard'| 'wheelchair'| 'chair_lift';
    seats_available : number
    sticker_number : number;
}

export interface Contact {
    phone_1 : string;
    phone_2 : string;
    landline : string;
    email_address : string;
    whatsapp : 'phone_1' | 'phone_2' | 'nonexistent';
}

export interface Driver {
    person : Person;
    car1 : Car;
    car2 : Car;

}

export interface Assisted {
    person : Person;
    accessability : 'standard'| 'wheelchair'| 'chair_lift';

}

export interface Ride {
    id : string;
    date : Date;
    time : string;
    driver : Driver;
    car : Car;
    assisted : Assisted;
    origin : Address;
    destination : Address;
    companions : number;
    accessability : 'standard'| 'wheelchair'| 'chair_lift';

}