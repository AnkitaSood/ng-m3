import {Injectable, NgZone, TemplateRef} from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(
    private readonly snackBar: MatSnackBar,
    private readonly zone: NgZone
  ) {}

  info(message: TemplateRef<Element>) {
    this.show(message, {
      duration: 10000,
      panelClass: 'info'
    });
  }

  success(message: TemplateRef<Element>) {
    this.show(message, {
      duration: 10000,
      panelClass: 'success'
    });
  }

  warn(message: TemplateRef<Element>) {
    this.show(message, {
      duration: 10000,
      panelClass: 'warn'
    });
  }

  error(message: TemplateRef<Element>) {
    this.show(message, {
      duration: 10000,
      panelClass: 'error'
    });
  }

  private show(message: TemplateRef<Element>, configuration: MatSnackBarConfig) {
    // Need to open snackBar from Angular zone to prevent issues with its position per
    // https://stackoverflow.com/questions/50101912/snackbar-position-wrong-when-use-errorhandler-in-angular-5-and-material
    this.zone.run(() => this.snackBar.openFromTemplate(message, configuration));
  }
}
