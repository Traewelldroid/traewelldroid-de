import { Routes } from "@angular/router";
import { PrivacyComponent } from "./app/privacy/privacy.component";
import { StartComponent } from "./app/start/start.component";

export const APP_ROUTES: Routes = [
    { path: '', pathMatch: 'full', component: StartComponent },
    { path: 'privacy', pathMatch: 'full', component: PrivacyComponent }
];