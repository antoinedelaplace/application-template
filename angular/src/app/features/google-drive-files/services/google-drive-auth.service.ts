import { Injectable } from '@angular/core';

import { environment } from '../../../../environments/environment';
import { AuthService } from '../../../core/auth/auth.service';

@Injectable({
	providedIn: 'root'
})
export class GoogleDriveAuthService extends AuthService {
	private readonly clientId =
		'1031575839836-lcrgq524hp9775ipfjree1b5d6n8egma.apps.googleusercontent.com';
	private readonly redirectUri = environment.googleRedirectURL;
	private readonly oauth2Endpoint =
		'https://accounts.google.com/o/oauth2/v2/auth';
	private readonly scope =
		'email profile https://www.googleapis.com/auth/drive';

	public signInWithGoogle(): void {
		const authUrl = `${this.oauth2Endpoint}?client_id=${this.clientId}&redirect_uri=${this.redirectUri}&response_type=token&scope=${this.scope}`;

		const width = 500;
		const height = 600;
		const left = window.screen.width / 2 - width / 2;
		const top = window.screen.height / 2 - height / 2;

		const popup = window.open(
			authUrl,
			'googleAuthPopup',
			`width=${width},height=${height},top=${top},left=${left}`
		);

		const messageListener = (event: MessageEvent) => {
			if (event.origin !== window.location.origin) {
				return;
			}
			const token = event.data?.accessToken;
			if (token) {
				this.storeToken(token);
				window.removeEventListener('message', messageListener);
				popup?.close();
			}
		};

		window.addEventListener('message', messageListener);
	}
}
