export type configVar = {
    name: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    company: string;
    address1: string;
    address2: string;
    state: string;
    city: string;
    zipcode: string;
    mobile: string;
}

export type configdeleteVar = {
    name: string;
    password: string;
    email: string;
}

export interface configProduct {
    id: number;
    name: string;
    price: string;
}

export type configPayment = {
    name: string;
    card: string;
    cvc: string;
    month: string;
    year: string;
}