import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { DadCard, DadCardActions, DadCardContent, DadCardFooter, DadCardHeader, DadCardImage, DadCardSection } from './dad-card.interface';
import { DadWidgetComponent } from '../dad-widget/dad-widget.component';

@Component({
  selector: 'app-dad-card',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, MatCardModule, MatButtonModule, forwardRef(()=> DadWidgetComponent)],
  templateUrl: './dad-card.component.html',
  styleUrl: './dad-card.component.scss'
})
export class DadCardComponent {
  @Input() Card: DadCard | undefined = undefined
  public AsHeader = (section: DadCardSection) => section as DadCardHeader
  public AsImage = (section: DadCardSection) => section as DadCardImage
  public AsActions = (section: DadCardSection) => section as DadCardActions
  public AsFooter = (section: DadCardSection) => section as DadCardFooter
  public AsContent = (section: DadCardSection) => section as DadCardContent
}
