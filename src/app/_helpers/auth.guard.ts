import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';

export const authGuard: CanActivateFn = (route, state) => {
    const router = inject(Router);
    const authService = inject(AuthService);
    const storageService = inject(StorageService);

    const _state = authService.authenticatedUser();
    const { role } = route.data;

    const userRole = storageService.getUser().role;

    return userRole === role && _state;
};
