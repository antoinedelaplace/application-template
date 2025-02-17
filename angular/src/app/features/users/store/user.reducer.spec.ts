import { addUser } from './user.actions';
import { initialState, userReducer } from './user.reducer';

describe('User Reducer', () => {
	const mockUser = { id: '1', name: 'User 1', email: 'user1@example.com' };

	it('should add a user', () => {
		const result = userReducer(initialState, addUser({ user: mockUser }));
		expect(result.users.ids).toContain(mockUser.id);
		expect(result.users.entities[mockUser.id]).toEqual(mockUser);
	});
});
