import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { ListCardComponent } from './list-card/list-card.component';
import { ListTablecomponent } from './list-table/list-table.component';
import { ListFiltersComponent } from './list-filters/list-filters.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subject, combineLatest, concatAll, map, startWith } from 'rxjs';
import { ListItem } from './list-item.interface';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatIconModule, ListFiltersComponent,
    ListCardComponent, ListTablecomponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  private List = this.route.data.pipe(
    map(data => this.http.get<ListItem[]>(data['DataUrl'])),
    concatAll()
  )
  public PageChange = new Subject<ListPaging>()
  public FilterChange = new Subject<string>()
  public PagedListings = combineLatest([
    this.List,
    this.PageChange.pipe(startWith({ Index: 0, Size: 10 })),
    this.FilterChange.pipe(startWith('firstfilterchange'))
  ]).pipe(
    map(values => {
      let list = values[0]
      let paging = values[1]
      let filters = values[2]
      return list.slice(paging.Index, (paging.Index + 1) * paging.Size)
    })
  )
  constructor(private http: HttpClient, private route: ActivatedRoute) { }
}
export interface ListPaging {
  Index: number,
  Size: number
}