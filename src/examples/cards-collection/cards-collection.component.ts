import { Component } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader, MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatButton} from "@angular/material/button";

@Component({
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardTitle,
    MatCardSubtitle,
    MatCardHeader,
    MatCardActions,
    MatButton,
    MatCardImage
  ],
  templateUrl: './cards-collection.component.html',
  styleUrl: './cards-collection.component.scss'
})
export class CardsCollectionComponent {

}
