import { Injectable } from '@angular/core';
import { DadPageService } from './templates/dad-page/dad-page.service';
import { DadWidgetService } from './widgets/dad-widget.service';
import { Subject, combineLatestWith, map, shareReplay, startWith } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadAppService {
  private DataLoaded = this.page.DataLoaded.pipe(startWith(false))
  private WidgetCount = this.page.WidgetCount.pipe(startWith(1))
  private WidgetLoaded = this.page.WidgetLoaded.pipe(startWith(undefined))
  private widgetsLoaded = 0
  Progress = this.DataLoaded.pipe(
    combineLatestWith(this.WidgetCount),
    combineLatestWith(this.WidgetLoaded), 
    map(([[data, count], loaded]) => {
      if(!data) {
        this.widgetsLoaded = 0
        return 0
      }
      if(loaded === undefined) {
        return 30
      } 
      this.widgetsLoaded++
      return Math.floor(30+((this.widgetsLoaded/count)*70))
    }),
    shareReplay(1)
  )
  constructor(private page: DadPageService, private widget: DadWidgetService) { }
}
