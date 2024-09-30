import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {NotificationService} from "./service/notification.service";
import {MatButton} from "@angular/material/button";

@Component({
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './notification-banner.component.html',
  styleUrl: './notification-banner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationBannerComponent {

  private readonly notificationService = inject(NotificationService);

  info() {
    this.notificationService.info('Info message');
  }

  success() {
    this.notificationService.success('Success message');
  }

  warn() {
    this.notificationService.warn('Warning message');
  }

  error() {
    this.notificationService.error('Error message');
  }
}
