import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
  },

  {
    path: 'lola',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  { path: 'not-found', loadComponent: () => import('./shared/not-found/not-found.component').then((m) => m.NotFoundComponent) },

  { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
];
