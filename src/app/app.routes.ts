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
    path: 'custom',
    loadComponent: () => import('../examples/key-value/key-value.component').then(m => m.KeyValueExampleComponent)
  },
  {
    path: 'address',
    loadComponent: () => import('../examples/customer-address/customer-address.component').then(m => m.CustomerAddressComponent)
  },
];
