import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/home-page.component'),
  },
  {
    path: 'test-page-1',
    loadComponent: () => import('./pages/test-page-1.component'),
  },
  {
    path: 'test-page-2',
    loadComponent: () => import('./pages/test-page-2.component'),
    data: { preload: false },
  },
  {
    path: 'test-page-3',
    loadComponent: () => import('./pages/test-page-3.component'),
  },
];
