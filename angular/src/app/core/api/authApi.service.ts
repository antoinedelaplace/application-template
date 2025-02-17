import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { AuthService } from '../auth/auth.service';

@Injectable({
	providedIn: 'root'
})
export class ApiWithAuthService {
	private http = inject(HttpClient);
	private authService = inject(AuthService);

	private getHeaders(): Record<string, string> {
		const token = this.authService.getAccessToken();
		return {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json'
		};
	}

	get<T>(apiUrl: string, endpoint: string): Observable<T> {
		return this.http.get<T>(`${apiUrl}/${endpoint}`, {
			headers: this.getHeaders()
		});
	}

	post<T>(apiUrl: string, endpoint: string, data: unknown): Observable<T> {
		return this.http.post<T>(`${apiUrl}/${endpoint}`, {
			headers: this.getHeaders(),
			data
		});
	}

	put<T>(apiUrl: string, endpoint: string, data: unknown): Observable<T> {
		return this.http.put<T>(`${apiUrl}/${endpoint}`, {
			headers: this.getHeaders(),
			data
		});
	}

	delete<T>(apiUrl: string, endpoint: string): Observable<T> {
		return this.http.delete<T>(`${apiUrl}/${endpoint}`, {
			headers: this.getHeaders()
		});
	}
}
