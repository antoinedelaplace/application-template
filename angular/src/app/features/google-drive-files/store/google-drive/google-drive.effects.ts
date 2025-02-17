import { Injectable, inject } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, mergeMap, of } from 'rxjs';

import { GoogleDriveApiService } from '../../services/google-drive-api.service';
import {
	loadFiles,
	loadFilesError,
	loadFilesSuccess
} from './google-drive.actions';

@Injectable()
export class DriveEffects {
	private actions$ = inject(Actions);
	private googleDriveApi = inject(GoogleDriveApiService);

	loadFiles$ = createEffect(() =>
		this.actions$.pipe(
			ofType(loadFiles),
			mergeMap(() =>
				this.googleDriveApi.listFiles().pipe(
					map(response => loadFilesSuccess({ files: response.files })),
					catchError(() => of(loadFilesError()))
				)
			)
		)
	);
}
