import { Component } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-listing-paginator',
  standalone: true,
  imports: [MatPaginatorModule],
  templateUrl: './listing-paginator.component.html',
  styleUrl: './listing-paginator.component.scss'
})
export class ListingPaginatorComponent {

  PageChange(event: PageEvent){
    console.warn('PAGE EVENT', event)
  }
}
