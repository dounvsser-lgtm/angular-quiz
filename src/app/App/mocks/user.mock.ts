import type { User } from '../Models/users-model';

export const USERS_MOCK: User[] = [
  { id: '1', name: 'Владимир', role: 'admin' },
  { id: '2', name: 'Николай', role: 'player' },
  { id: '3', name: 'Алексей', role: 'viewer' },
];

export const CURRENT_MOCK_USER = '1';
