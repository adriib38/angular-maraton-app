import { Component, OnInit } from '@angular/core';
import { Runner } from '../interface/runner';
import { ActivatedRoute } from '@angular/router';
import { RunnersService } from '../services/runners.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-runner-detail',
  templateUrl: './runner-detail.component.html',
  styleUrls: ['./runner-detail.component.css']
})
export class RunnerDetailComponent implements OnInit {
  runner: Runner | null = null;
  runnerEncontrado: boolean = false;
  idRunner = this.route.snapshot.paramMap.get('id') || 0;
  notificacion: string = '';

  constructor(
    private route: ActivatedRoute,
    private runnersService: RunnersService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getRunner();
  }


  async getRunner() {
    try {
      //Obtener datos del corredor a través del servicio
      const response = await this.runnersService.getRunner(Number(this.idRunner));

      //Si hay datos, asignarlos a la variable runner
      if (response && response.data && response.data.length > 0) {
        const runnerData = response.data[0];
        this.runner = runnerData;
        
        this.runnerEncontrado = true;
        //Si no hay datos, mostrar error
      } else {
        this.runnerEncontrado = false;
      }
    } catch (error) {
      console.error('Error fetching runner:', error);
    }
    console.log('this.runner:', this.runner);
  }

  async updateRunner() {
    console.log(
      'runner-detail.component.ts - updateRunner()',
      this.runner
    );

    this.runnersService.updateRunnerById(
      Number(this.idRunner), 
      this.runner as Runner)
      .then(response => {
        console.log('response:', response);
        this.goBack();
      });
  }

  goBack(): void {
    this.location.back();
  }

}
