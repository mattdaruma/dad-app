import { Component, Input } from '@angular/core';
import { DadView } from './dad-view.interface';
import { CommonModule } from '@angular/common';
import { QuillModule } from 'ngx-quill';

@Component({
  selector: 'app-dad-view',
  standalone: true,
  imports: [CommonModule, QuillModule],
  templateUrl: './dad-view.component.html',
  styleUrl: './dad-view.component.scss'
})
export class DadViewComponent {
  @Input() View: DadView | undefined
}
