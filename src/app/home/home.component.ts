import { Component, OnInit, AfterViewInit } from '@angular/core';

import { RunnersService } from '../services/runners.service';
import { NotificationService } from '../services/notification.service';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { 
  
  numberOfRunners = 0;

  constructor(
    private runnersService: RunnersService,
    private notificationService: NotificationService,
    private alertService: AlertService
    ) { }

  ngOnInit(): void {
    this.getNumberOfRunners();

    //Eperar 3 segundos para mostrar la notificación
    setTimeout(() => {
      this.showNotification();
    }, 3000);
  }

  getNumberOfRunners(): void {
    this.runnersService.getNumberOfRunners()
      .then((response) => {
        this.numberOfRunners = response.count?.valueOf() || 0;
      }
    );
  }

  showNotification(): void {
    console.log('showNotification');
    this.notificationService.success('¡Hola! 😀', 'Este es un proyecto ficticio. Si quieres ver más proyectos, visita mi perfil de <a href="https://github.com/adriib38" target=_blank>Github</a>.', { autoClose: false, keepAfterRouteChange: true });
  }
}
