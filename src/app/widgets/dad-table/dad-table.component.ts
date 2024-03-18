import { Component, Input } from '@angular/core';
import { DadTable } from './dad-table.interface';

@Component({
  selector: 'app-dad-table',
  standalone: true,
  imports: [],
  templateUrl: './dad-table.component.html',
  styleUrl: './dad-table.component.scss'
})
export class DadTableComponent {
  @Input() Table: DadTable | undefined
}
