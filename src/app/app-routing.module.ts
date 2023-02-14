// Angular modules
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '@helpers/auth.gaurd';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

// Components
import { NotFoundComponent } from './static/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'app',
    component:DashboardComponent,
    loadChildren:() =>
    import('./pages/dashboard/dashboard.module').then(
      (m) => m.DashboardModule
    ),
    canActivate:[AuthGuard]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      relativeLinkResolution: 'legacy',
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
