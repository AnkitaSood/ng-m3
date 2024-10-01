import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatTabLink, MatTabNav, MatTabNavPanel} from "@angular/material/tabs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatTabNav, MatTabNavPanel, MatTabLink, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  demos = [
    {link: 'notifications', label: 'Notifications'},
    {link: 'cards', label: 'Cards'},
    {link: 'stepper', label: 'CDK Stepper'},
    {link: 'custom', label: 'Custom Key Value Component'}
  ];
  activeLink = this.demos[0].link;
}
