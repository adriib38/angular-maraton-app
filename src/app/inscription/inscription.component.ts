import { Component } from '@angular/core';
import { Runner } from '../interface/runner';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  name: string = '';
  age: number = 0;
  city: string = '';
  registrationDate: Date = new Date();
  isFirstMarathon: boolean = true;
  gender: 'Mujer' | 'Hombre' | 'Otro' = 'Mujer';
  club: string = '';
  sponsor: string = '';



  constructor() { }


incribirRunner() {
  

  
}

}
