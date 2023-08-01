export class Notification {
    constructor(
        public id: string,
        public type?: NotificationType,
        public message?: string,
        public autoClose: boolean = true,
        public keepAfterRouteChange: boolean = false,
        public fade: boolean = false
    ) {}
}

export enum NotificationType {
    Success,
    Error,
    Info,
    Warning
}