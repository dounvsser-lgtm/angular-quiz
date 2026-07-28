import { Injectable, signal } from '@angular/core';
import { CURRENT_MOCK_USER, USERS_MOCK } from '../App/mocks/user.mock';
import type { User } from '../App/Models/users-model';

@Injectable({ providedIn: 'root' })
export class UserService {
  currentUser = signal<User | null>(null);

  loadCurrentUser(): void {
    const user =
      USERS_MOCK.find((x) => x.id == CURRENT_MOCK_USER) ?? USERS_MOCK[0];
    this.currentUser.set(user);
  }
}
