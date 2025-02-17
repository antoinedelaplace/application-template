import {
	ChangeDetectionStrategy,
	Component,
	inject,
	signal
} from '@angular/core';

import { Store } from '@ngrx/store';

import {
	selectDriveFiles,
	selectDriveFilesIsLoading
} from './store/google-drive';
import { loadFiles } from './store/google-drive/google-drive.actions';
import { GoogleDriveFile } from './store/google-drive/google-drive.reducer';

import { GoogleDriveAuthService } from './services/google-drive-auth.service';

@Component({
	selector: 'app-google-drive-files',
	imports: [],
	templateUrl: './google-drive-files.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoogleDriveFilesComponent {
	public files = signal<GoogleDriveFile[]>([]);
	public isLoading = signal<boolean>(false);

	private googleDriveAuthService = inject(GoogleDriveAuthService);
	private store = inject(Store);

	public constructor() {
		this.store
			.select(selectDriveFiles)
			.subscribe(files => this.files.set(files));

		this.store
			.select(selectDriveFilesIsLoading)
			.subscribe(isLoading => this.isLoading.set(isLoading));
	}

	public authenticate(): void {
		this.googleDriveAuthService.signInWithGoogle();
	}

	public isAuthenticated(): boolean {
		return this.googleDriveAuthService.isAuthenticated();
	}

	public listFiles(): void {
		this.store.dispatch(loadFiles());
	}
}
