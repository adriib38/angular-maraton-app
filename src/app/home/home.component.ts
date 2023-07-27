import { Component, OnInit } from '@angular/core';

import { RunnersService } from '../services/runners.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { 
  
  numberOfRunners = 0;

  constructor(private runnersService: RunnersService) { }

  ngOnInit(): void {
    this.getNumberOfRunners();
  }

  getNumberOfRunners(): void {
    this.runnersService.getNumberOfRunners()
      .then((response) => {
        this.numberOfRunners = response.count?.valueOf() || 0;
      }
    );
  }
  
}
