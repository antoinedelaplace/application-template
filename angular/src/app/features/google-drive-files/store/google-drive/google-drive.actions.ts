import { createAction, props } from '@ngrx/store';

import { GoogleDriveFile } from './google-drive.reducer';

export const loadFiles = createAction('[Drive] Load Files');
export const loadFilesSuccess = createAction(
	'[Drive] Load Files Success',
	props<{ files: GoogleDriveFile[] }>()
);
export const loadFilesError = createAction('[Drive] Load Files Error');
