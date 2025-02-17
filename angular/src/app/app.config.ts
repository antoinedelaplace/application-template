import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideEffects } from '@ngrx/effects';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { DriveEffects } from './features/google-drive-files/store/google-drive/google-drive.effects';
import { driveReducer } from './features/google-drive-files/store/google-drive/google-drive.reducer';
import { userReducer } from './features/users/store/user.reducer';

import { routes } from './app.routes';
import { errorInterceptor } from './core/api/error.interceptor';

export const appConfig: ApplicationConfig = {
	providers: [
		provideHttpClient(withInterceptors([errorInterceptor])),
		provideRouter(routes),
		provideStore(),
		provideState({ name: 'user', reducer: userReducer }),
		provideState({ name: 'drive', reducer: driveReducer }),
		provideEffects(DriveEffects),
		provideStoreDevtools()
	]
};
