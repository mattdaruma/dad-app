import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { ListingService } from './listing.service';
import { ListingCardComponent } from './listing-card/listing-card.component';
import { ListingTableComponent } from './listing-table/listing-table.component';
import { ListingFiltersComponent } from './listing-filters/listing-filters.component';

@Component({
  selector: 'app-listings',
  standalone: true,
  imports: [MatTabsModule, MatIconModule, ListingFiltersComponent,
    ListingCardComponent, ListingTableComponent],
  templateUrl: './listings.component.html',
  styleUrl: './listings.component.scss'
})
export class ListingsComponent {
  constructor(private list: ListingService){
    this.list.Listings.subscribe(res => console.warn("LISTINGS", res))
  }
}
