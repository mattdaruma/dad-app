import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-listing-filters',
  standalone: true,
  imports: [MatExpansionModule, MatIconModule],
  templateUrl: './listing-filters.component.html',
  styleUrl: './listing-filters.component.scss'
})
export class ListingFiltersComponent {

}
