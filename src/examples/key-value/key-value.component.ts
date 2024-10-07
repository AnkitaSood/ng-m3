import {Component, input} from '@angular/core';

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
  imports: [KeyValueComponent],
  template: `<app-key-value key="Name">Blah</app-key-value>`
})
export class KeyValueExampleComponent {

}
