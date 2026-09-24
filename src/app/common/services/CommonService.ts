import { Injectable, signal } from '@angular/core';

export type AppTheme = 'emerald' | 'forest';

@Injectable({ providedIn: 'root' })
export class CommonService {
    private readonly storageKey = 'esvelto-theme';
    readonly theme = signal<AppTheme>(this.getStoredTheme());

    setTheme(theme: AppTheme): void {
        this.theme.set(theme);
        localStorage.setItem(this.storageKey, theme);
        document.documentElement.setAttribute('data-theme', theme);
    }

    toggleTheme(): void {
        this.setTheme(this.theme() === 'emerald' ? 'forest' : 'emerald');
    }

    private getStoredTheme(): AppTheme {
        const storedTheme = localStorage.getItem(this.storageKey);
        const theme = storedTheme === 'forest' ? 'forest' : 'emerald';
        document.documentElement.setAttribute('data-theme', theme);
        return theme;
    }
}
