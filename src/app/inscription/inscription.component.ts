import { Component } from '@angular/core';
import { Runner } from '../interface/runner';
import { RunnersService } from '../services/runners.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
})
export class InscriptionComponent {
  name: string = '';
  age: number = 0;
  city: string = '';
  created_at: Date = new Date();
  isFirstMarathon: boolean = true;
  gender: 'Mujer' | 'Hombre' | 'Otro' = 'Mujer';
  club: string = '';
  sponsor: string = '';

  constructor(
    private runnersService: RunnersService,
    private router: Router
    ){}

  incribirRunner() {
    var runner: Runner = {
      name: this.name,
      age: this.age,
      city: this.city,
      created_at: this.created_at,
      isFirstMarathon: this.isFirstMarathon,
      gender: this.gender,
      club: this.club,
      sponsor: this.sponsor,
    };

    console.log(runner);

    this.runnersService.createRunner(runner).then((response) => {
      console.log(response);

      if(response['status'] === 201){
        alert('Corredor creado correctamente');
        //Redirigir a la página de corredores
        this.router.navigate(['/runners']);
      } else {
        alert('Error al crear el corredor');
      }
    });
  }
}
