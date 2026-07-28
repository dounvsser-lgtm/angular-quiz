import { Injectable } from '@angular/core';
import { Role, User } from '../App/Models/users-model';

@Injectable({ providedIn: 'root' })
export class PermissionsService {
  hasRole(user: User, role: Role): boolean {
    return user?.role === role;
  }

  canPlay(user: User): boolean {
    return this.hasRole(user, 'admin') || this.hasRole(user, 'player');
  }

  canViewHistory(user: User): boolean {
    return (
      this.hasRole(user, 'admin') ||
      this.hasRole(user, 'player') ||
      this.hasRole(user, 'viewer')
    );
  }

  canViewAllHistory(user: User): boolean {
    return this.hasRole(user, 'admin');
  }
}
