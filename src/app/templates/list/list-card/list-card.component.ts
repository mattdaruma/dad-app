import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'

@Component({
  selector: 'app-listing-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './list-card.component.html',
  styleUrl: './list-card.component.scss'
})
export class ListCardComponent {
  @Input() ListItem: any
}
