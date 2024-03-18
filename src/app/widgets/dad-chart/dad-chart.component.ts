import { Component, Input } from '@angular/core';
import { DadChart } from './dad-chart.interface';

@Component({
  selector: 'app-dad-chart',
  standalone: true,
  imports: [],
  templateUrl: './dad-chart.component.html',
  styleUrl: './dad-chart.component.scss'
})
export class DadChartComponent {
  @Input() Chart: DadChart | undefined = undefined
}
