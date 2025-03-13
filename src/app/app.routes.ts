import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'service',
    loadChildren: () =>
      import('./service/service.routes').then((m) => m.routes),
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./register/register.page').then((m) => m.RegisterPage),
  },
  {
    path: 'afiliation',
    loadComponent: () =>
      import('./afiliation/afiliation.page').then((m) => m.AfiliationPage),
  },
  {
    path: 'request',
    loadComponent: () =>
      import('./request/request.page').then((m) => m.RequestPage),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./profile/profile.page').then((m) => m.ProfilePage),
  },
  {
    path: 'details-afiliation',
    loadComponent: () => import('./afiliation/details-afiliation/details-afiliation.page').then(m => m.DetailsAfiliationPage)
  },
  {
    path: 'edit-profile',
    loadComponent: () => import('./profile/edit-profile/edit-profile.page').then(m => m.EditProfilePage)
  }

];
