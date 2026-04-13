import { Component, Input } from '@angular/core';

@Component({
  selector: 'component-displayer',
  standalone: false,
  templateUrl: './component-displayer.html',
  styleUrl: './component-displayer.css',
})
export class ComponentDisplayer {
  @Input() heading!: string;
  @Input() componentList!: any[];

}
