import { Routes } from '@angular/router';
import { HomeLayout } from './home/layout/HomeLayout/HomeLayout';
import { AuthLayout } from './auth/layout/AuthLayout/AuthLayout';

export const routes: Routes = [
    {
        path: '',
        component: HomeLayout,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                loadComponent: () =>
                    import('./home/pages/HomePage/HomePage').then((m) => m.HomePage)
            }
        ]
    },
    {
        path: 'auth',
        component: AuthLayout,
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },
            {
                path: 'login',
                loadComponent: () =>
                    import('./auth/pages/LoginPage/LoginPage').then((m) => m.LoginPage)
            },
            {
                path: 'register',
                loadComponent: () =>
                    import('./auth/pages/RegisterPage/RegisterPage').then((m) => m.RegisterPage)
            }
        ]
    }
];