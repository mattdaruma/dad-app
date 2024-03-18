import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { ActivatedRoute } from '@angular/router';
import { concatAll, debounce, debounceTime, map, startWith } from 'rxjs';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { CommonModule } from '@angular/common';
import { Grid } from './grid.interface';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule, MatGridListModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent {
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

// @mixin xs {
//   @media #{'screen and (max-width: 599px)'} { @content; }
// }

// @mixin sm {
//   @media #{'screen and (min-width: 600px) and (max-width: 959px)'} { @content; }
// }

// @mixin md {
//   @media #{'screen and (min-width: 960px) and (max-width: 1279px)'} { @content; }
// }

// @mixin lg {
//   @media #{'screen and (min-width: 1280px) and (max-width: 1919px)'} { @content; }
// }

// @mixin xl {
//   @media #{'screen and (min-width: 1920px) and (max-width: 5000px)'} { @content; }
// }