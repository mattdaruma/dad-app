import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "listings",
        loadComponent: () => import('./listings/listings.component').then(m => m.ListingsComponent)
    },
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: '**',
        redirectTo: '/'
    }
];
