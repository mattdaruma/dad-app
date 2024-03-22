import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input, forwardRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { DadCard, DadCardAction, DadCardActions, DadCardContent, DadCardFooter, DadCardHeader, DadCardImage } from './dad-card.interface';
import { DadWidgetComponent } from '../dad-widget.component';
import { DadWidget } from '../dad-widget.interface';

@Component({
  selector: 'app-dad-card',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, MatCardModule, MatButtonModule, forwardRef(() => DadWidgetComponent)],
  templateUrl: './dad-card.component.html',
  styleUrl: './dad-card.component.scss'
})
export class DadCardComponent implements AfterViewInit {
  @Input() Card: DadCard | undefined = undefined
  public AsHeader = (section: DadWidget) => section as DadCardHeader
  public AsImage = (section: DadWidget) => section as DadCardImage
  public AsActions = (section: DadWidget) => section as DadCardActions
  public AsFooter = (section: DadWidget) => section as DadCardFooter
  public AsContent = (section: DadWidget) => section as DadCardContent
  ngAfterViewInit(): void {
    this.Card?.Loaded?.next(this.Card.Type)
    if (this.Card?.Loaded) this.Card!.Loaded = undefined
    for (let s of this.Card?.Children ?? []) {
      s.Loaded?.next(s.Type)
      if (s.Type == 'card-actions') {
        for (let a of s.Children!) {
          (a as DadCardAction).Loaded?.next(a.Type)
        }
      }
    }
  }
}
