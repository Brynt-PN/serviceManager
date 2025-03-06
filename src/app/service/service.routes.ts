import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./service.page').then((m) => m.ServicePage),
  },
  {
    path: 'add-service',
    loadComponent: () =>
      import('./add-service/add-service.page').then((m) => m.AddServicePage),
  },
];
