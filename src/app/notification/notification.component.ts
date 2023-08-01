import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { Subscription } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { Notification, NotificationType } from '../models/notification';

@Component({
  selector: 'notification',
  templateUrl: './notification.component.html'
})
export class NotificationComponent implements OnInit, OnDestroy {
  @Input() id = 'default-notification';
  @Input() fade = true;

  notifications: Notification[] = [];
  notificationSubscription!: Subscription;
  routeSubscription!: Subscription;
  
  constructor(private router: Router, private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationSubscription = this.notificationService
      .onNotification(this.id)
      .subscribe((notification) => {
        if (!notification.message) {
          this.notifications = this.notifications.filter((x) => x.keepAfterRouteChange);

          this.notifications.forEach((x) => (x.keepAfterRouteChange = false));
          return;
        }

        this.notifications.push(notification);

        if (notification.autoClose) {
          setTimeout(() => this.removeNotification(notification), 3000);
        }
      });

      this.routeSubscription = this.router.events.subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.notificationService.clear(this.id);
        }
      });
  }

  ngOnDestroy(): void {
    this.notificationSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }

  removeNotification(notification: Notification) {
    if (!this.notifications.includes(notification)) return;

    if (this.fade) {
      notification.fade = true;

      setTimeout(() => {  
        this.notifications = this.notifications.filter((x) => x !== notification);
      }, 250);

    } else {
      this.notifications = this.notifications.filter((x) => x !== notification);
    }
  }

    cssClass(notification: Notification) {
      if (notification?.type === undefined) return;

      const classes = ['notification-modal', 'notification', 'notification-dismissable'];

      const notificationTypeClass = {
        [NotificationType.Success]: 'notification-success',
        [NotificationType.Error]: 'notification-error',
        [NotificationType.Info]: 'notification-info',
        [NotificationType.Warning]: 'notification-warning'
      };

      classes.push(notificationTypeClass[notification.type]);

      if (notification.fade) {
        classes.push('fade');
      }

      return classes.join(' ');
    }
}
