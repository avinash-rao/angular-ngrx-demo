export interface PersonResponse {
    status: string;
    code:   number;
    total:  number;
    data:   Person[];
}

export interface Person {
    id:        number;
    firstname: string;
    lastname:  string;
    email:     string;
    phone:     string;
    birthday:  Date;
    gender:    Gender;
    address:   Address;
    website:   string;
    image:     string;
}

export interface Address {
    id:             number;
    street:         string;
    streetName:     string;
    buildingNumber: string;
    city:           string;
    zipcode:        string;
    country:        string;
    county_code:    string;
    latitude:       number;
    longitude:      number;
}

export enum Gender {
    Female = "female",
    Male = "male",
}
