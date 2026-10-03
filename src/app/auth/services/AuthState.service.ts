import { inject, Injectable, signal } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { LoginRequest } from "../models/LoginRequest.dto";
import { UserResponse } from "../models/UserResponse.dto";
import { AuthService } from "./AuthService";

@Injectable({
    providedIn: 'root'
}) export class AuthStateService {

    private authService = inject(AuthService);

    private _user = signal<UserResponse | null>(null);
    readonly user = this._user.asReadonly();
    readonly isAuthenticated = signal(false);
    readonly isLoading = signal(true);

    setUser(user: UserResponse) {
        this._user.set(user);
        this.isAuthenticated.set(true);
        this.isLoading.set(false);
    }

    clear() {
        this._user.set(null);
        this.isAuthenticated.set(false);
        this.isLoading.set(false);
    }

    loadSession(): Observable<void> {
        const token = this.authService.getToken();

        if (!token) {
            this.clear();
            return of(void 0);
        }

        return this.authService.me().pipe(
            tap(user => this.setUser(user)),
            map(() => void 0),
            catchError(error => {
                this.authService.removeToken();
                this.clear();
                console.error('No se pudo restaurar la sesión', error);
                return of(void 0);
            })
        );
    }

    login(request: LoginRequest): Observable<UserResponse> {
        return this.authService.login(request).pipe(
            switchMap(() => this.authService.me()),
            tap(user => this.setUser(user)),
            catchError(error => {
                this.authService.removeToken();
                this.clear();
                return throwError(() => error);
            })
        );
    }

    logout() {
        this.authService.removeToken();
        this.clear();
    }

}