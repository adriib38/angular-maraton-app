import { Injectable } from '@angular/core';
import { Observable, Subject, filter } from 'rxjs';
import { Notification, NotificationType } from '../models/notification';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private subject = new Subject<Notification>();
  private defaultId = 'default-notification';

  onNotification(id = this.defaultId): Observable<Notification> {
    return this.subject.asObservable().pipe(filter(x => x && x.id === id));
  }

  notification(
    title: string, // Add the 'title' parameter here
    message: string,
    type: NotificationType,
    options: Partial<Notification> = {}
  ) {
    const id = options.id || this.defaultId;
    const notification = new Notification(
      id,
      type,
      title,
      message,
      options.autoClose,
      options.keepAfterRouteChange
    );
    this.subject.next(notification);
  }

  // convenience methods
  success(title: string, message: string, options?: Partial<Notification>) {
    this.notification(title, message, NotificationType.Success, options);
  }

  error(title: string, message: string, options?: Partial<Notification>) {
    this.notification(title, message, NotificationType.Error, options);
  }

  info(title: string, message: string, options?: Partial<Notification>) {
    this.notification(title, message, NotificationType.Info, options);
  }

  warn(title: string, message: string, options?: Partial<Notification>) {
    this.notification(title, message, NotificationType.Warning, options);
  }

  clear(id = this.defaultId) {
    this.subject.next(new Notification(id));
  }
}
