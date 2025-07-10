import { configdeleteVar, configVar, configProduct, configPayment } from "./ydconfig";

export const ydData : configVar = {
    name: 'ydtest5',
    password: 'ydtestlima',
    email: "ydtest5",
    firstName: "ydtest",
    lastName: "lima",
    company: "koperasi serpong",
    address1: "jln paramount serpong",
    address2: "123 Queen Street",
    state: "Auckland Region",
    city: "Auckland",
    zipcode: "1010",
    mobile: "64211234567",
  };

  export let ydDelete : configdeleteVar = {
    name: 'ydtest53hyu6j',
    password: 'ydtestlima3hyu6j',
    email: "ydtest53hyu6j@yopmail.com"
  };

  export let ydLogin : configdeleteVar = {
    name: 'ydtest50hxafl',
    password: 'ydtestlima0hxafl',
    email: "ydtest50hxafl@yopmail.com"
  };

  export const selectedProducts: configProduct[] = [
    //{ id: 1, name: 'Blue Top', price: 'Rs. 500' },
    //{ id: 2, name: 'Men Tshirt', price: 'Rs. 400' },
    //{ id: 3, name: 'Sleeveless Dress', price: 'Rs. 1000' },
    { id: 33, name: 'Soft Stretch Jeans', price: 'Rs. 799' },
    { id: 40, name: 'Rust Red Linen Saree', price: 'Rs. 3500' },
    { id: 43, name: 'GRAPHIC DESIGN MEN T SHIRT - BLUE', price: 'Rs. 1389' },
  ];

  export let ydPayment : configPayment = {
    name: 'ydtest50hxafl',
    card: '8994009343444444',
    cvc: '123',
    month: '12',  
    year: '2027',
  };