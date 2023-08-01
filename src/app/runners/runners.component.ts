// runners.component.ts
import { Component, OnInit } from '@angular/core';
import { RunnersService } from '../services/runners.service';
import { PostgrestResponse } from '@supabase/supabase-js';
import { Runner } from '../interface/runner';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-runners',
  templateUrl: './runners.component.html',
  styleUrls: ['./runners.component.css'],
})
export class RunnersComponent implements OnInit {
  runners: PostgrestResponse<Runner> | null = null;

  constructor(
    private runnersService: RunnersService,
    private alertService: AlertService
  ){}

  ngOnInit(): void {
    this.getRunners();
  }

  getRunners() {
    this.runnersService.getRunners().then((runners) => {
      this.runners = runners;
    });
  }

  deleteRunner(id: number) {
    this.runnersService.deleteRunnerById(id).then((response) => {
      if (response['status'] === 200) {
   
      }
      this.alertService.success('Corredor eliminado', { keepAfterRouteChange: true });
      
      this.getRunners(); 
 
    });
  }


}
