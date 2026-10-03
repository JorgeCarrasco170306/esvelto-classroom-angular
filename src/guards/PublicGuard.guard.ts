import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthStateService } from "../app/auth/services/AuthState.service";

export const publicGuard: CanActivateFn = () => {

    const authState = inject(AuthStateService);
    const router = inject(Router);

    if (authState.isAuthenticated()) {
        return router.createUrlTree(['/dashboard']);
    }

    return true;

}