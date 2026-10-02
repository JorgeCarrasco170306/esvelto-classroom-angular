import { Routes } from '@angular/router';
import { AuthLayout } from './auth/layout/AuthLayout/AuthLayout';
import { DashboardLayout } from './dashboard/layout/DashboardLayout/DashboardLayout';

export const routes: Routes = [

    {
        path: 'auth',
        component: AuthLayout,
        children: [
            {
                path: 'login',
                loadComponent: () => import("./auth/pages/LoginPage/LoginPage").then(x => x.LoginPage)
            },
            {
                path: 'register',
                loadComponent: () => import("./auth/pages/RegisterPage/RegisterPage").then(x => x.RegisterPage)
            },
            {
                path: 'validate-email',
                loadComponent: () => import("./auth/pages/ValidateEmailPage/ValidateEmailPage").then(x => x.ValidateEmailPage)
            },
            {
                path: '**',
                redirectTo: 'login',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: 'dashboard',
        component: DashboardLayout,
        children: [
        ]
    },
    {
        path: 'auth',
        component: AuthLayout,
        children: [
            {
                path: 'login',
                loadComponent: () => import("./auth/pages/LoginPage/LoginPage").then(x => x.LoginPage)
            },
            {
                path: 'register',
                loadComponent: () => import("./auth/pages/RegisterPage/RegisterPage").then(x => x.RegisterPage)
            },
            {
                path: 'validate-email',
                loadComponent: () => import("./auth/pages/ValidateEmailPage/ValidateEmailPage").then(x => x.ValidateEmailPage)
            },
            {
                path: '**',
                redirectTo: 'login',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'auth',
        pathMatch: 'full'
    }


];
