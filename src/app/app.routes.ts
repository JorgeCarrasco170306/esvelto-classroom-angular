import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },

            {
                path: 'home',
            },

        ]
    },
];
