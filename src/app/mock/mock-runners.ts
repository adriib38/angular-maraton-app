import { Runner } from "../interface/runner";

export const RUNNERS: Runner[] = [
    { id: 1, name: 'John Doe', age: 25, city: 'New York', registrationDate: new Date('2023-07-20'), isFirstMarathon: false, gender: 'Hombre', club: 'NYC Runners', sponsor: 'Nike' },
    { id: 2, name: 'Jane Doe', age: 24, city: 'Los Angeles', registrationDate: new Date('2023-07-19'), isFirstMarathon: true, gender: 'Mujer', club: 'LA Marathoners', sponsor: 'Adidas' },
    { id: 3, name: 'John Smith', age: 30, city: 'Chicago', registrationDate: new Date('2023-07-18'), isFirstMarathon: false, gender: 'Hombre', club: 'Windy City Run Club', sponsor: 'Under Armour' },
    { id: 4, name: 'Max Mustermann', age: 35, city: 'Berlin', registrationDate: new Date('2023-07-17'), isFirstMarathon: true, gender: 'Hombre', club: 'Berlin Marathon Club', sponsor: 'Puma' },
    { id: 5, name: 'Erika Mustermann', age: 33, city: 'Munich', registrationDate: new Date('2023-07-16'), isFirstMarathon: false, gender: 'Mujer', club: 'Munich Runners', sponsor: 'Asics' },
    { id: 6, name: 'Leo Panther', age: 28, city: 'San Francisco', registrationDate: new Date('2023-07-15'), isFirstMarathon: true, gender: 'Hombre', club: 'SF Bay Runners', sponsor: 'New Balance' },
    { id: 7, name: 'Lara Croft', age: 27, city: 'London', registrationDate: new Date('2023-07-14'), isFirstMarathon: false, gender: 'Mujer', club: 'London Marathon Club', sponsor: 'Reebok' },
    { id: 8, name: 'Adrián Benítez', age: 21, city: 'València', registrationDate: new Date('2023-07-13'), isFirstMarathon: true, gender: 'Hombre', club: 'LVRunning', sponsor: 'Puma' },
    { id: 9, name: 'Mario Bros', age: 32, city: 'Tokyo', registrationDate: new Date('2023-07-12'), isFirstMarathon: false, gender: 'Hombre', club: 'Tokyo Marathon Club', sponsor: 'Mizuno' },
    { id: 10, name: 'Carla Pérez', age: 29, city: 'Barcelona', registrationDate: new Date('2023-07-11'), isFirstMarathon: true, gender: 'Mujer', club: 'Barcelona Run Club', sponsor: 'Saucony' },
    { id: 11, name: 'Paco Martínez', age: 31, city: 'Mexico City', registrationDate: new Date('2023-07-10'), isFirstMarathon: false, gender: 'Hombre', club: 'Mexican Marathon Runners', sponsor: 'Salomon' },
  ];