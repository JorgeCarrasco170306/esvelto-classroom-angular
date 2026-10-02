import { inject, Injectable, Service, signal } from "@angular/core";
import { UserResponse } from "../models/UserResponse.dto";
import { AuthService } from "./AuthService";

@Injectable({
    providedIn: 'root'
}) export class AuthStateService {

    private authService = inject(AuthService);

    private _user = signal<UserResponse | null>(null);
    readonly user = this._user.asReadonly();
    readonly isAuthenticated = signal(false);
    readonly isLoading = signal(false);

    setUser(user: UserResponse) {
        this._user.set(user);
        this.isAuthenticated.set(true);
        this.isLoading.set(false);
    }

    clear() {
        this._user.set(null);
        this.isAuthenticated.set(false);
        this.isLoading.set(true);
    }

    loadSession() {
        const token = this.authService.getToken();

        if (!token) {
            this.clear();
            return;
        }

        this.authService.me().subscribe({
            next: (user) => {
                this.setUser(user);
            },
            error: (error) => {
                this.authService.removeToken();
                this.clear();
                console.log(error);
            }
        })
    }

    logout() {
        this.authService.removeToken();
        this.clear();
    }

}