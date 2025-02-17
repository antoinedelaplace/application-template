import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-homepage',
	imports: [],
	templateUrl: './homepage.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomepageComponent {}
