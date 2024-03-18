import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, concatAll, fromEvent, debounceTime, startWith } from 'rxjs';
import { Grid } from '../grid/grid.interface';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-smart-grid',
  standalone: true,
  imports: [CommonModule, MatGridListModule],
  templateUrl: './smart-grid.component.html',
  styleUrl: './smart-grid.component.scss'
})
export class SmartGridComponent {
  private GridData = this.route.data.pipe(
    map(data => this.http.get<Grid>(data['DataUrl'])),
    concatAll()
  )
  WindowResize = fromEvent(window,'resize');
  constructor(public http: HttpClient, private route: ActivatedRoute){
    this.WindowResize.pipe(debounceTime(100)).subscribe(val => {
      let width = window.innerWidth
      console.warn('Columns', Math.floor(width / 100))
    })
  }
  GridColumns = this.WindowResize.pipe(
    map(ev => Math.floor(window.innerWidth / 100)),
    startWith(Math.floor(window.innerWidth / 100))
    )
  GridTiles = this.GridColumns.pipe(
    map(cols => {
      let tiles = []
      for(let ti in this.tiles){
        let tile = {...this.tiles[ti]}
        if(tile.cols > cols) tile.cols = cols
        tiles.push(tile)
      }
      return tiles
    })
  )
  tiles: any[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    {text: 'Five', cols: 1, rows: 1, color: '#F1DDBD'},
  ];
}
