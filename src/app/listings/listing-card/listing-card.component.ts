import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'

@Component({
  selector: 'app-listing-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './listing-card.component.html',
  styleUrl: './listing-card.component.scss'
})
export class ListingCardComponent {

}
