import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthStateService } from "../app/auth/services/AuthState.service";


export const authGuard: CanActivateFn = () => {


    const authState = inject(AuthStateService);
    const router = inject(Router);


    if (authState.isAuthenticated()) {
        return true;
    }

    return router.createUrlTree(['/auth/login'])

}