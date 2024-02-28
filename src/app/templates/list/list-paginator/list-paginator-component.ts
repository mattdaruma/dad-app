import { Component } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-listing-paginator',
  standalone: true,
  imports: [MatPaginatorModule],
  templateUrl: './list-paginator-component.html',
  styleUrl: './list-paginator-component.scss'
})
export class ListPaginatorComponent {

  PageChange(event: PageEvent){
    console.warn('PAGE EVENT', event)
  }
}
