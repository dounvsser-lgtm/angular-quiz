import { Injectable, signal } from '@angular/core';
import { CURRENT_MOCK_USER, USERS_MOCK } from '../App/mocks/user.mock';
import type { User } from '../App/Models/users-model';
import { BehaviorSubject, Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly userSubject = new BehaviorSubject<User | null>(null);

  readonly currentUser$: Observable<User | null> =
    this.userSubject.asObservable();

  readonly currentUser = toSignal(this.currentUser$, {
    initialValue: null as User | null,
  });

  loadCurrentUser(): void {
    const user =
      USERS_MOCK.find((x) => x.id == CURRENT_MOCK_USER) ?? USERS_MOCK[0];
    this.userSubject.next(user);
  }

  switchUser(userId: string): void {
    const user = USERS_MOCK.find((u) => u.id === userId) ?? null;
    this.userSubject.next(user);
  }

  getCurrentUserSnapshot(): User | null {
    return this.userSubject.getValue();
  }
}
