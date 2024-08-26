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

  {
    path: 'store',
    loadComponent: () => import('./pages/store/store.page').then( m => m.StorePage)
  },

  { path: 'not-found', loadComponent: () => import('./shared/not-found/not-found.component').then((m) => m.NotFoundComponent) },

  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },


];
