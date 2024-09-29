import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'notifications',
    loadComponent: () => import('../examples/notification-banner/notification-banner.component').then(m => m.NotificationBannerComponent)
  },
  {
    path: 'cards',
    loadComponent: () => import('../examples/cards-collection/cards-collection.component').then(m => m.CardsCollectionComponent)
  },
  {
    path: 'stepper',
    loadComponent: () => import('../examples/stepper/stepper.component').then(m => m.StepperComponent)
  },
  {
    path: 'custom',
    loadComponent: () => import('../examples/key-value/key-value.component').then(m => m.KeyValueComponent)
  },
];
