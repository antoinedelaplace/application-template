import { createAction, props } from '@ngrx/store';

import { User } from './user.model';

export const addUser = createAction(
	'[User List] Add User',
	props<{ user: User }>()
);
