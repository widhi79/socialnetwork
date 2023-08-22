import { RouterModule, Routes } from '@angular/router';
import { landingComponent } from './landing/landing.component';

const routes: Routes = [
    { path: 'landing', component: landingComponent },
    { path: '', redirectTo: 'landing', pathMatch: "full"},
    //{ path: '**', redirectTo: 'login', pathMatch: "full"},
]
export const appRoutingModule = RouterModule.forRoot(routes, { useHash: false });