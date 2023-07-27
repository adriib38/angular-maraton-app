export interface Runner {
    id: number;
    name: string;
    age: number;
    city: string;
    registrationDate: Date;
    isFirstMarathon: boolean;
    gender: 'Mujer' | 'Hombre' | 'Otro';
    club: string;
    sponsor: string;
}