import { Routes } from '@angular/router';
import { MainLayout } from './shared/layouts/MainLayout/MainLayout';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },

            {
                path: 'home',
                loadComponent: () => import('./home/pages/HomePage/HomePage').then(x => x.HomePage)
            },

        ]
    },
];
