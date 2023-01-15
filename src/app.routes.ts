import { Routes } from "@angular/router";
import { StartComponent } from "./app/start/start.component";

export const APP_ROUTES: Routes = [
    { path: '', pathMatch: 'full', component: StartComponent },
    { path: 'privacy', loadComponent: () => import('./app/privacy/privacy.component').then(c => c.PrivacyComponent) }
];