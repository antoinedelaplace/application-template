import {
	ChangeDetectionStrategy,
	Component,
	ComponentRef,
	Input,
	inject
} from '@angular/core';

import { NotificationService } from './notification.service';

export type NotificationType = 'error' | 'success' | 'warning';

@Component({
	selector: 'app-notification',
	templateUrl: './notification.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationComponent {
	@Input() message!: string;
	@Input() type!: NotificationType;

	public notificationRef!: ComponentRef<NotificationComponent>;

	private notificationService = inject(NotificationService);

	close(): void {
		this.notificationService.closeNotification(this.notificationRef);
	}
}
