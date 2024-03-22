import { AfterViewInit, Component, Input, forwardRef } from '@angular/core';
import { DadContainer } from './dad-container.interface';
import { CommonModule } from '@angular/common';
import { DadWidgetComponent } from '../dad-widget.component';

@Component({
  selector: 'app-dad-container',
  standalone: true,
  imports: [CommonModule, forwardRef(()=> DadWidgetComponent)],
  templateUrl: './dad-container.component.html',
  styleUrl: './dad-container.component.scss'
})
export class DadContainerComponent implements AfterViewInit{
  @Input() Container: DadContainer | undefined = undefined
  ngAfterViewInit(): void {
    this.Container?.Loaded?.next(this.Container.Type)
    if(this.Container?.Loaded) this.Container.Loaded = undefined
    for(let s of this.Container?.Children ?? []){
      s.Loaded?.next(s.Type)
    }
  }
}
