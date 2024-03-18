import { Component, Input } from '@angular/core';
import { DadForm } from './dad-form.interface';

@Component({
  selector: 'app-dad-form',
  standalone: true,
  imports: [],
  templateUrl: './dad-form.component.html',
  styleUrl: './dad-form.component.scss'
})
export class DadFormComponent {
  @Input() Form: DadForm | undefined = undefined
}
