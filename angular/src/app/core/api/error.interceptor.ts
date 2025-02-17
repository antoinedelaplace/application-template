import {
	HttpErrorResponse,
	HttpEvent,
	HttpHandlerFn,
	HttpRequest
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export function errorInterceptor(
	req: HttpRequest<unknown>,
	next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
	return next(req).pipe(
		catchError((error: HttpErrorResponse) => {
			console.error('Error in Http call : ', error.message);
			return throwError(() => error);
		})
	);
}
