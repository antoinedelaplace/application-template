import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./features/homepage/homepage.component').then(
				m => m.HomepageComponent
			)
	},
	{
		path: 'users',
		loadComponent: () =>
			import('./features/users/users.component').then(m => m.UsersComponent)
	},
	{
		path: 'files',
		loadComponent: () =>
			import('./features/google-drive-files/google-drive-files.component').then(
				m => m.GoogleDriveFilesComponent
			)
	},
	{
		path: 'google-redirect',
		loadComponent: () =>
			import(
				'./features/google-drive-files/google-auth-redirect.component'
			).then(m => m.GoogleAuthRedirectComponent)
	},
	{
		path: '**',
		loadComponent: () =>
			import('./core/routing/page-not-found/page-not-found.component').then(
				m => m.PageNotFoundComponent
			)
	}
];
