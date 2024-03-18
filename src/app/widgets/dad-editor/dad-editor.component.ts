import { Component, Input } from '@angular/core';
import { DadEditor } from './dad-editor.interface';

@Component({
  selector: 'app-dad-editor',
  standalone: true,
  imports: [],
  templateUrl: './dad-editor.component.html',
  styleUrl: './dad-editor.component.scss'
})
export class DadEditorComponent {
  @Input() Editor: DadEditor | undefined = undefined
}
