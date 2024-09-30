import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(
    private readonly snackBar: MatSnackBar,
    private readonly zone: NgZone
  ) {}

  info(message: string) {
    this.show(message, {
      duration: 20000,
      panelClass: 'info'
    });
  }

  success(message: string) {
    this.show(message, {
      duration: 20000,
      panelClass: 'success'
    });
  }

  warn(message: string) {
    this.show(message, {
      duration: 20000,
      panelClass: 'warn'
    });
  }

  error(message: string) {
    this.show(message, {
      duration: 20000,
      panelClass: 'error'
    });
  }

  private show(message: string, configuration: MatSnackBarConfig) {
    // Need to open snackBar from Angular zone to prevent issues with its position per
    // https://stackoverflow.com/questions/50101912/snackbar-position-wrong-when-use-errorhandler-in-angular-5-and-material
    this.zone.run(() => this.snackBar.open(message, undefined, configuration));
  }
}
