import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { AlertService } from '../services/alert.service';
import { Subscription } from 'rxjs';
import { Alert, AlertType } from '../models/alert';

@Component({ selector: 'alert', templateUrl: 'alert.component.html' })
export class AlertComponent implements OnInit, OnDestroy {
  @Input() id = 'default-alert';
  @Input() fade = true;

  //Array de alertas a mostrar
  alerts: Alert[] = [];
  
  alertSubscription!: Subscription;
  routeSubscription!: Subscription;

  constructor(private router: Router, private alertService: AlertService) {}

  ngOnInit() {
    //Subscription al servicio de alerta
    this.alertSubscription = this.alertService
      .onAlert(this.id)
      .subscribe((alert) => {
        //Si la alerta no tiene mensaje
        if (!alert.message) {
          //Filtrar alertas con 'keepAfterRouteChange' como true
          //Para que las alertas con 'keepAfterRouteChange' como true se mantengan al cambiar de ruta
          this.alerts = this.alerts.filter((x) => x.keepAfterRouteChange);

          //Filtrar alertas con 'keepAfterRouteChange' como false
          //Para eliminar las alertas con 'keepAfterRouteChange' como false al cambiar de ruta
          this.alerts.forEach((x) => (x.keepAfterRouteChange = false));

          //Si no hay alertas, salir
          return;
        }

        //Agregar alerta al array
        this.alerts.push(alert);

        //Si la alerta tiene 'autoClose' como true, se elimina después de 3 segundos
        if (alert.autoClose) {
          setTimeout(() => this.removeAlert(alert), 3000);
        }
      });

    //Subscription al evento de cambio de ruta, para poder eliminar las alertas al cambiar de ruta
    this.routeSubscription = this.router.events.subscribe((event) => {
      //Si el evento es de tipo 'NavigationStart', limpiar las alertas
      if (event instanceof NavigationStart) {
        //Limpiar alertas
        this.alertService.clear(this.id);
      }
    });
  }

  ngOnDestroy() {
    //Desuscribirse del servicio de alerta y del servicio de cambio de ruta
    //Para evitar fugas de memoria
    this.alertSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }

  //Eliminar alerta
  removeAlert(alert: Alert) {
    //Si no hay alerta o no está en el array, salir
    if (!this.alerts.includes(alert)) return;

    //Si la alerta tiene 'fade' como true, se elimina después de 250 milisegundos
    if (this.fade) {
      //Poner 'fade' como true para que se elimine con una animación
      alert.fade = true;

      //Eliminar alerta después de 250 milisegundos
      setTimeout(() => {
        this.alerts = this.alerts.filter((x) => x !== alert);
      }, 250);
    } else {
      //Si la alerta no tiene 'fade' como true, eliminarla inmediatamente
      this.alerts = this.alerts.filter((x) => x !== alert);
    }
  }

  //Añadir clase CSS a la alerta
  cssClass(alert: Alert) {
    //Si no hay alerta, salir
    if (alert?.type === undefined) return;

    //Clases CSS fijas a todas las alertas
    const classes = ['alert', 'alert-dismissable', 'mt-4', 'container'];

    //Clases CSS variables, dependiendo del tipo de alerta
    const alertTypeClass = {
      [AlertType.Success]: 'alert-success',
      [AlertType.Error]: 'alert-danger',
      [AlertType.Info]: 'alert-info',
      [AlertType.Warning]: 'alert-warning',
    };

    //Añadir clase CSS fija
    classes.push(alertTypeClass[alert.type]);

    //Si la alerta tiene 'fade' como true, añadir clase CSS 'fade'
    if (alert.fade) {
      classes.push('fade');
    }

    //Devolver clases CSS
    return classes.join(' ');
  }
}
