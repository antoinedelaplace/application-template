import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UserState, userAdapter } from './user.reducer';

export const selectUserState = createFeatureSelector<UserState>('user');

export const selectUsersEntityState = createSelector(
	selectUserState,
	state => state.users
);

export const selectAllUsers = userAdapter.getSelectors(
	selectUsersEntityState
).selectAll;
