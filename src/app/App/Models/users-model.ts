export type Role = 'admin' | 'player' | 'viewer';

export interface User {
  id: string;
  name: string;
  role: Role;
}
