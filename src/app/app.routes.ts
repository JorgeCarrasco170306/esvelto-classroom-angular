import { Routes } from '@angular/router';
import { HomeLayoutComponent } from './home/layout/HomeLayoutComponent/HomeLayoutComponent';
import { AuthLayoutComponent } from './auth/layout/AuthLayoutComponent/AuthLayoutComponent';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeLayoutComponent,
        children: [
            {
                path: '',
                loadComponent: () => import('./home/pages/HomePage/HomePage').then(x => x.HomePage)
            },
        ]
    },
    {
        path: 'auth',
        component: AuthLayoutComponent,
        children: [
            {
                path: 'sign-up',
                loadComponent: () => import('./auth/pages/SignUpPage/SignUpPage').then(x => x.SignUpPage)
            },
            {
                path: 'sign-in',
                loadComponent: () => import('./auth/pages/SignInPage/SignInPage').then(x => x.SignInPage)
            },
        ]
    }
];
