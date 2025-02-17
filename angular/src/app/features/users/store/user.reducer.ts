import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import * as UserActions from './user.actions';
import { User } from './user.model';

export const userAdapter = createEntityAdapter<User>();

export interface UserState {
	users: EntityState<User>;
	loading: boolean;
	error: string;
}

export const initialState = {
	users: userAdapter.getInitialState(),
	loading: false,
	error: ''
};

export const userReducer = createReducer(
	initialState,
	on(UserActions.addUser, (state, { user }) => ({
		...state,
		users: userAdapter.addOne(user, state.users)
	}))
);
