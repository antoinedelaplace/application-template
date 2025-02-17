import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	public logout(): void {
		sessionStorage.removeItem('accessToken');
	}

	public isAuthenticated(): boolean {
		return !!sessionStorage.getItem('accessToken');
	}

	public getAccessToken(): string | null {
		return sessionStorage.getItem('accessToken');
	}

	protected storeToken(accessToken: string): void {
		sessionStorage.setItem('accessToken', accessToken);
	}
}
