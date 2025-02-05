import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from 'src/app/data/services/auth.service';

export const authGuard: CanActivateFn = (_route, _state) => {
  const router = inject(Router);
  const service = inject(AuthService);

  return service.isAuthenticated$.pipe(
    tap((isAuthticated) => {
      if (!isAuthticated) {
        router.navigate(['/auth/sign-in']);
      }
    })
  );
};
