import {ChangeDetectionStrategy, Component, inject, TemplateRef, viewChild} from '@angular/core';
import {NotificationService} from "./service/notification.service";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  standalone: true,
  imports: [
    MatButton,
    MatIcon
  ],
  templateUrl: './notification-banner.component.html',
  styleUrl: './notification-banner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationBannerComponent {

  private readonly notificationService = inject(NotificationService);
  private errorT = viewChild.required<TemplateRef<Element>>('errorTmpl');
  private warnT = viewChild.required<TemplateRef<Element>>('warnTmpl');
  private infoT = viewChild.required<TemplateRef<Element>>('infoTmpl');
  private successT = viewChild.required<TemplateRef<Element>>('successTmpl');

  info() {
    this.notificationService.info(this.infoT());
  }

  success() {
    this.notificationService.success(this.successT());
  }

  warn() {
    this.notificationService.warn(this.warnT());
  }

  error() {
    this.notificationService.error(this.errorT());
  }
}
