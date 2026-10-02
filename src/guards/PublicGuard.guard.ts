import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthStateService } from "../app/auth/services/AuthState.service";

export const publicGuard: CanActivateFn = () => {

    const stateService = inject(AuthStateService);
    const router = inject(Router);

    if (stateService.isAuthenticated()) {
        return false;
    }

    return router.createUrlTree(['/dashboard'])

}