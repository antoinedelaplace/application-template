import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { GoogleDriveFile } from '../store/google-drive/google-drive.reducer';

import { ApiWithAuthService } from '../../../core/api/authApi.service';

interface ListFilesResponse {
	files: GoogleDriveFile[];
	nextPageToken: string;
}

@Injectable({
	providedIn: 'root'
})
export class GoogleDriveApiService extends ApiWithAuthService {
	private readonly baseUrl = 'https://www.googleapis.com/drive/v3';

	public listFiles(): Observable<ListFilesResponse> {
		return this.get<ListFilesResponse>(this.baseUrl, 'files');
	}
}
