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
import {MatDividerModule} from '@angular/material/divider'; 
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatIconModule, ListFiltersComponent, MatCardModule,
    MatDividerModule, ListCardComponent, ListTablecomponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  private ListData = this.route.data.pipe(
    map(data => this.http.get<ListData>(data['DataUrl'])),
    concatAll()
  )
  private ListItems = this.ListData.pipe(map(listData => listData.ListItems))
  private FilterChange = (new Subject<string>()).pipe(startWith('firstfilterchange'))
  public View = this.ListData.pipe(map(listData => listData.View))
  public PageChange = this.ListData.pipe(map(listData => listData.Paging))
  public Filters = this.ListData.pipe(map(listData => listData.Filters))
  public PagedItems = combineLatest([
    this.ListItems,
    this.PageChange,
    this.FilterChange
  ]).pipe(
    map(values => {
      let list = values[0]
      let paging = values[1]
      let filters = values[2]
      console.warn('PAGE')
      if(paging){
        return list.slice(paging.Index, (paging.Index + 1) * paging.Size)
      }else{
        return list
      }
    })
  )
  constructor(private http: HttpClient, private route: ActivatedRoute) { }
}
export interface ListPaging {
  Index: number,
  Size: number
}
export interface ListData{
  Filters?: ListFilter[]
  Paging?: ListPaging
  ListItems: ListItem[]
  View: 'row' | 'grid'
}
export interface ListFilter{}
export interface ListFilterChange{}