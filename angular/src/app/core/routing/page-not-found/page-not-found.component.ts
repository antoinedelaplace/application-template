import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'app-page-not-found',
	imports: [RouterModule],
	templateUrl: './page-not-found.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageNotFoundComponent {}
