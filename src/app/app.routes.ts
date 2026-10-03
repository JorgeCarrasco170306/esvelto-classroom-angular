import { Routes } from '@angular/router';
import { AuthLayout } from './auth/layout/AuthLayout/AuthLayout';
import { DashboardLayout } from './dashboard/layout/DashboardLayout/DashboardLayout';
import { authGuard } from '../guards/AuthGuard.guard';
import { publicGuard } from '../guards/PublicGuard.guard';

export const routes: Routes = [

    {
        path: 'auth',
        component: AuthLayout,
        canActivate: [publicGuard],
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
        canActivate: [authGuard],
        children: [

            // ! institutions
            {
                path: 'institutions',
                loadComponent: () => import('./dashboard/institutions/pages/InstitutionsPage/InstitutionsPage').then(x => x.InstitutionsPage)
            },
            // ! courses
            {
                path: 'courses',
                loadComponent: () => import('./dashboard/courses/pages/CoursesPage/CoursesPage').then(x => x.CoursesPage)
            },
            {
                path: 'students',
                loadComponent: () => import('./dashboard/students/pages/StudentsPage/StudentsPage').then(x => x.StudentsPage)
            },
            // ! homeworks
            {
                path: 'homeworks',
                loadComponent: () => import('./dashboard/homeworks/pages/HomeworksPage/HomeworksPage').then(x => x.HomeworksPage)
            },
            // ! profile
            {
                path: 'profile',
                loadComponent: () => import('./dashboard/profile/pages/ProfilePage/ProfilePage').then(x => x.ProfilePage)
            },
            // ! califications
            {
                path: 'califications',
                loadComponent: () => import('./dashboard/califications/pages/CalificationsPage/CalificationsPage').then(x => x.CalificationsPage)
            },
            {
                path: '',
                redirectTo: 'profile',
                pathMatch: 'full'
            },
        ]
    },
    {
        path: '**',
        redirectTo: 'auth',
        pathMatch: 'full'
    }


];
