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

  notification(message: string, type: NotificationType, options: Partial<Notification> = {}) {
    const id = options.id || this.defaultId;
    const notification = new Notification(
      id,
      type,
      message,
      options.autoClose,
      options.keepAfterRouteChange
    );
    this.subject.next(notification);
  }

  // convenience methods
  success(message: string, options?: Partial<Notification>) {
    this.notification(message, NotificationType.Success, options);
  }

  error(message: string, options?: Partial<Notification>) {
    this.notification(message, NotificationType.Error, options);
  }

  info(message: string, options?: Partial<Notification>) {
    this.notification(message, NotificationType.Info, options);
  }

  warn(message: string, options?: Partial<Notification>) {
    this.notification(message, NotificationType.Warning, options);
  }

  clear(id = this.defaultId) {
    this.subject.next(new Notification(id));
  }

}
