import { Routes } from "@angular/router";

export const APP_ROUTES: Routes = [
    { path: '', pathMatch: 'full', loadComponent: () => import('./app/start/start.component').then(c => c.StartComponent) },
    { path: 'privacy', loadComponent: () => import('./app/privacy/privacy.component').then(c => c.PrivacyComponent) }
];