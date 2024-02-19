import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { ListingService } from './listing.service';
import { ListingCardComponent } from './listing-card/listing-card.component';
import { ListingTableComponent } from './listing-table/listing-table.component';
import { ListingFiltersComponent } from './listing-filters/listing-filters.component';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs';

@Component({
  selector: 'app-listings',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatIconModule, ListingFiltersComponent,
    ListingCardComponent, ListingTableComponent],
  templateUrl: './listings.component.html',
  styleUrl: './listings.component.scss'
})
export class ListingsComponent {
  public PagedListings = this.list.Listings.pipe(map(listData => {
    return listData
  }))
  constructor(private list: ListingService){  }
}
