import {Component, input} from '@angular/core';
import {MatDivider} from "@angular/material/divider";

@Component({
  standalone: true,
  imports: [],
  templateUrl: './key-value.component.html',
  styleUrl: './key-value.component.scss',
  selector: 'app-key-value',
})
export class KeyValueComponent {
  key = input<string>();
}

@Component({
  standalone: true,
  imports: [KeyValueComponent, MatDivider],
  styles: `
  mat-divider {
    margin: 20px 0;
  }
  `,
  template: `
    <app-key-value key="Name">Dua Lipa</app-key-value>
    <app-key-value key="Birthdate">August 22, 1995 (born in London, England).</app-key-value>
    <app-key-value key="Nationality">British-Albanian.</app-key-value>
    <app-key-value key="Debut Album">Dua Lipa (2017)</app-key-value>
    <app-key-value key="Music Style">Known for blending pop, dance, and R&B influences.</app-key-value>
    <mat-divider />

    <app-key-value key="Birth Name">Jaten Dimsdale</app-key-value>
    <app-key-value key="Stage Name">Teddy Swims</app-key-value>
    <app-key-value key="Birthdate">September 25, 1992 (born in Atlanta, Georgia, USA).</app-key-value>
    <app-key-value key="Nationality">American.</app-key-value>
    <app-key-value key="Debut EP">Unlearning (2021)</app-key-value>
    <app-key-value key="Music Style">Blends soul, R&B, country, and pop.</app-key-value>

  `
})
export class KeyValueExampleComponent {

}
