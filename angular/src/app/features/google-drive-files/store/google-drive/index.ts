import { createFeatureSelector, createSelector } from '@ngrx/store';

import { DriveState } from './google-drive.reducer';

export const selectDriveState = createFeatureSelector<DriveState>('drive');

export const selectDriveFiles = createSelector(
	selectDriveState,
	state => state.files
);

export const selectDriveFilesIsLoading = createSelector(
	selectDriveState,
	state => state.isLoading
);
