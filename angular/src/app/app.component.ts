import { CommonModule } from '@angular/common';
import {
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	ViewContainerRef,
	inject
} from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './core/layout/footer/footer.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { NotificationService } from './core/notification/notification.service';

@Component({
	selector: 'app-root',
	imports: [CommonModule, RouterModule, FooterComponent, HeaderComponent],
	templateUrl: './app.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit {
	private notificationService = inject(NotificationService);
	private viewContainerRef!: ViewContainerRef;

	public ngAfterViewInit(): void {
		this.notificationService.setContainerRef(this.viewContainerRef);
	}
}
