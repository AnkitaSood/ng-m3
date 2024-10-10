import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatAnchor} from "@angular/material/button";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatAnchor, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  demos = [
    {link: 'cards', label: 'Cards'},
    {link: 'notifications', label: 'Notifications'},
    {link: 'custom', label: 'Custom Key Value'},
    {link: 'address', label: 'Customer Address'}
  ];
  activeLink = this.demos[0].link;
}
