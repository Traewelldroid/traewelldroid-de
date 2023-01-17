import { Routes } from "@angular/router";

export const APP_ROUTES: Routes = [
    { path: '', pathMatch: 'full', loadComponent: () => import('./app/start/start.component') },
    { path: 'privacy', loadComponent: () => import('./app/privacy/privacy.component') }
];