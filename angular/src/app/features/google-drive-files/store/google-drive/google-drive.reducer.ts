import { createReducer, on } from '@ngrx/store';

import {
	loadFiles,
	loadFilesError,
	loadFilesSuccess
} from './google-drive.actions';

export interface GoogleDriveFile {
	mimeType: string;
	id: string;
	name: string;
}

export interface DriveState {
	files: GoogleDriveFile[];
	isLoading: boolean;
}

export const initialDriveState: DriveState = {
	files: [],
	isLoading: false
};

export const driveReducer = createReducer(
	initialDriveState,
	on(loadFiles, state => ({ ...state, isLoading: true })),
	on(loadFilesError, state => ({ ...state, isLoading: false })),
	on(loadFilesSuccess, (state, { files }) => ({
		...state,
		files,
		isLoading: false
	}))
);
