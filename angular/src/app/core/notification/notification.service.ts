import {
	ComponentRef,
	Injectable,
	Injector,
	ViewContainerRef,
	inject
} from '@angular/core';

import {
	NotificationComponent,
	NotificationType
} from './notification.component';

@Injectable({ providedIn: 'root' })
export class NotificationService {
	private containerRef!: ViewContainerRef;
	private injector = inject(Injector);

	setContainerRef(viewContainerRef: ViewContainerRef): void {
		this.containerRef = viewContainerRef;
	}

	public showNotification(
		message: string,
		type: NotificationType
	): ComponentRef<NotificationComponent> {
		const notificationRef = this.containerRef.createComponent(
			NotificationComponent,
			{ injector: this.injector }
		);
		notificationRef.instance.message = message;
		notificationRef.instance.type = type;
		notificationRef.instance.notificationRef = notificationRef;

		setTimeout(() => this.closeNotification(notificationRef), 10000);

		return notificationRef;
	}

	public closeNotification(
		notificationRef: ComponentRef<NotificationComponent>
	): void {
		notificationRef.destroy();
	}
}
