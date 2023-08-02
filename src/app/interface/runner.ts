export interface Runner {
    id?: number;
    name: string;
    age: number;
    city: string;
    created_at: Date;
    isFirstMarathon: boolean;
    gender: 'Mujer' | 'Hombre' | 'Otro';
    club: string;
    sponsor: string;
}